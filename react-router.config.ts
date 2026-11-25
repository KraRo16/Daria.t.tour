import type { Config } from "@react-router/dev/config";

export default {
  basename: process.env.BASE_PATH ?? "/",
  ssr: false,
  prerender: ["/it", "/en", "/uk"],
} satisfies Config;
