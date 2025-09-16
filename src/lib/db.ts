import 'server-only'
import { Pool } from 'pg'

const SSL_CONFIG = process.env.SSL_CONFIG ? JSON.parse(process.env.SSL_CONFIG) : false

const pool = new Pool({
    user: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT)!,
    database: process.env.DB_NAME!,
    connectionString: process.env.DB_URL!,
    ssl: SSL_CONFIG!,
})

export default pool;