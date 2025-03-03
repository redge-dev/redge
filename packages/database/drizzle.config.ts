import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
  path: "../../.env"
});

export default defineConfig({
  dialect: "mysql",
  schema: "./src/schemas",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT)!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!
  },
  migrations: {
    prefix: "timestamp",
    table: "__migrations__",
    schema: "public"
  },
  breakpoints: true,
  strict: true,
  verbose: true
});
