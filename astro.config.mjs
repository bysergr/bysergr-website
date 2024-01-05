import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/projects/1": {
      destination: "/projects",
      status: 301,
    },
    "/posts": {
      destination: "/build",
      status: 302,
    },
    "/posts/[slug]": {
      destination: "/build",
      status: 302,
    },
  },
});
