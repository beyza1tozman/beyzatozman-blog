import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://beyzasblog.netlify.app/",
  integrations: [icon(), react()],
  adapter: netlify(),
});
