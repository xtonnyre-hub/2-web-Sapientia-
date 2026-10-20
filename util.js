let ctx;
export const beep=(f=520)=>{try{ctx??=new AudioContext();const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.05,ctx.currentTime);g.gain.exponentialRampToValueAtTime(1e-4,ctx.currentTime+.2);o.connect(g).connect(ctx.destination);o.start();o.stop(ctx.currentTime+.22)}catch{}};
export const speak=t=>{if(!('speechSynthesis' in window)||localStorage.voz==='off')return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='es-PE';u.rate=.95;speechSynthesis.speak(u)};
export const $=(s,e=document)=>e.querySelector(s);
