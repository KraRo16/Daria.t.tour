import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  base: "/Daria.t.tour/",
  resolve: {
    tsconfigPaths: true,
  },
});
