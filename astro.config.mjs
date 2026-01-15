import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: "https://beyzatozman.netlify.app",
  integrations: [icon(), react()],
  adapter: isDev ? undefined : netlify(),
});
