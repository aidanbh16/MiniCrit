export const runtime = "nodejs"

import { selectProfileByID } from '~/src/lib/user'
import { cookies } from 'next/headers'
import { decrypt } from '~/src/lib/session'
import HomeProfile from '../ui/homeComponents/homeProfile'
import CreatePost from '../ui/homeComponents/createPost'
import HomeLogin from '../ui/homeComponents/homeSignIn'


export default async function HomeServer(){
    try{
        const cookie = await cookies()
        const value = await decrypt(cookie.get("session")?.value)
        if(!value){
            throw undefined
        }
        const rows = await selectProfileByID(String(value.id))
        const user = {
            username: rows[0].username,
            pfp: rows[0].pfp_key,
            bio: rows[0].bio,
        }
        return (
            <>
                <HomeProfile user={user}/>
                <CreatePost/>  
            </>
        )
    }catch{
        return(
            <>
                <HomeLogin />
            </>
        )
    }
}