import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://gemcity.xyz/",
  output: "hybrid",
  adapter: netlify({
    imageCDN: false,
  }),
  redirects: {
    "/admin": "/keystatic",
  },
  integrations: [react(), keystatic(), tailwind(), sitemap(), compress()],
});
