import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { Text, toast } from "@brifui/components";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Logging in... | Redge" },
    { name: "description", content: "Welcome to Redge!" }
  ];
}

export default function CallbackPage() {
  const [search] = useSearchParams();

  const error = search.get("error");

  useEffect(() => {
    if (error) {
      toast.error("The log in link has been expired.");
    } else {
      toast("Log in successfully!");
    }
  }, [error]);

  return (
    <>
      <Text type="heading.4xl">Logging you in...</Text>
      <Text type="text.lg">Please wait, we're logging you in...</Text>
    </>
  );
}
