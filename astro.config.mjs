import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  // More configs
  integrations: [
    svelte(),
    mdx()
  ],
  site: 'https://questions.carletoncomputerscience.ca',
  server: { port: 10000 }
});