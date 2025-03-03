import { Text } from "@brifui/components";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Logging in... | Redge" },
    { name: "description", content: "Welcome to Redge!" }
  ];
}

export default function CallbackPage() {
  return (
    <>
      <Text type="heading.4xl">Logging you in...</Text>
      <Text type="text.lg">Please wait, we're logging you in...</Text>
    </>
  );
}
