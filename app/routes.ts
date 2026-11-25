import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/root-redirect.tsx"), // "/" → "/it"
  route(":lang", "routes/home.tsx"), // /it, /en, /uk
] satisfies RouteConfig;
