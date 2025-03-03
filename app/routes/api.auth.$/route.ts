import { auth } from "@redge/auth/server";

import type { Route } from "./+types/route";

export const action = async ({ request }: Route.ActionArgs) =>
  auth.handler(request);

export const loader = async ({ request }: Route.LoaderArgs) =>
  auth.handler(request);
