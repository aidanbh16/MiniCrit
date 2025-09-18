import 'server-only'

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.ACCESS_KEY)

export async function generateToken(userID?: String | null, user?: String){
    console.log(`generating token for ${user}!`)
    if(!userID) return null
    const id = userID
    console.log("Successfully created token from: ", id)
    return id
}