import 'server-only'
import { Pool } from 'pg'

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false },
})

async function healthCheck(){
  try{
    const client = await pool.connect()
    console.log(await client.query('SELECT * FROM users'))
    client.release()
  }catch{
    console.log("DB failed to connect!")
  }
}

healthCheck()

export default pool;