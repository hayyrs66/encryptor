import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), icon(
    {
      include:{
        lucide: ["github", "info"],
      }
    }
  )],
  site: "https://hayyrs66.github.io",
  base: "my-repo",
});
