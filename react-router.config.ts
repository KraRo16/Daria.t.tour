import type { Config } from "@react-router/dev/config";

export default {
  basename: "/Daria.t.tour/",
  ssr: false,
  prerender: ["/it", "/en", "/uk"],
} satisfies Config;
