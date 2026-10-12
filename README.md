# MathQuest

An open, no-login web app for learning mathematics interactively. Built with Vite + React, blue & white theme.

Each concept has: a short **video**, key ideas, a hands-on **interactive demo**, and a **quiz** with instant feedback.
Progress is stored only in the student's browser (localStorage).

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
```

## Adding a concept (and its video)

1. Put the video at `public/videos/<name>.mp4` (or use a YouTube ID).
2. Add an entry to `src/data/concepts.js` with `video: { src: './videos/<name>.mp4' }` or `video: { youtube: 'VIDEO_ID' }`.
3. Optionally add a widget in `src/components/widgets/` and register it in `ConceptPage.jsx`.

Concepts with no video file show a "Video coming soon" placeholder.
