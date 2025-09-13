export const runtime = 'nodejs'

// src/components/server/navServer.tsx
import 'server-only'
import Nav from '@/components/layout/nav'
import { selectUser } from '~/src/lib/user'

export default async function NavServer() {
    const id = ""
    const user = await selectUser(id)
    return <Nav user={user}/>
}