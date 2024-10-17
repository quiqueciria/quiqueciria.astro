import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    envPrefix: "STRAVA_", // Define el prefijo para las variables de entorno relacionadas con Strava
  },
});
