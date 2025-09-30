import "server-only"

type Post = {
    userID: string,
    title: string,
    text: string,
    tags: string[],
}

type PostFieldError = {
    error?: string,
    title?: string,
    text?: string,
}

export async function postTests(post: Post): Promise<boolean | PostFieldError>{
    if(post.title.length < 5){
        return {error: "Title must be over 5 character", title: post.title, text: post.text}
    } 
    if(post.title.length > 17){
        return {error: "Title must be less than 18 characters", title: post.title, text: post.text}
    } 
    if(post.text.length < 20){
        return {error: "Decription must be over 19 characters", title: post.title, text: post.text}
    }
    if(post.text.length > 400){
        return {error: "Description must be less than 401 characters", title: post.title, text: post.text}
    }
    if(post.tags.length < 1){
        return {error: "Must contain at least one tag", title: post.title, text: post.text}
    }
    if(post.tags.length > 5){
        return {error: "Must contain less than 5 tags", title: post.title, text: post.text}
    }
    
    return true
}