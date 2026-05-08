# Estatuto Médico Propio

Portal documental independiente sobre la reivindicación de un Estatuto Médico y Facultativo propio.

La sección MIR no se migra completa: se resume y enlaza al proyecto especializado `mir-estatuto-realidad`.

## Arquitectura

- Vite + React multipágina.
- Sin backend ni React Router.
- Cada HTML tiene metadatos propios y monta `src/main.jsx` con `data-page`.
- Contenido centralizado en `src/data.js`.

## Páginas

- `/`: directorio central.
- `/anteproyecto.html`: análisis del anteproyecto.
- `/reivindicaciones.html`: programa médico-facultativo.
- `/noticias.html`: contexto sobre noticias y declaraciones con lectura visual por etiquetas.
- `/novedades.html`: cronología de actualizaciones.
- `/fuentes.html`: fuentes y evidencia.
- `/claves.html`: preguntas frecuentes para médicos, facultativos y ciudadanía.
- `/mir.html`: resumen y enlace al portal MIR.

## Desarrollo

```bash
npm install
npm run dev
npm run check
```
