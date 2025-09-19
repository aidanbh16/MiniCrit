import "server-only"
export const runtime = "nodejs"

import bcrypt from "bcrypt";
import pool from "@/lib/db"

type LoginFieldError = {
    error?: string,
    username?: string,
}

export async function hash(pass: string){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(pass, salt);
}

export async function compare(user: string, pass: string): Promise<string | LoginFieldError>{
    try{
        const result = await pool.query('SELECT password_hash FROM users WHERE username=$1', [user]);
        if(await bcrypt.compare(pass, result.rows[0].password_hash)){
            const userID = await pool.query('SELECT id FROM users WHERE username=$1', [user]);
            return userID.rows[0].id
        }else{
            throw {error: "Invalid password", username: user} as LoginFieldError
        }
    } catch(error: any){
        return error
    }
}