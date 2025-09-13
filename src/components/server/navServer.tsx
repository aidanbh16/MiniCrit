export const runtime = 'nodejs'

// src/components/server/navServer.tsx
import 'server-only'
import Nav from '@/components/layout/nav'
import { selectUser } from '~/src/lib/user'

export default async function NavServer() {
    const id = "9e32d11f-bfbc-4428-8f9e-c5c1fb711c32"
    const user = await selectUser(id)
    return <Nav user={user}/>
}