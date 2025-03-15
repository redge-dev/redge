import { Page } from "@redge/components";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Your projects | Redge" },
    { name: "description", content: "Welcome to Redge!" }
  ];
}

export default function ProjectsPage() {
  return (
    <>
      <Page.Title>Projects</Page.Title>
    </>
  );
}
