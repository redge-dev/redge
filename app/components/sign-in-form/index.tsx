import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { MailIcon } from "lucide-react";
import { Link } from "react-router";
import { Button, Card, Text } from "@brifui/components";

import {
  bodyStyles,
  containerStyles,
  descStyles,
  signUpTextStyles,
  titleContainerStyles,
  titleStyles
} from "./styles";

export const SignInForm = () => {
  return (
    <div className={containerStyles}>
      <div className={titleContainerStyles}>
        <Text className={titleStyles} type="heading.4xl">
          Sign in
        </Text>
        <Text className={descStyles}>
          Log in to your Redge account to continue
        </Text>
      </div>

      <div className={bodyStyles}>
        <Button size="lg" fluid variant="outline">
          <Button.Prefix>
            <SiGithub size={20} />
          </Button.Prefix>
          Sign in with Github
        </Button>
        <Button size="lg" fluid variant="outline">
          <Button.Prefix>
            <SiGoogle size={20} />
          </Button.Prefix>
          Continue with Google
        </Button>
        <Button size="lg" fluid variant="outline">
          <Button.Prefix>
            <MailIcon size={20} />
          </Button.Prefix>
          Sign in with Email
        </Button>
      </div>

      <Text className={signUpTextStyles}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Text>
    </div>
  );
};
