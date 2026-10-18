import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const excludedPaths = new Set([
  '/privacy/',
  '/cookie-policy/',
  '/disclaimer/',
  '/sitemap.xml',
  '/robots.txt'
]);

export default defineConfig({
  site: 'https://dottclemente.it',
  integrations: [
    sitemap({
      filter: (page) => !excludedPaths.has(new URL(page).pathname)
    })
  ]
});
