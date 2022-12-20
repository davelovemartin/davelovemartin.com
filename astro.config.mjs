import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      drafts: true,
    }),
  ],
  output: "server",
  adapter: netlify(),
});
