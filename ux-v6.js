/*
UX v7: navigation review without changing the live quiz state.
Previous screens are read-only. Forward returns through visited screens.
Post-test gives no correctness feedback during administration.
*/
(() => {
  const nav={trail:[],index:0,replaying:false,latestUi:null};

  function point(){
    return {
      screen:state.screen,phase:state.phase,q:state.q,
      preIndex:state.preIndex,postIndex:state.postIndex,
      phaseFirst:state.phaseFirst,phaseXpStart:state.phaseXpStart,
      completed:state.completed,xp:state.xp
    };
  }
  function same(a,b){
    return !!a&&a.screen===b.screen&&a.phase===b.phase&&a.q===b.q&&
      a.preIndex===b.preIndex&&a.postIndex===b.postIndex;
  }
  function only(id){
    screens.forEach(s=>s.classList.toggle('active',s.id===id));
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function captureLatest(){
    if(state.screen==='quiz'){
      const bs=[...$('options').querySelectorAll('.option')];
      return {
        kind:'quiz',attempts:state.attempts,nextEnabled:!$('nextBtn').disabled,
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
        kind:'posttest',postAnswered:state.postAnswered,
        nextEnabled:!$('postNextBtn').disabled,
        selected:bs.findIndex(b=>b.classList.contains('selected'))
      };
    }
    return null;
  }

  function restoreLatest(ui){
    if(!ui)return;
    if(ui.kind==='quiz'&&state.screen==='quiz'){
      state.attempts=ui.attempts;
      const bs=[...$('options').querySelectorAll('.option')];
      ui.wrong.forEach(i=>{
        if(bs[i]){bs[i].classList.add('wrong','locked');bs[i].disabled=true;}
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
      state.postAnswered=ui.postAnswered;
      const bs=[...$('postOptions').querySelectorAll('.option')];
      if(ui.postAnswered){
        bs.forEach(b=>{b.disabled=true;b.classList.add('locked');});
        if(ui.selected>=0&&bs[ui.selected])bs[ui.selected].classList.add('selected');
      }
      $('postNextBtn').disabled=!ui.nextEnabled;
    }
  }

  function review(p){
    const id=p.screen;
    if(id==='home'||id==='cast'){only(id);return;}

    if(id==='pretest'){
      const q=PRETEST[p.preIndex];
      $('preCount').textContent=(p.preIndex+1)+' de '+PRETEST.length;
      $('preScene').textContent=q.scene;$('preText').textContent=q.q;
      const box=$('preOptions');box.innerHTML='';
      q.opts.forEach(o=>{
        const b=document.createElement('button');
        b.type='button';b.className='option locked';b.textContent=o;b.disabled=true;
        box.appendChild(b);
      });
      only('pretest');return;
    }

    if(id==='chapter'){
      const ph=PHASES[p.phase],c=CHARACTERS[ph.speaker];
      $('chapterImg').src=ph.img;$('chapterImg').alt='Ilustração do capítulo '+ph.id+': '+ph.title;
      $('chapterNo').textContent='Capítulo '+ph.id+' de 6';
      $('chapterTitle').textContent=ph.title;$('chapterSubtitle').textContent=ph.subtitle;
      $('speakerImg').src=c.img;$('speakerImg').alt='Retrato de '+c.name;
      $('speakerName').textContent=c.name;$('speakerText').textContent=ph.dialogue;
      $('openLessonBtn').disabled=true;only('chapter');return;
    }

    if(id==='lesson'){
      const ph=PHASES[p.phase];
      $('lessonNo').textContent='Capítulo '+ph.id+' • leitura rápida';
      $('lessonTitle').textContent=ph.title;
      const g=$('lessonGrid');g.innerHTML='';
      ph.lessons.forEach((l,i)=>{
        const d=document.createElement('div');d.className='lesson-card';
        d.innerHTML='<div class="n">Pista '+(i+1)+'</div><h3>'+l[0]+'</h3><p>'+l[1]+'</p>';
        g.appendChild(d);
      });
      const compare=$('episodeCompare');
      if(ph.id===2){
        compare.hidden=false;
        compare.innerHTML='<div class="episode-head"><h3>Comparativo visual</h3><p>As imagens são apenas ilustrações de apoio. Não substituem avaliação clínica e não devem ser lidas como caricaturas fixas de cada estado.</p></div><img class="episode-wide" src="assets/p2.webp" alt="Comparativo visual entre estabilidade, hipomania, mania e depressão"><div class="episode-summary">'+EPISODE_VISUALS.map(e=>'<article><h4><span class="episode-dot dot-'+e.cls+'"></span>'+e.title+'</h4><div class="small">'+e.tag+'</div><ul>'+e.items.map(i=>'<li>'+i+'</li>').join('')+'</ul></article>').join('')+'</div><p class="episode-note"><b>Importante:</b> mania e hipomania não significam simplesmente “estar feliz”. Irritabilidade, agitação e desconforto também podem aparecer.</p>';
      }else{compare.hidden=true;compare.innerHTML='';}
      $('lessonKey').textContent=ph.key;$('startMissionBtn').disabled=true;
      only('lesson');return;
    }

    if(id==='quiz'){
      const ph=PHASES[p.phase],q=ph.qs[p.q];
      $('qMeta').textContent='Capítulo '+ph.id+' • '+ph.title;
      $('qCount').textContent='Decisão '+(p.q+1)+' de '+ph.qs.length;
      $('qScene').textContent=q.scene;$('qText').textContent=q.q;
      const box=$('options');box.innerHTML='';
      q.opts.forEach((o,i)=>{
        const b=document.createElement('button');
        b.type='button';b.className='option locked'+(i===q.a?' correct':'');
        b.textContent=o;b.disabled=true;box.appendChild(b);
      });
      $('feedback').className='feedback show good';
      $('feedback').innerHTML='<strong>✓ Questão já concluída</strong>'+q.fb[q.a];
      $('retryHint').textContent='Você está revisando uma etapa já concluída.';
      $('nextBtn').disabled=true;only('quiz');return;
    }

    if(id==='phaseDone'){
      const ph=PHASES[p.phase];
      $('badgeIcon').textContent=ph.icon;$('badgeTitle').textContent=ph.badge+' desbloqueado';
      $('badgeText').textContent='Você concluiu “'+ph.title+'”.';
      $('phaseAccuracy').textContent=p.phaseFirst+'/'+ph.qs.length+' na 1ª tentativa';
      $('phaseXp').textContent='Capítulo concluído';
      const ul=$('phaseTakeaways');ul.innerHTML='';
      ph.lessons.forEach(l=>{const li=document.createElement('li');li.textContent=l[0]+': '+l[1];ul.appendChild(li);});
      $('nextPhaseBtn').disabled=true;only('phaseDone');return;
    }

    if(id==='posttest'){
      const q=POSTTEST[p.postIndex];
      $('postCount').textContent=(p.postIndex+1)+' de '+POSTTEST.length;
      $('postScene').textContent=q.scene;$('postText').textContent=q.q;
      const box=$('postOptions');box.innerHTML='';
      q.opts.forEach(o=>{
        const b=document.createElement('button');
        b.type='button';b.className='option locked';b.textContent=o;b.disabled=true;
        box.appendChild(b);
      });
      $('postFeedback').className='feedback';$('postFeedback').innerHTML='';
      $('postNextBtn').disabled=true;only('posttest');return;
    }

    only(id);
  }

  function liveLatest(){
    const attempts=state.attempts,postAnswered=state.postAnswered;
    nav.replaying=true;
    renderScreen(state.screen,false);
    nav.replaying=false;
    state.attempts=attempts;state.postAnswered=postAnswered;
    restoreLatest(nav.latestUi);
  }

  function update(){
    const back=$('backBtn'),forward=$('forwardBtn');
    if(!back||!forward)return;
    back.disabled=nav.index<=0;
    forward.disabled=nav.index>=nav.trail.length-1;
    back.title=back.disabled?'Você está no início':'Voltar para uma etapa já visitada';
    forward.title=forward.disabled?'Você está no ponto mais avançado':'Avançar pelas etapas já visitadas';
  }

  const originalShow=show;
  show=function(id,push=true){
    originalShow(id,push);
    if(!nav.replaying&&push){
      const p=point();
      nav.trail=nav.trail.slice(0,nav.index+1);
      if(!same(nav.trail[nav.index],p)){
        nav.trail.push(p);nav.index=nav.trail.length-1;
      }else nav.trail[nav.index]=p;
      nav.latestUi=null;
    }
    update();
  };

  function backReview(){
    if(nav.index<=0)return;
    if(nav.index===nav.trail.length-1)nav.latestUi=captureLatest();
    nav.index--;review(nav.trail[nav.index]);update();
  }
  function forwardReview(){
    if(nav.index>=nav.trail.length-1)return;
    nav.index++;
    if(nav.index===nav.trail.length-1)liveLatest();
    else review(nav.trail[nav.index]);
    update();
  }

  $('backBtn').addEventListener('click',e=>{
    e.preventDefault();e.stopImmediatePropagation();backReview();
  },true);
  $('forwardBtn').addEventListener('click',e=>{
    e.preventDefault();e.stopImmediatePropagation();forwardReview();
  },true);

  answerPost=function(i){
    if(state.postAnswered)return;
    state.postAnswered=true;
    const q=POSTTEST[state.postIndex];
    const bs=[...$('postOptions').querySelectorAll('.option')];
    bs.forEach(b=>{b.disabled=true;b.classList.add('locked');});
    if(i===q.a)state.postScore++;
    if(bs[i])bs[i].classList.add('selected');
    $('postFeedback').className='feedback';$('postFeedback').innerHTML='';
    $('postNextBtn').disabled=false;
  };

  const originalBuildPayload=buildPayload;
  buildPayload=function(){return {...originalBuildPayload(),version:'v7'};};

  nav.trail=[point()];nav.index=0;update();
})();