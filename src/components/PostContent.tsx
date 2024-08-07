"use client"
import { useEffect, useState, useRef } from "react"
import IPost from "@/interface/IPost"
import { cnn } from "@/service/cnnClient"

import Post from "./Post"
import Loading from "./Loading"
export default function PostContent() {

    const [limit, setLimit] = useState(3)
    const scroll = useRef<HTMLDivElement>(null)

    const res = cnn<IPost>(`/post/content/${limit}`, {
        method: "get",
        body: null
    })
    // if (res.isLoading) return <Loading />
    return (
        <div ref={scroll}>
            {res.data.map((i) => <Post key={crypto.randomUUID()} alt={i.alt} content={i.content} user={i.user} />
            )}
        </div>
    )
}