import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://access-motor.co.il',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/blog/'),
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
