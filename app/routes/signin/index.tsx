import { GradientBackground, Logo } from "@redge/components";
import { SignInForm } from "~/components";
import { Link } from "react-router";
import { Text } from "@brifui/components";

import type { Route } from "../../+types/root";
import {
  containerStyles,
  formContainerStyles,
  formStyles,
  gradientBgStyles,
  gridStyles,
  logoStyles,
  previewContainerStyles,
  trademarkStyles
} from "./styles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In | Redge" },
    { name: "description", content: "Welcome to Redge!" }
  ];
}

export default function Home() {
  return (
    <div className={containerStyles}>
      <GradientBackground className={gradientBgStyles} />
      <div className={gridStyles}>
        <div className={formContainerStyles}>
          <Link className={logoStyles} to="/">
            <Logo />
          </Link>

          <div className={formStyles}>
            <SignInForm />
          </div>

          <Text type="text.xs" className={trademarkStyles}>
            © {new Date().getFullYear()} Redge, Inc.
          </Text>
        </div>

        <div className={previewContainerStyles} />
      </div>
    </div>
  );
}
