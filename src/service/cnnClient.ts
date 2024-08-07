"use client"
import axios from "axios";
import { useEffect, useState } from "react";
interface Props {
    body: any,
    method: "get" | "post" | "put" | "delete"
}

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: "application/json"
    }
})

export const cxx = instance

export const cnn = <T>(url: string, props: Props): { data: T[], isLoading: boolean } => {
    const [isLoading, setLoadig] = useState(true)
    const [data, setData] = useState<T[]>([])
    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await instance<T[]>(url, {
                    method: props.method,
                    data: props.body ?? {}
                })
                setData(res.data)
            } finally {
                setLoadig(false)
            }
        }
        getdata()
    }, [])
    return { data, isLoading }

}