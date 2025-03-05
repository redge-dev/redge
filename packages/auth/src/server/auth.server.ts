import { db } from "@redge/database";
import { account, session, user, verification } from "@redge/database/schemas";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: {
      user,
      session,
      account,
      verification
    }
  }),
  advanced: {
    cookiePrefix: "redge"
  },
  plugins: [
    magicLink({
      async sendMagicLink({ email, url }) {
        console.log(`✉️ Your sign in url for email ${email} is: ${url}`);
      }
    })
  ]
});
