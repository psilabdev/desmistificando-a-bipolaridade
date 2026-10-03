/*
  UX v6 patch
  - Browser-like back/forward review without forcing quiz answers again
  - More visible navigation controls
  - Post-test remains assessment-only: no correctness feedback during administration
*/

(() => {
  const nav = {
    trail: [],
    index: 0,
    replaying: false,
    latestUi: null
  };

  function viewPoint() {
    return {
      screen: state.screen,
      phase: state.phase,
      q: state.q,
      preIndex: state.preIndex,
      postIndex: state.postIndex,
      phaseFirst: state.phaseFirst,
      phaseXpStart: state.phaseXpStart,
      completed: state.completed,
      xp: state.xp,
      firstTryCorrect: state.firstTryCorrect,
      answeredQuestions: state.answeredQuestions,
      reviewed: state.reviewed,
      preScore: state.preScore,
      postScore: state.postScore,
      postAnswered: state.postAnswered,
      badges: JSON.parse(JSON.stringify(state.badges || []))
    };
  }

  function samePoint(a, b) {
    return !!a && a.screen === b.screen && a.phase === b.phase && a.q === b.q &&
      a.preIndex === b.preIndex && a.postIndex === b.postIndex;
  }

  function captureCurrentUi() {
    if (state.screen === 'quiz') {
      const buttons = [...document.querySelectorAll('#options .option')];
      return {
        kind: 'quiz',
        completed: !$('nextBtn').disabled,
        correct: buttons.findIndex(b => b.classList.contains('correct')),
        wrong: buttons.map((b, i) => b.classList.contains('wrong') ? i : -1).filter(i => i >= 0),
        feedbackClass: $('feedback').className,
        feedbackHtml: $('feedback').innerHTML,
        retry: $('retryHint').textContent
      };
    }
    if (state.screen === 'posttest') {
      const buttons = [...document.querySelectorAll('#postOptions .option')];
      return {
        kind: 'posttest',
        completed: !$('postNextBtn').disabled,
        selected: buttons.findIndex(b => b.classList.contains('selected'))
      };
    }
    return null;
  }

  function applyLatestUi(ui) {
    if (!ui) return;
    if (ui.kind === 'quiz' && state.screen === 'quiz') {
      const buttons = [...document.querySelectorAll('#options .option')];
      if (ui.completed) {
        buttons.forEach(b => { b.disabled = true; b.classList.add('locked'); });
        if (ui.correct >= 0 && buttons[ui.correct]) {
          buttons[ui.correct].classList.remove('locked');
          buttons[ui.correct].classList.add('correct');
        }
        ui.wrong.forEach(i => {
          if (buttons[i]) buttons[i].classList.add('wrong');
        });
        $('feedback').className = ui.feedbackClass;
        $('feedback').innerHTML = ui.feedbackHtml;
        $('retryHint').textContent = ui.retry;
        $('nextBtn').disabled = false;
      }
    }
    if (ui.kind === 'posttest' && state.screen === 'posttest' && ui.completed) {
      const buttons = [...document.querySelectorAll('#postOptions .option')];
      buttons.forEach(b => { b.disabled = true; b.classList.add('locked'); });
      if (ui.selected >= 0 && buttons[ui.selected]) {
        buttons[ui.selected].classList.add('selected');
      }
      $('postNextBtn').disabled = false;
    }
  }

  function makeHistoricalReadOnly(point) {
    const active = document.querySelector('.screen.active');
    if (!active) return;

    active.querySelectorAll('button').forEach(b => b.disabled = true);

    if (point.screen === 'quiz') {
      const p = PHASES[point.phase];
      const q = p && p.qs[point.q];
      const buttons = [...document.querySelectorAll('#options .option')];
      if (q && buttons[q.a]) {
        buttons[q.a].classList.add('correct');
        $('feedback').className = 'feedback show good';
        $('feedback').innerHTML = '<strong>✓ Questão já concluída</strong>' + q.fb[q.a];
        $('retryHint').textContent = 'Use Avançar para retornar ao ponto em que você estava.';
      }
    }

    if (point.screen === 'pretest' || point.screen === 'posttest') {
      const feedbackId = point.screen === 'posttest' ? 'postFeedback' : null;
      if (feedbackId && $(feedbackId)) {
        $(feedbackId).className = 'feedback';
        $(feedbackId).innerHTML = '';
      }
    }
  }

  function updateNavControls() {
    const back = $('backBtn');
    const forward = $('forwardBtn');
    if (!back || !forward) return;

    const canBack = nav.index > 0;
    const canForward = nav.index < nav.trail.length - 1;

    back.disabled = !canBack;
    forward.disabled = !canForward;
    back.setAttribute('aria-hidden', 'false');
    forward.setAttribute('aria-hidden', 'false');

    back.title = canBack ? 'Voltar para a etapa anterior' : 'Você está no início';
    forward.title = canForward ? 'Avançar até onde você estava' : 'Você está no ponto mais avançado';
  }

  const originalShow = show;
  show = function(id, push = true) {
    originalShow(id, push);

    if (!nav.replaying && push) {
      const point = viewPoint();
      nav.trail = nav.trail.slice(0, nav.index + 1);
      if (!samePoint(nav.trail[nav.index], point)) {
        nav.trail.push(point);
        nav.index = nav.trail.length - 1;
      } else {
        nav.trail[nav.index] = point;
      }
      nav.latestUi = null;
    }
    updateNavControls();
  };

  function renderTrailPoint(index) {
    const point = nav.trail[index];
    if (!point) return;

    const liveState = state;
    const tempState = {
      ...liveState,
      ...point,
      badges: JSON.parse(JSON.stringify(point.badges || [])),
      history: liveState.history
    };

    nav.replaying = true;
    state = tempState;
    renderScreen(point.screen, false);
    state = liveState;
    nav.replaying = false;

    const atLatest = index === nav.trail.length - 1;
    if (atLatest) {
      applyLatestUi(nav.latestUi);
      updateTop();
    } else {
      makeHistoricalReadOnly(point);
    }
    updateNavControls();
  }

  function customBack() {
    if (nav.index <= 0) return;
    if (nav.index === nav.trail.length - 1) nav.latestUi = captureCurrentUi();
    nav.index -= 1;
    renderTrailPoint(nav.index);
  }

  function customForward() {
    if (nav.index >= nav.trail.length - 1) return;
    nav.index += 1;
    renderTrailPoint(nav.index);
  }

  const back = $('backBtn');
  const forward = $('forwardBtn');

  back.addEventListener('click', e => {
    e.preventDefault();
    e.stopImmediatePropagation();
    customBack();
  }, true);

  forward.addEventListener('click', e => {
    e.preventDefault();
    e.stopImmediatePropagation();
    customForward();
  }, true);

  // No feedback or answer key during the post-test.
  answerPost = function(i) {
    if (state.postAnswered) return;
    state.postAnswered = true;
    const q = POSTTEST[state.postIndex];
    const buttons = [...$('postOptions').querySelectorAll('.option')];

    buttons.forEach(b => {
      b.disabled = true;
      b.classList.add('locked');
    });

    if (i === q.a) state.postScore++;
    if (buttons[i]) buttons[i].classList.add('selected');

    $('postFeedback').className = 'feedback';
    $('postFeedback').innerHTML = '';
    $('postNextBtn').disabled = false;
  };

  // Distinguish this iteration in collected metrics.
  const originalBuildPayload = buildPayload;
  buildPayload = function() {
    return { ...originalBuildPayload(), version: 'v6' };
  };

  nav.trail = [viewPoint()];
  nav.index = 0;
  updateNavControls();
})();
