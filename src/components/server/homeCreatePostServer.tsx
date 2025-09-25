export const runtime = "nodejs"

import { cookies } from "next/headers"
import { decrypt } from "~/src/lib/session"
import CreatePost from "../ui/homeComponents/createPost"

export default async function HomeCreatePostServer(){
    try{
        const cookie = await cookies()
        const value = await decrypt(cookie.get("session")?.value)
        if(!value){
            throw undefined
        }
        return <CreatePost/>    
    }catch{
        return null
    }
}