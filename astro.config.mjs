import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: "https://beyzatozman.netlify.app",
  integrations: [icon(), react(), mdx(), sitemap()],
  adapter: isDev ? undefined : netlify(),
});