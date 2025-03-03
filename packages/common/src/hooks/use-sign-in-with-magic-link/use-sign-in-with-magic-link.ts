import { signIn } from "@redge/auth/client";
import { useMutation } from "@tanstack/react-query";

import { ROUTES } from "../../constants";

export const signInWithMagicLinkMutationKey = () => ["sign-in-with-magic-link"];

export const useSignInWithMagicLink = () =>
  useMutation({
    mutationKey: signInWithMagicLinkMutationKey(),
    mutationFn: (email: string) =>
      signIn.magicLink({
        email,
        callbackURL: ROUTES.AUTH_CALLBACK
      })
  });
