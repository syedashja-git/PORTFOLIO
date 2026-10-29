"use strict";
const sidebar=document.querySelector('[data-sidebar]');const toggle=document.querySelector('[data-sidebar-btn]');toggle.addEventListener('click',()=>{const open=sidebar.classList.toggle('active');toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('span').textContent=open?'Hide Contacts':'Show Contacts'});
function navigate(name,scroll=true){if(!document.querySelector(`[data-page="${name}"]`))name='about';document.querySelectorAll('[data-page]').forEach(p=>p.classList.toggle('active',p.dataset.page===name));document.querySelectorAll('[data-nav]').forEach(b=>{b.classList.toggle('active',b.dataset.nav===name);if(b.dataset.nav===name)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});if(scroll){const top=window.matchMedia('(max-width:1249px)').matches?document.querySelector('.main-content').getBoundingClientRect().top+window.scrollY-16:0;window.scrollTo({top:Math.max(0,top),behavior:'instant'});}}
document.querySelectorAll('[data-nav],[data-go]').forEach(b=>b.addEventListener('click',()=>{const page=b.dataset.nav||b.dataset.go;location.hash=page;navigate(page)}));window.addEventListener('hashchange',()=>navigate(location.hash.slice(1)));navigate(location.hash.slice(1),false);
 const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', () => {
        const status = document.querySelector('#form-status');

        if (status) {
            status.textContent = 'Sending your message…';
        }

        // DO NOT use preventDefault().
        // The form must submit to Google Apps Script.
      });
}

 const motionObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');motionObserver.unobserve(entry.target)}}},{threshold:0.15});document.querySelectorAll('.skills-list,.tech-item').forEach(item=>motionObserver.observe(item));

const projectDialog=document.getElementById('project-dialog');let previewTrigger;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{previewTrigger=button;document.getElementById('project-full').src=button.dataset.image;document.getElementById('project-full').alt=button.dataset.title+' project showcase';document.getElementById('project-dialog-title').textContent=button.dataset.title;projectDialog.showModal()}));
document.getElementById('close-preview').addEventListener('click',()=>projectDialog.close());projectDialog.addEventListener('click',e=>{if(e.target===projectDialog){const r=projectDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)projectDialog.close()}});projectDialog.addEventListener('close',()=>previewTrigger?.focus());
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelectorAll('[data-category]').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter)}));
