// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wedevs.foundation',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Emit each route as <route>/index.html so static hosts (Vercel, Netlify,
    // GitHub Pages) resolve clean URLs like /news-and-events without extra config.
    format: 'directory'
  }
});
