import "server-only"
import pool from "@/lib/db"



export async function createUser(username: string, email: string, hash: string) {
  const result = await pool.query('INSERT INTO users (username, email, pass_hash) VALUES ($1,$2,$3) RETURNING id', [username, email, hash]);
  return result
}

export async function selectUserByID(id?: string){
  try{
    const { rows } = await pool.query('SELECT username FROM users WHERE id = ($1)', [id])
    return rows[0].username
  } catch (err){
    return undefined;
  }
}

export async function selectUserByUser(user?: string): Promise<string | undefined>{
  try{
    const { rows } = await pool.query('SELECT username FROM users WHERE username = ($1)', [user])
    return rows[0].username
  }catch{
    return undefined
  }
}

export async function selectProfileByID(id?: string){
  const { rows } = await pool.query('SELECT username, pfp_key, bio FROM users WHERE id = ($1)', [id])
  return rows
}

export async function selectProfileByUser(user?: string){
  const { rows } = await pool.query('SELECT username, pfp_key, bio FROM users WHERE username = ($1)', [user])
  return rows
}