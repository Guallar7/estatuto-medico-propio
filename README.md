# Estatuto Médico Propio

Portal documental independiente para defender un Estatuto Médico y Facultativo propio.

La sección MIR no se migra completa: se resume y enlaza al proyecto especializado `mir-estatuto-realidad`.

## Arquitectura

- Vite + React multipágina.
- Sin backend ni React Router.
- Cada HTML tiene metadatos propios y monta `src/main.jsx` con `data-page`.
- Contenido centralizado en `src/data.js`.

## Páginas

- `/`: directorio central.
- `/anteproyecto.html`: matriz de desmontaje.
- `/reivindicaciones.html`: programa médico-facultativo.
- `/noticias.html`: respuestas a titulares.
- `/novedades.html`: cronología de actualizaciones.
- `/fuentes.html`: fuentes y evidencia.
- `/argumentario.html`: frases reutilizables.
- `/mir.html`: resumen y enlace al portal MIR.

## Desarrollo

```bash
npm install
npm run dev
npm run check
```
