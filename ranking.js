// Cloudflare Pages Function: ranking real con D1 (binding "DB" = sapientia-db).
export async function onRequest({request,env}){
const h={'content-type':'application/json','access-control-allow-origin':'*'};
await env.DB.exec("CREATE TABLE IF NOT EXISTS ranking(n TEXT PRIMARY KEY, xp INTEGER, t INTEGER)");
if(request.method==='POST'){const {n,xp}=await request.json();
await env.DB.prepare("INSERT INTO ranking(n,xp,t) VALUES(?,?,?) ON CONFLICT(n) DO UPDATE SET xp=MAX(xp,excluded.xp),t=excluded.t").bind(String(n).slice(0,30),Math.min(+xp||0,1e6),Date.now()).run();
return new Response('{"ok":1}',{headers:h})}
const {results}=await env.DB.prepare("SELECT n,xp FROM ranking ORDER BY xp DESC LIMIT 20").all();
return new Response(JSON.stringify(results),{headers:h})}
