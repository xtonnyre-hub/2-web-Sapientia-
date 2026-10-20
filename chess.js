import {Chess} from 'chess.js';
import {beep,speak} from './util.js';
import {API} from './config.js';
const GL={p:'♟',n:'♞',b:'♝',r:'♜',q:'♛',k:'♚'},W={p:1,n:3,b:3,r:5,q:9,k:0};
const TP={
Estudiante:{w:{p:'Hábito',n:'Creatividad',b:'Visión',r:'Constancia',q:'Voluntad',k:'Propósito'},b:{p:'Distracción',n:'Duda',b:'Pereza',r:'Miedo',q:'Procrastinación',k:'Desánimo'}},
Emprendedor:{w:{p:'Disciplina',n:'Innovación',b:'Estrategia',r:'Capital',q:'Liderazgo',k:'Misión'},b:{p:'Gastos',n:'Competencia',b:'Incertidumbre',r:'Deuda',q:'Crisis',k:'Quiebra'}},
Bienestar:{w:{p:'Rutina',n:'Gratitud',b:'Calma',r:'Descanso',q:'Fortaleza',k:'Salud'},b:{p:'Ruido',n:'Ansiedad',b:'Desorden',r:'Cansancio',q:'Estrés',k:'Agotamiento'}}};
const FR=['Cada partida entrena tu carácter.','Aprender es avanzar una casilla cada día.','El obstáculo es el camino.','La constancia vence al talento sin hábito.','Piensa antes de mover; mejora después de perder.','Tu voluntad es tu pieza más fuerte.','Un buen plan supera a un buen impulso.'];
const day=()=>Math.floor(Date.now()/864e5),esc=s=>String(s).replace(/[<>&"']/g,'');
export function mountChess(el){
let g=new Chess(),sel=null,vw='p',lvl=1,tp=localStorage.tp||'Estudiante',rk=null,log=['Tus Virtudes (blancas) enfrentan Obstáculos (negras). ¡Tu turno!'];
const J=(k,d)=>{try{return JSON.parse(localStorage[k])||d}catch{return d}},N=()=>TP[tp],xp=()=>+localStorage.xp||0,bit=()=>J('bit',[]);
const rank=()=>xp()<100?'Aprendiz':xp()<300?'Estudioso':'Sabio';
const add=n=>{localStorage.xp=xp()+n;const t=new Date().toDateString();if(localStorage.dia!==t){localStorage.racha=(localStorage.dia===new Date(Date.now()-864e5).toDateString()?+localStorage.racha||0:0)+1;localStorage.dia=t}};
const say=(m,c)=>{if(!m.captured)return;const t=c==='w'?`Tu ${N().w[m.piece]} venció a ${N().b[m.captured]}.`:`${N().b[m.piece]} derribó a tu ${N().w[m.captured]}.`;log.unshift(t);speak(t)};
const post=()=>{const n=localStorage.nombre;if(API&&n)fetch(API+'/ranking',{method:'POST',body:JSON.stringify({n,xp:xp()})}).catch(()=>{})};
const load=async()=>{rk=null;if(API)try{const r=await fetch(API+'/ranking');if(r.ok)rk=await r.json()}catch{}rk??=[{n:localStorage.nombre||'Tú',xp:xp()}];draw()};
const tip=()=>{const a=bit().slice(-5),v=a.filter(x=>x.r==='V').length,d=a.filter(x=>x.r==='D').length;return !a.length?'Protege tu Propósito (rey) y desarrolla tus piezas antes de atacar.':d>v?'Baja el ritmo y cuida tus piezas antes de capturar.':v>=3?'¡Buen dominio! Sube al nivel Intermedio.':'Buen equilibrio; sigue practicando a diario.'};
const ai=()=>{if(g.isGameOver())return;const m=g.moves({verbose:true});let p=m[Math.random()*m.length|0];if(lvl)p=m.sort((a,b)=>(W[b.captured]||0)-(W[a.captured]||0)+Math.random()-.5)[0];g.move(p);say(p,'b')};
const end=()=>{if(!g.isGameOver())return;const w=g.isCheckmate()&&g.turn()==='b',d=g.isCheckmate()&&!w;let x=w?50:d?10:20;
if(w&&localStorage.reto!==''+day()){x+=30;localStorage.reto=''+day();log.unshift('Reto del día cumplido: +30 XP.')}
add(x);localStorage.bit=JSON.stringify([...bit(),{f:new Date().toLocaleDateString('es-PE'),r:w?'V':d?'D':'T',x,t:tp,l:lvl,m:g.history().length}].slice(-30));
log.unshift(w?`¡Victoria! +${x} XP.`:d?`Derrota. +${x} XP por intentarlo.`:`Tablas. +${x} XP.`);post()};
const chart=a=>{if(a.length<2)return '<p class="mut">Juega 2 partidas para ver tu gráfica de XP.</p>';let s=0;const ys=a.map(x=>s+=x.x),mx=Math.max(...ys);return `<svg viewBox="0 0 300 100" class="ch" role="img" aria-label="XP acumulado"><polyline fill="none" stroke="#9281f7" stroke-width="3" points="${ys.map((y,i)=>`${i*300/(ys.length-1)},${95-y/mx*90}`).join(' ')}"/></svg>`};
const dl=()=>{const t=`Reporte Sapientia\nXP: ${xp()} · Rango: ${rank()} · Racha: ${localStorage.racha||0} día(s)\n\n`+bit().map(x=>`${x.f} · ${{V:'Victoria',D:'Derrota',T:'Tablas'}[x.r]} · ${x.t} · ${x.m} jugadas · +${x.x} XP${x.nota?'\nReflexión: '+x.nota:''}`).join('\n'),u=URL.createObjectURL(new Blob([t],{type:'text/plain'})),a=document.createElement('a');a.href=u;a.download='reporte-sapientia.txt';a.click();URL.revokeObjectURL(u)};
function draw(){const b=g.board(),hecho=localStorage.reto===''+day();
let h=`<div class="glass"><h2>Ajedrez Sapientia</h2><p class="mut">${rank()} · ${xp()} XP · Racha ${localStorage.racha||0} día(s)</p><p class="lema">${FR[day()%FR.length]}</p><div class="row">${[['p','Partida'],['s','Salón'],['b','Bitácora']].map(([k,t])=>`<button class="chip ${vw===k?'on':''}" data-v="${k}">${t}</button>`).join('')}</div>`;
if(vw==='p'){h+=`<p class="mut">Reto del día: gana una partida (+30 XP) ${hecho?'✔':''}</p><div class="row">${Object.keys(TP).map(k=>`<button class="chip ${tp===k?'on':''}" data-tp="${k}">${k}</button>`).join('')}</div>
<div class="bd">${b.map((r,i)=>r.map((q,j)=>{const s='abcdefgh'[j]+(8-i);return `<button data-s="${s}" class="sq ${(i+j)%2?'d':'l'} ${sel===s?'on':''}" aria-label="${s}${q?' '+N()[q.color][q.type]:''}">${q?`<span class="pc ${q.color}">${GL[q.type]}</span>`:''}</button>`}).join('')).join('')}</div>
<div class="row"><button class="btn" id="nw">Nueva partida</button><button class="btn" id="lv">Nivel: ${lvl?'Intermedio':'Fácil'}</button></div><p class="mut">Mentor: ${tip()}</p>
${g.isGameOver()?`<textarea id="tx" rows="2" placeholder="Bitácora: ¿qué Obstáculo te costó más y por qué?"></textarea><div class="row"><button class="btn" id="nt">Guardar reflexión</button></div>`:''}
<ul class="feed">${log.slice(0,6).map(x=>`<li>${x}</li>`).join('')}</ul>`}
else if(vw==='s'){h+=`<h3>Salón de la Sabiduría</h3><div class="row"><input id="nm" placeholder="Tu nombre" value="${esc(localStorage.nombre||'')}" maxlength="30"><button class="btn" id="sv">Guardar</button></div>
<ol class="rk">${(rk||[]).map((r,i)=>`<li>${['🥇','🥈','🥉'][i]||''} ${esc(r.n)} — ${r.xp} XP</li>`).join('')}</ol>${API?'':'<p class="mut">Ranking local. Activa la base de datos (README) para competir con tu comunidad.</p>'}`}
else{const a=bit();h+=`<h3>Bitácora</h3>${chart(a)}<ul class="feed">${a.slice(-8).reverse().map(x=>`<li>${x.f} · ${{V:'Victoria',D:'Derrota',T:'Tablas'}[x.r]} · ${x.t} · +${x.x} XP${x.nota?` — ${esc(x.nota)}`:''}</li>`).join('')||'<li>Aún no hay partidas.</li>'}</ul><div class="row"><button class="btn" id="dl">Descargar reporte</button></div>`}
el.innerHTML=h+'</div>'}
el.onclick=e=>{const b=e.target.closest('button');if(!b)return;const D=b.dataset;
if(D.s){if(g.isGameOver()||g.turn()!=='w')return;const s=D.s;if(sel){const m=g.moves({square:sel,verbose:true}).find(x=>x.to===s);if(m){g.move({from:sel,to:s,promotion:'q'});sel=null;beep(660);say(m,'w');end();draw();if(!g.isGameOver())setTimeout(()=>{ai();beep(330);end();draw()},450);return}}sel=g.get(s)?.color==='w'?s:null;draw();return}
if(D.v){vw=D.v;vw==='s'?load():draw()}
else if(D.tp){tp=localStorage.tp=D.tp;draw()}
else if(b.id==='nw'){g=new Chess();sel=null;log=['Nueva partida. ¡Tu turno!'];draw()}
else if(b.id==='lv'){lvl=lvl?0:1;draw()}
else if(b.id==='sv'){localStorage.nombre=esc(el.querySelector('#nm').value.trim()).slice(0,30);post();load()}
else if(b.id==='nt'){const a=bit();if(a.length){a[a.length-1].nota=esc(el.querySelector('#tx').value).slice(0,300);localStorage.bit=JSON.stringify(a)}vw='b';draw()}
else if(b.id==='dl')dl()};
draw()}
