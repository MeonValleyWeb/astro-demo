import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://steady-youtiao-b2b2ad.netlify.app",
  integrations: [preact()]
});