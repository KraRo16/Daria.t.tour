import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // нет серверного рендера на лету
  prerender: ["/it", "/en", "/uk"], // эти страницы станут готовым HTML при сборке
} satisfies Config;
