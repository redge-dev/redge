import { zodResolver } from "@hookform/resolvers/zod";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { useSignInWithMagicLink } from "@redge/common/hooks";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button, Form, Input, Text, toast } from "@brifui/components";

import type { Route } from "./+types/route";
import { signInWithEmailSchema } from "./schema";
import {
  bodyStyles,
  containerStyles,
  descStyles,
  dividerStyles,
  signUpTextStyles,
  titleContainerStyles,
  titleStyles
} from "./styles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In | Redge" },
    { name: "description", content: "Welcome to Redge!" }
  ];
}

type Inputs = {
  email: string;
};

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(signInWithEmailSchema)
  });
  const { mutate: signInWithMagicLink } = useSignInWithMagicLink({
    onSuccess() {
      toast.success("A login link has been sent to your email.");
    },
    onError() {
      toast.success("Failed to send to your email, please try again later.");
    }
  });

  const onSubmit = ({ email }: Inputs) => {
    signInWithMagicLink(email);
  };

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

      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Field name="email" invalid={!!errors.email?.message}>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Input
              size="lg"
              error={!!errors.email?.message}
              placeholder="Enter your email"
              {...register("email")}
            />
          </Form.Control>
          <Form.ErrorMessage>{errors.email?.message}</Form.ErrorMessage>
        </Form.Field>
        <div className={bodyStyles}>
          <Form.Submit>
            <Button size="lg" fluid>
              <Button.Prefix>
                <MailIcon size={20} />
              </Button.Prefix>
              Continue with Email
            </Button>
          </Form.Submit>

          <div className={dividerStyles}>Or</div>

          <Button fluid disabled size="lg" type="button" variant="outline">
            <Button.Prefix>
              <SiGithub size={20} />
            </Button.Prefix>
            Coming soon
          </Button>
          <Button disabled type="button" size="lg" fluid variant="outline">
            <Button.Prefix>
              <SiGoogle size={20} />
            </Button.Prefix>
            Coming soon
          </Button>
        </div>
      </Form.Root>

      <Text className={signUpTextStyles}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Text>
    </div>
  );
}
