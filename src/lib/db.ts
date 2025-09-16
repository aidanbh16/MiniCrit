import 'server-only'
import { Pool } from 'pg'

const SSL_CONFIG = process.env.SSL_CONFIG ? JSON.parse(process.env.SSL_CONFIG) : false

const pool = new Pool({
    connectionString: process.env.DB_URL!,
    ssl: SSL_CONFIG!,
})

export default pool;