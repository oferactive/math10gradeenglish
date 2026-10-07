// Shared behaviour for every Grade 10 page:
// 1) render math with KaTeX, 2) "show / hide all solutions", 3) "I solved it" ticks with a progress count (kept in this browser only)
(function(){
  function renderMath(){
    if(window.renderMathInElement){
      renderMathInElement(document.body,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});
    }
  }
  window.__renderMath=renderMath;

  function store(){try{return window.localStorage}catch(e){return null}}
  var key='m10:'+location.pathname.split('/').pop();
  function load(){var s=store();if(!s)return{};try{return JSON.parse(s.getItem(key)||'{}')}catch(e){return{}}}
  function save(v){var s=store();if(!s)return;try{s.setItem(key,JSON.stringify(v))}catch(e){}}

  document.addEventListener('DOMContentLoaded',function(){
    var state=load();
    var boxes=document.querySelectorAll('.done input');
    var prog=document.querySelector('.progress');
    function count(){
      if(!prog)return;
      var n=0;boxes.forEach(function(b){if(b.checked)n++});
      prog.textContent=n+' of '+boxes.length+' solved';
    }
    boxes.forEach(function(b){
      var id=b.getAttribute('data-q');
      if(state[id]){b.checked=true;b.closest('li').classList.add('is-done')}
      b.addEventListener('change',function(){
        state[id]=b.checked;save(state);
        b.closest('li').classList.toggle('is-done',b.checked);count();
      });
    });
    count();
    var all=document.querySelector('[data-action="toggle-all"]');
    if(all){all.addEventListener('click',function(){
      var ds=document.querySelectorAll('details');
      var open=all.getAttribute('aria-pressed')!=='true';
      ds.forEach(function(d){d.open=open});
      all.setAttribute('aria-pressed',open?'true':'false');
      all.textContent=open?'Hide all solutions':'Show all solutions';
    })}
    var reset=document.querySelector('[data-action="reset"]');
    if(reset){reset.addEventListener('click',function(){
      state={};save(state);
      boxes.forEach(function(b){b.checked=false;b.closest('li').classList.remove('is-done')});count();
    })}
  });
})();
