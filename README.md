# matheusmelchiades.github.io

Personal portfolio website for Matheus Maciel, a Fullstack Developer specializing in React, Node.js, and TypeScript. This is the production build of a React application deployed to GitHub Pages.

## Tech Stack

- **React** (Create React App)
- **JavaScript / CSS**
- **GitHub Pages** for hosting
- **Service Worker** for offline support / PWA capabilities

## Live Site

[https://matheusmelchiades.github.io](https://matheusmelchiades.github.io)

## Project Structure

This repository contains the compiled production build:

```
index.html                # Main HTML entry point
static/
  css/                    # Compiled CSS bundles
  js/                     # Compiled JavaScript bundles
manifest.json             # PWA manifest
service-worker.js         # Service worker for caching
asset-manifest.json       # Webpack asset mapping
favicon.ico               # Site favicon
```

## Deployment

This site is automatically served by GitHub Pages from the root of the `main` branch. To update the site, build the React source project and push the compiled output to this repository.
