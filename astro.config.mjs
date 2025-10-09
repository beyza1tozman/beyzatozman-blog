import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://beyzasblog.netlify.app/",
  integrations: [icon(), react()],
  adapter: node({
    mode: "standalone"
  })
});