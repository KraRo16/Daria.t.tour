import type { Config } from "@react-router/dev/config";

export default {
  basename: "/Daria.t.tour",
  ssr: false,
  prerender: ["/Daria.t.tour/it", "/Daria.t.tour/en", "/Daria.t.tour/uk"],
} satisfies Config;
