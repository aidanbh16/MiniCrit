import "server-only"
export const runtime = "nodejs"

import bcrypt from "bcrypt";
import pool from "@/lib/db"

type LoginFieldError = {
    error?: string,
    fields?: { 
        username: string,
    },
}

export async function hash(pass: string){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(pass, salt);
}

export async function compare(user: string, pass: string): Promise<string | LoginFieldError>{
    try{
        const result = await pool.query('SELECT password_hash FROM users WHERE password=$1', [pass]);
        if(await bcrypt.compare(pass, result.rows[0].password_hash)){
            return result.rows[0].password_hash
        }else{
            
        }
    } catch(err){
        return {error: "Invalid password", fields: {username: user}}
    }
}