import "server-only"
import pool from "@/lib/db"

export async function createUser(username: string, email: string, hash: string) {
  const client = await pool.connect()
  const check = await client.query("INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id", [username, email, hash]);
  client.release()
  return check
}

export async function selectUser(id?: string | null){
  if(!id) return null;
  try{
    const client = await pool.connect()
    const { rows } = await client.query("SELECT username FROM users WHERE id = ($1)", [id])
    client.release()
    return rows[0].username
  } catch (err){
    console.log('DB selectUser error')
    throw err;
  }
}