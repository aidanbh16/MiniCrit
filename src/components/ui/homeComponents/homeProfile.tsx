"use client"

import Image from "next/image"

type User = {
    username: string,
    pfp: string,
    bio: string
}

export default function HomeProfile({user}: {user: User}){
    return(
        <div className="w-9/10 bg-white rounded-2xl shadow-lg p-5">
            <div className="w-full flex justify-center mb-2">
                <Image src="/profile/placeholder.png" alt="profile" width={512} height={512} className="h-40 w-40 flex justify-center items-center border-2 border-black rounded-full"/>
            </div>
            <div className="">{user.username}</div>
            <div className="text-neutral-500 text-sm/tight">{user.bio}</div>
        </div>
    )
}