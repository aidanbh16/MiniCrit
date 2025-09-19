export const runtime = 'nodejs'

// src/components/server/navServer.tsx
import 'server-only'
import Nav from '@/components/layout/nav'
import { selectUserByID } from '~/src/lib/user'
import { cookies } from 'next/headers'
import { decrypt } from '~/src/lib/session'

export default async function NavServer() {
    try{
        const cookie = await cookies()
        const value = await decrypt(cookie.get("session")?.value)
        if(!value){
            throw undefined
        }
        const user = await selectUserByID(String(value.id))
        return <Nav user={user}/>
    } catch {
        return <Nav user={undefined}/>
    }
}