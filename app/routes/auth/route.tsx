import { GradientBackground, Logo } from "@redge/components";
import { Link, Outlet } from "react-router";
import { Text } from "@brifui/components";

import {
  containerStyles,
  formContainerStyles,
  formStyles,
  gradientBgStyles,
  gridStyles,
  logoStyles,
  trademarkStyles
} from "./styles";

export default function AuthLayout() {
  return (
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
  );
}
