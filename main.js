import './style.css';
import {SOCIAL,TEAM} from './config.js';
import {PEOPLE,LESSONS} from './data.js';
import {mountChess} from './chess.js';
import {beep,speak,$} from './util.js';
const logo=`<svg viewBox="0 0 120 80" class="logo" aria-label="Sapientia"><g fill="none" stroke="#E3DAC9" stroke-width="4" stroke-linecap="round"><path class="hl" d="M8 56c14-2 22-10 34-8l10 3"/><path class="hr" d="M112 24c-14 2-22 10-34 8l-10-3"/></g><path class="sp" d="M60 22l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#E5C690"/></svg>`;
const T=[['inicio','Inicio',440],['biblioteca','Biblioteca',494],['leer','Leer',523],['ajedrez','Ajedrez',587],['cine','Cine',622],['ajustes','Apariencia',659]];
document.documentElement.dataset.theme=localStorage.tema||'oscuro';
const app=$('#app');app.innerHTML=`<main id="v"></main><nav>${T.map(t=>`<button data-t="${t[0]}">${t[1]}</button>`).join('')}</nav><dialog id="d"></dialog>`;
const v=$('#v');let cat='Todos',timer;
const V={
inicio:()=>`<section class="hero">${logo}<h1>Sapientia</h1><p class="lema">Imperium tuum gloriosum</p><p class="mut">Aprende a aprender con los grandes de la historia.</p>
<div class="row">${Object.entries(SOCIAL).filter(e=>e[1]).map(e=>`<a class="btn" href="${e[1]}" target="_blank" rel="noopener">${e[0]}</a>`).join('')}</div>
<p class="mut">Líderes fundadores: ${TEAM.join(' · ')}<br>I. E. Príncipe Illathupa · Escuela de Líderes UCV</p></section>`,
biblioteca:()=>{const cs=['Todos',...new Set(PEOPLE.map(p=>p.c))];return `<h2>Biblioteca</h2><input id="q" placeholder="Buscar personaje" aria-label="Buscar"><div class="row">${cs.map(c=>`<button class="chip" data-c="${c}">${c}</button>`).join('')}</div><div id="gr" class="grid"></div>`},
leer:()=>`<h2>Leer</h2>${LESSONS.map((l,i)=>`<article class="glass"><h3>${l.t}</h3><p>${l.x}</p><button class="btn" data-l="${i}">Escuchar</button></article>`).join('')}`,
ajedrez:()=>'<div id="ch"></div>',
cine:()=>'<div class="cine glass" id="cn"></div><div class="row"><button class="btn" id="cp">Narrar</button></div>',
ajustes:()=>`<h2>Apariencia</h2><div class="row">${['oscuro','claro','sepia'].map(t=>`<button class="btn" data-th="${t}">${t}</button>`).join('')}<button class="btn" id="vz">Voz: ${localStorage.voz==='off'?'apagada':'activa'}</button></div>`};
function grid(){const q=($('#q')?.value||'').toLowerCase();$('#gr').innerHTML=PEOPLE.filter(p=>(cat==='Todos'||p.c===cat)&&p.n.toLowerCase().includes(q)).map(p=>`<button class="card glass" data-p="${p.n}"><span class="av">${p.n[0]}</span><b>${p.n}</b><small>${p.c} · ${p.e}</small></button>`).join('')}
function go(t){clearInterval(timer);v.innerHTML=V[t]();v.className='in';document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));
if(t==='biblioteca'){grid();$('#q').oninput=grid;v.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{cat=b.dataset.c;grid();beep(500)});$('#gr').onclick=e=>{const b=e.target.closest('[data-p]');if(!b)return;const p=PEOPLE.find(x=>x.n===b.dataset.p),d=$('#d');d.innerHTML=`<h3>${p.n}</h3><p class="mut">${p.c} · ${p.e}</p><p><b>Ideal:</b> ${p.ideal}</p><p><b>Aporte:</b> ${p.aporte}</p>${p.f?`<blockquote>${p.f}</blockquote>`:''}<div class="row"><button class="btn" id="es">Escuchar</button><button class="btn" id="cl">Cerrar</button></div>`;d.showModal();beep(600);$('#es').onclick=()=>speak(`${p.n}. ${p.ideal} ${p.aporte}`);$('#cl').onclick=()=>d.close()}}
if(t==='leer')v.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>speak(LESSONS[b.dataset.l].x));
if(t==='ajedrez')mountChess($('#ch'));
if(t==='cine'){let i=0;const sh=()=>{const p=PEOPLE[i++%PEOPLE.length];$('#cn').innerHTML=`<div class="k-${p.c}"><small>${p.c}</small><h2>${p.n}</h2><p>${p.ideal}</p><blockquote>${p.f||p.aporte}</blockquote></div>`;$('#cn').dataset.t=`${p.n}. ${p.ideal} ${p.aporte}`};sh();timer=setInterval(sh,7000);$('#cp').onclick=()=>speak($('#cn').dataset.t)}
if(t==='ajustes'){v.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{document.documentElement.dataset.theme=localStorage.tema=b.dataset.th});$('#vz').onclick=e=>{localStorage.voz=localStorage.voz==='off'?'on':'off';e.target.textContent='Voz: '+(localStorage.voz==='off'?'apagada':'activa')}}}
document.querySelectorAll('nav button').forEach((b,i)=>b.onclick=()=>{go(b.dataset.t);beep(T[i][2])});
go('inicio');if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
