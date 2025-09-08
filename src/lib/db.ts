import "server-only"
import { Pool } from "pg";

declare global {
  var devPool: Pool | undefined;
}

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error('DB config missing at runtime (check Amplify Runtime envs)');
}

const pool = global.devPool ?? new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(process.env.DB_PORT ?? 5432),
  ssl: { rejectUnauthorized: false },
  max: 5,
  idleTimeoutMillis: 10_000,
  connectionTimeoutMillis: 5_000,
  keepAlive: true,
});

if (process.env.NODE_ENV !== "production"){
  global.devPool = pool;
}

export default pool;
