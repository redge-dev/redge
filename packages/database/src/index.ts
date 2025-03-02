import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";

import { mysqlClient } from "./drivers";

dotenv.config({
  path: "../../.env"
});

export const db = drizzle({
  client: mysqlClient
});
