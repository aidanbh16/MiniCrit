import 'server-only'
import { Pool } from 'pg'

declare global { var __pool: Pool | undefined }

const pool =
  global.__pool ??
  new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl: { rejectUnauthorized: false }
  })

if (!global.__pool) global.__pool = pool

export default pool