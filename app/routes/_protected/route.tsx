import { auth } from "@redge/auth/server";
import { ProtectedLayout } from "~/components";
import { ROUTES } from "packages/common/src/constants";
import { Outlet, redirect } from "react-router";

import type { Route } from "./+types/route";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const authenticated = await auth.api.getSession({
    headers: request.headers
  });
  if (!authenticated) {
    throw redirect(ROUTES.AUTH_SIGNIN);
  }
};

export default function ProtectedPage() {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  );
}
