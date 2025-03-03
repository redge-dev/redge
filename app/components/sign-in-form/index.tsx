import { zodResolver } from "@hookform/resolvers/zod";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button, Form, Input, Text } from "@brifui/components";

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

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signInWithEmailSchema)
  });

  const onSubmit = (value: any) => {
    console.log(value);
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

          <Button size="lg" fluid variant="outline">
            <Button.Prefix>
              <SiGithub size={20} />
            </Button.Prefix>
            Continue with Github
          </Button>
          <Button size="lg" fluid variant="outline">
            <Button.Prefix>
              <SiGoogle size={20} />
            </Button.Prefix>
            Continue with Google
          </Button>
        </div>
      </Form.Root>

      <Text className={signUpTextStyles}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Text>
    </div>
  );
};
