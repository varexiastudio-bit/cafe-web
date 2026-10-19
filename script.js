(() => {
 const loader=document.getElementById('loader'); document.body.classList.add('loading');
 const hideLoader=()=>{if(loader){loader.classList.add('done');document.body.classList.remove('loading')}};
 window.addEventListener('load',()=>setTimeout(hideLoader,850),{once:true}); setTimeout(hideLoader,2600);
 const header=document.querySelector('.header'), back=document.getElementById('backTop');
 const scrollUI=()=>{let y=window.scrollY||0;header?.classList.toggle('scrolled',y>24);back?.classList.toggle('visible',y>600)};
 addEventListener('scroll',scrollUI,{passive:true});scrollUI();
 const toggle=document.getElementById('navToggle'),nav=document.getElementById('mobileNav');
 function closeNav(){toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation');nav?.classList.remove('open')}
 toggle?.addEventListener('click',()=>{let open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav?.classList.toggle('open',!open)});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});
 const reveals=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('shown');else e.target.classList.remove('shown')}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});reveals.forEach((el,i)=>{el.style.setProperty('--delay',`${Math.min(i%4,3)*70}ms`);io.observe(el)})}else reveals.forEach(el=>el.classList.add('shown'));
 const filters=[...document.querySelectorAll('.filter')], dishes=[...document.querySelectorAll('.dish')];
 filters.forEach(btn=>btn.addEventListener('click',()=>{let f=btn.dataset.filter;filters.forEach(b=>{let active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});dishes.forEach(d=>{let show=f==='all'||d.dataset.category===f;d.classList.toggle('filtered-out',!show);if(show){d.classList.remove('shown');requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.add('shown')))}})}));
 const form=document.getElementById('newsletter'),note=document.getElementById('formNote');
 form?.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}note.textContent='Thanks! This demo is not connected to a mailing service yet.';form.reset()});
 document.getElementById('year').textContent=new Date().getFullYear();back?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
 document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.style.opacity='0.2';img.alt='Image unavailable — replace with approved café photography'},{once:true}));
})();