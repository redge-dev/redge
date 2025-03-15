import { auth } from "@redge/auth/server";
import { ROUTES } from "@redge/common/constants";
import { GradientBackground, Logo } from "@redge/components";
import { AuthLayout } from "~/components";
import { Link, Outlet, redirect } from "react-router";
import { Text } from "@brifui/components";

import type { Route } from "./+types/route";
import {
  containerStyles,
  formContainerStyles,
  formStyles,
  gradientBgStyles,
  gridStyles,
  logoStyles,
  trademarkStyles
} from "./styles";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const authenticated = await auth.api.getSession({
    headers: request.headers
  });
  if (!!authenticated) {
    throw redirect(ROUTES.HOME);
  }
};

export default function AuthPage() {
  return (
    <AuthLayout>
      <div className={containerStyles}>
        <GradientBackground className={gradientBgStyles} />
        <div className={gridStyles}>
          <div className={formContainerStyles}>
            <Link className={logoStyles} to="/">
              <Logo />
            </Link>

            <div className={formStyles}>
              <Outlet />
            </div>

            <Text type="text.xs" className={trademarkStyles}>
              © {new Date().getFullYear()} Redge, Inc.
            </Text>
          </div>

          <div />
        </div>
      </div>
    </AuthLayout>
  );
}
