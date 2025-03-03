import zod from "zod";

export const signInWithEmailSchema = zod.object({
  email: zod.string().email()
});
