/* Theme v8 */
(() => {
  const root=document.documentElement;
  const btn=()=>document.getElementById('themeBtn');

  function applyTheme(theme){
    root.setAttribute('data-theme',theme);
    try{localStorage.setItem('db_theme',theme);}catch(e){}
    const b=btn();
    if(b){
      const dark=theme==='dark';
      b.textContent=dark?'☀':'☾';
      b.title=dark?'Usar tema claro':'Usar tema escuro';
      b.setAttribute('aria-label',b.title);
    }
  }

  let saved=null;
  try{saved=localStorage.getItem('db_theme');}catch(e){}
  if(saved==='dark'||saved==='light'){
    applyTheme(saved);
  }else{
    const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark?'dark':'light');
  }

  document.getElementById('themeBtn')?.addEventListener('click',()=>{
    const current=root.getAttribute('data-theme')==='dark'?'dark':'light';
    applyTheme(current==='dark'?'light':'dark');
  });
})();