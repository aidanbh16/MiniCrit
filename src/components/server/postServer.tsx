'use server'

import { latest10Posts } from "~/src/lib/post"
import { selectUserByID } from "~/src/lib/user"
import Post from "../ui/homeComponents/post"

export default async function PostServer(){
    const latestPosts = await latest10Posts()
    const posts = await Promise.all(
        latestPosts.map(async (info) => {
            const user = await selectUserByID(info.userid)
            const d = new Date(info.created_at);
            const mmddyyyy = d.toLocaleDateString('en-US', {
                month: '2-digit', day: '2-digit', year: 'numeric'
            });
            return{
                id: info.id,
                username: user,
                tags: info.tags,
                title: info.title_text,
                text: info.post_text,
                media_key: info.media_key ?? null,
                date: mmddyyyy,
            }
        })
    )

    return (
        <>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </>
    );
}