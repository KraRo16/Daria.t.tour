import { redirect } from "react-router";

export function clientLoader() {
  return redirect("/it");
}

export default function RootRedirect() {
  return null;
}
