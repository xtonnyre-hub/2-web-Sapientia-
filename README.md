# Sapientia · web instalable (PWA)
Proyecto Sapientia · Escuela de Líderes UCV · I. E. Príncipe Illathupa, Huánuco.

## Publicar en GitHub Pages
1. Sube todo el contenido de esta carpeta a tu repositorio (rama `main`).
2. En **Settings → Pages**, elige **Source: GitHub Actions**.
3. Espera el despliegue en la pestaña Actions e instala la web desde el navegador.

## Editar contenido
- `src/config.js`: redes sociales (Instagram, TikTok, Facebook) y equipo.
- `src/data.js`: personajes (agrega `img:'ruta'` para el retrato) y lecturas.

## Ranking real (opcional, Cloudflare Pages + D1)
1. Conecta este repositorio a Cloudflare Pages (build: `npm run build`, salida: `dist`).
2. En Settings → Bindings agrega D1: variable `DB` = base `sapientia-db`.
3. En `src/config.js` cambia `API=''` por `API='/api'` y vuelve a subir.

## Local
`npm install` y `npm run dev`.
