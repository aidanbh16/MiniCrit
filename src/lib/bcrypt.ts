import "server-only"
export const runtime = "nodejs"

import bcrypt from "bcrypt";
import pool from "@/lib/db"

export async function hash(pass: string){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(pass, salt);
}

export async function compare(user: string, pass: string){
    console.log("Attempting compare");
    try{
        const { rows } = await pool.query('SELECT password_hash FROM users WHERE username=$1', [user]);
        if(!await bcrypt.compare(pass, rows[0].password_hash)){
            console.log("L fail");
            return null
        }else{
            const { rows } = await pool.query('SELECT id FROM users WHERE username=$1', [user]);
            console.log("YAY ITS EQUAL!!")
            return rows[0].id
        }
    } catch(err){
        console.log("Error: ", err)
        throw err;
    }
}