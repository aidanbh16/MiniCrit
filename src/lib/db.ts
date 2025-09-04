import "server-only"
import { Pool } from "pg";

declare global {
  var devPool: Pool | undefined;
}

for (const k of ["DB_HOST","DB_USER","DB_PASSWORD","DB_NAME","DB_PORT"]) {
  if (!process.env[k]) {
    throw new Error(`Missing env ${k} in .env`)
  }
}

const pool = global.devPool ?? new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT ?? 5432),
  ssl: { rejectUnauthorized: false },
});

if (process.env.NODE_ENV !== "production"){
  global.devPool = pool;
}

export default pool;
