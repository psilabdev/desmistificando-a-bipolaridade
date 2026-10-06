/*
Navigation v9
Review previously visited screens without mutating the live learning state.
Historical screens are made read-only with CSS instead of disabling controls,
preventing disabled buttons from leaking into later chapters.
*/
(() => {
  const nav={trail:[],index:0,replaying:false,latestUi:null};

  function point(){
    return {
      screen:state.screen,
      phase:state.phase,
      q:state.q,
      preIndex:state.preIndex,
      postIndex:state.postIndex,
      phaseFirst:state.phaseFirst,
      completed:state.completed,
      xp:state.xp
    };
  }

  function same(a,b){
    return !!a &&
      a.screen===b.screen &&
      a.phase===b.phase &&
      a.q===b.q &&
      a.preIndex===b.preIndex &&
      a.postIndex===b.postIndex;
  }

  function clearReview(){
    screens.forEach(s=>s.classList.remove('review-mode'));
  }

  function showOnly(id,review=false){
    screens.forEach(s=>{
      const active=s.id===id;
      s.classList.toggle('active',active);
      s.classList.toggle('review-mode',active&&review);
    });
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function captureLatestUi(){
    if(state.screen==='pretest'){
      const bs=[...$('preOptions').querySelectorAll('.option')];
      return {
        kind:'pretest',
        selected:bs.findIndex(b=>b.classList.contains('selected')),
        nextEnabled:!$('preNextBtn').disabled
      };
    }
    if(state.screen==='quiz'){
      const bs=[...$('options').querySelectorAll('.option')];
      return {
        kind:'quiz',
        attempts:state.attempts,
        nextEnabled:!$('nextBtn').disabled,
        correct:bs.findIndex(b=>b.classList.contains('correct')),
        wrong:bs.map((b,i)=>b.classList.contains('wrong')?i:-1).filter(i=>i>=0),
        feedbackClass:$('feedback').className,
        feedbackHtml:$('feedback').innerHTML,
        retry:$('retryHint').textContent
      };
    }
    if(state.screen==='posttest'){
      const bs=[...$('postOptions').querySelectorAll('.option')];
      return {
        kind:'posttest',
        nextEnabled:!$('postNextBtn').disabled,
        selected:bs.findIndex(b=>b.classList.contains('selected'))
      };
    }
    return null;
  }

  function restoreLatestUi(ui){
    if(!ui)return;

    if(ui.kind==='pretest'&&state.screen==='pretest'){
      const bs=[...$('preOptions').querySelectorAll('.option')];
      state.preSelected=ui.selected>=0?ui.selected:null;
      if(ui.selected>=0&&bs[ui.selected]) bs[ui.selected].classList.add('selected');
      $('preNextBtn').disabled=!ui.nextEnabled;
    }

    if(ui.kind==='quiz'&&state.screen==='quiz'){
      state.attempts=ui.attempts;
      const bs=[...$('options').querySelectorAll('.option')];

      ui.wrong.forEach(i=>{
        if(bs[i]){
          bs[i].classList.add('wrong','locked');
          bs[i].disabled=true;
        }
      });

      if(ui.correct>=0&&bs[ui.correct]){
        bs.forEach(b=>{b.classList.add('locked');b.disabled=true;});
        bs[ui.correct].classList.remove('locked');
        bs[ui.correct].classList.add('correct');
      }

      $('feedback').className=ui.feedbackClass;
      $('feedback').innerHTML=ui.feedbackHtml;
      $('retryHint').textContent=ui.retry;
      $('nextBtn').disabled=!ui.nextEnabled;
    }

    if(ui.kind==='posttest'&&state.screen==='posttest'){
      const bs=[...$('postOptions').querySelectorAll('.option')];
      state.postSelected=ui.selected>=0?ui.selected:null;
      if(ui.selected>=0&&bs[ui.selected]) bs[ui.selected].classList.add('selected');
      $('postNextBtn').disabled=!ui.nextEnabled;
    }
  }

  function renderEpisodeGrid(){
    const grid=$('chapterEpisodeGrid');
    const img=$('chapterImg');
    if(!grid||!img)return;

    img.hidden=true;
    grid.hidden=false;
    grid.innerHTML=EPISODE_VISUALS.map(e=>
      '<article class="chapter-episode-card">'+
        '<img src="'+e.img+'" alt="Ilustração de '+e.title+'">'+
        '<div><span class="episode-dot dot-'+e.cls+'"></span><b>'+e.title+'</b></div>'+
      '</article>'
    ).join('');
  }

  function renderReview(p){
    const id=p.screen;

    if(id==='home'||id==='cast'){
      showOnly(id,true);
      return;
    }

    if(id==='pretest'){
      const q=PRETEST[p.preIndex];
      $('preCount').textContent=(p.preIndex+1)+' de '+PRETEST.length;
      $('preScene').textContent=q.scene;
      $('preText').textContent=q.q;
      const box=$('preOptions');
      box.innerHTML='';
      q.opts.forEach(o=>{
        const b=document.createElement('button');
        b.type='button';
        b.className='option';
        b.textContent=o;
        box.appendChild(b);
      });
      showOnly('pretest',true);
      return;
    }

    if(id==='chapter'){
      const ph=PHASES[p.phase],c=CHARACTERS[ph.speaker];
      const grid=$('chapterEpisodeGrid');
      const img=$('chapterImg');

      if(ph.id===2){
        renderEpisodeGrid();
      }else{
        if(grid){grid.hidden=true;grid.innerHTML='';}
        img.hidden=false;
        img.src=ph.img;
        img.alt='Ilustração do capítulo '+ph.id+': '+ph.title;
      }

      $('chapterNo').textContent='Capítulo '+ph.id+' de 6';
      $('chapterTitle').textContent=ph.title;
      $('chapterSubtitle').textContent=ph.subtitle;
      $('speakerImg').src=c.img;
      $('speakerImg').alt='Retrato de '+c.name;
      $('speakerName').textContent=c.name;
      $('speakerText').textContent=ph.dialogue;
      $('openLessonBtn').textContent='Ver os pontos principais';

      showOnly('chapter',true);
      return;
    }

    if(id==='lesson'){
      const ph=PHASES[p.phase];
      $('lessonNo').textContent='Capítulo '+ph.id+' • leitura rápida';
      $('lessonTitle').textContent=ph.title;

      const g=$('lessonGrid');
      g.innerHTML='';
      ph.lessons.forEach((l,i)=>{
        const d=document.createElement('div');
        d.className='lesson-card';
        d.innerHTML='<div class="n">Pista '+(i+1)+'</div><h3>'+l[0]+'</h3><p>'+l[1]+'</p>';
        g.appendChild(d);
      });

      const compare=$('episodeCompare');
      if(ph.id===2){
        compare.hidden=false;
        compare.innerHTML=
          '<div class="episode-head"><h3>Comparativo visual</h3><p>As imagens são apenas ilustrações de apoio. Não substituem avaliação clínica e não devem ser lidas como caricaturas fixas de cada estado.</p></div>'+
          '<div class="episode-summary">'+
          EPISODE_VISUALS.map(e=>
            '<article><h4><span class="episode-dot dot-'+e.cls+'"></span>'+e.title+'</h4>'+
            '<div class="small">'+e.tag+'</div><ul>'+
            e.items.map(i=>'<li>'+i+'</li>').join('')+
            '</ul></article>'
          ).join('')+
          '</div><p class="episode-note"><b>Importante:</b> mania e hipomania não significam simplesmente “estar feliz”. Irritabilidade, agitação e desconforto também podem aparecer.</p>';
      }else{
        compare.hidden=true;
        compare.innerHTML='';
      }

      $('lessonKey').textContent=ph.key;
      showOnly('lesson',true);
      return;
    }

    if(id==='quiz'){
      const ph=PHASES[p.phase],q=ph.qs[p.q];
      $('qMeta').textContent='Capítulo '+ph.id+' • '+ph.title;
      $('qCount').textContent='Decisão '+(p.q+1)+' de '+ph.qs.length;
      $('qScene').textContent=q.scene;
      $('qText').textContent=q.q;

      const box=$('options');
      box.innerHTML='';
      q.opts.forEach((o,i)=>{
        const b=document.createElement('button');
        b.type='button';
        b.className='option'+(i===q.a?' correct':'');
        b.textContent=o;
        box.appendChild(b);
      });

      $('feedback').className='feedback show good';
      $('feedback').innerHTML='<strong>✓ Questão já concluída</strong>'+q.fb[q.a];
      $('retryHint').textContent='Você está revisando uma etapa já concluída.';
      showOnly('quiz',true);
      return;
    }

    if(id==='phaseDone'){
      const ph=PHASES[p.phase];
      $('badgeIcon').textContent=ph.icon;
      $('badgeTitle').textContent=ph.badge+' desbloqueado';
      $('badgeText').textContent='Você concluiu “'+ph.title+'”.';
      $('phaseAccuracy').textContent=p.phaseFirst+'/'+ph.qs.length+' na 1ª tentativa';
      $('phaseXp').textContent='Capítulo concluído';

      const ul=$('phaseTakeaways');
      ul.innerHTML='';
      ph.lessons.forEach(l=>{
        const li=document.createElement('li');
        li.textContent=l[0]+': '+l[1];
        ul.appendChild(li);
      });

      showOnly('phaseDone',true);
      return;
    }

    if(id==='posttest'){
      const q=POSTTEST[p.postIndex];
      $('postCount').textContent=(p.postIndex+1)+' de '+POSTTEST.length;
      $('postScene').textContent=q.scene;
      $('postText').textContent=q.q;

      const box=$('postOptions');
      box.innerHTML='';
      q.opts.forEach(o=>{
        const b=document.createElement('button');
        b.type='button';
        b.className='option';
        b.textContent=o;
        box.appendChild(b);
      });

      $('postFeedback').className='feedback';
      $('postFeedback').innerHTML='';
      showOnly('posttest',true);
      return;
    }

    showOnly(id,true);
  }

  function renderLiveLatest(){
    clearReview();

    const attempts=state.attempts;
    const postAnswered=state.postAnswered;

    nav.replaying=true;
    renderScreen(state.screen,false);
    nav.replaying=false;

    state.attempts=attempts;
    state.postAnswered=postAnswered;
    restoreLatestUi(nav.latestUi);
  }

  function updateControls(){
    const back=$('backBtn'),forward=$('forwardBtn');
    if(!back||!forward)return;

    back.disabled=nav.index<=0;
    forward.disabled=nav.index>=nav.trail.length-1;
    back.title=back.disabled?'Você está no início':'Voltar para uma etapa já visitada';
    forward.title=forward.disabled?'Você está no ponto mais avançado':'Avançar pelas etapas já visitadas';
  }

  const originalShow=show;
  show=function(id,push=true){
    clearReview();
    originalShow(id,push);

    if(!nav.replaying&&push){
      const p=point();
      nav.trail=nav.trail.slice(0,nav.index+1);

      if(!same(nav.trail[nav.index],p)){
        nav.trail.push(p);
        nav.index=nav.trail.length-1;
      }else{
        nav.trail[nav.index]=p;
      }

      nav.latestUi=null;
    }

    updateControls();
  };

  function backReview(){
    if(nav.index<=0)return;

    if(nav.index===nav.trail.length-1){
      nav.latestUi=captureLatestUi();
    }

    nav.index--;
    renderReview(nav.trail[nav.index]);
    updateControls();
  }

  function forwardReview(){
    if(nav.index>=nav.trail.length-1)return;

    nav.index++;

    if(nav.index===nav.trail.length-1){
      renderLiveLatest();
    }else{
      renderReview(nav.trail[nav.index]);
    }

    updateControls();
  }

  $('backBtn').addEventListener('click',e=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    backReview();
  },true);

  $('forwardBtn').addEventListener('click',e=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    forwardReview();
  },true);

  const originalBuildPayload=buildPayload;
  buildPayload=function(){
    return {...originalBuildPayload(),version:'v14'};
  };

  nav.trail=[point()];
  nav.index=0;
  updateControls();
})();