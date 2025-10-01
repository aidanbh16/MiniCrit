'use client'

import Image from "next/image"

type Post = {
    id: string;
    username: string;
    tags: string[];
    title: string;
    text: string;
    media_key: string | null;
    date: string,
}

export default function Post(post: Post){
    return(
        <div className="w-9/10 p-2 bg-white rounded-2xl shadow-lg flex flex-col items-start gap-y-3">
            <div className="w-full h-5 flex items-center">
                <div className="w-1/2 flex justify-start">
                    <div className="text-black text-sm">@{post.username}</div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="text-black text-sm">{post.date}</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start">
                <div className="w-full text-black text-sm">{post.title}</div>
                <div className="w-full text-black text-sm">{post.text}</div>
            </div>
        </div>
    )
}