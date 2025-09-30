import "server-only"

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

type Post = {
    userID: string,
    title: string,
    text: string,
    tags: string[],
    file: File,
}

const s3Client = new S3Client({
    region: process.env.AWS_REGION
})

export async function uploadS3(post: Post){
    const file = post.file
    const media_key = `users/${post.userID}/media/${file.name}`
    const Body = Buffer.from(await file.arrayBuffer());

    await s3Client.send(
        new PutObjectCommand({
            Bucket: "minicrit",
            Key: media_key,
            Body: Body,
            ContentType: file.type,
        })
    )

    return media_key
}