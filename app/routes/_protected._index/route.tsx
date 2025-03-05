import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Redge" },
    { name: "description", content: "Welcome to Redge!" }
  ];
}

export default function IndexPage() {
  return "homepage";
}
