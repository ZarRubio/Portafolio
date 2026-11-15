# Portafolio bilingüe de Adrián Rubio

Portafolio estático en React 19 y React Router Framework Mode. Genera HTML real para la portada en español e inglés y para los tres casos de estudio en ambos idiomas.

## Desarrollo local

Requisitos: Node 24 y npm.

```bash
npm install
copy .env.example .env
npm run dev
```

Configura estas variables antes de ejecutar un build de producción:

```dotenv
VITE_SITE_URL=https://dominio-final.com
VITE_FORMSPREE_FORM_ID=id-real-de-formspree
```

El build falla de forma intencional cuando falta una variable o conserva un valor de ejemplo.

## Comandos

- `npm run build`: prerender, archivos SEO y control de JavaScript crítico.
- `npm run preview`: servidor estático local con rutas limpias, fallback y compresión.
- `npm test`: pruebas unitarias y de componentes.
- `npm run test:e2e`: rutas, responsive, formulario y axe en Chromium.
- `npm run audit:visual`: capturas completas en 320, 768 y 1440 px.
- `npm run audit:lighthouse`: umbrales móviles 90/95/95/95.

## Despliegue en Hostinger

- Versión de Node: `24`.
- Comando de build: `npm run build`.
- Directorio público: `build/client`.
- Variables: `VITE_SITE_URL` y `VITE_FORMSPREE_FORM_ID`.

La regla `public/.htaccess` conserva los HTML prerenderizados, redirige las rutas antiguas, aplica caché/compresión y usa `__spa-fallback.html` para rutas desconocidas.

## Contenido verificable

El contenido vive en `app/content/portfolio.js`. Los enlaces de demo, repositorio, CV y certificados son opcionales; no se renderiza ningún CTA mientras su URL no exista. Las credenciales quedan ocultas hasta contar con evidencia pública.
