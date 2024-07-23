"use client"
import IPost from "@/interface/IPost"
import { cnn } from "@/service/cnn"
import { useEffect, useState } from "react"
import Post from "./Post"
export default function PostContent() {
    const [post, setPost] = useState<IPost[]>([])
    const [limit, setLimit] = useState(3)
    useEffect(() => {
        async function getPost() {
            const res = await cnn.get<IPost[]>(`/post/content/${limit}`)
            setPost(res.data)
        }
        getPost()
    }, [])
    return (
        <div>
            {post.map((i) => <Post key={crypto.randomUUID()} alt={i.alt} content={i.content} />
            )}
        </div>
    )
}