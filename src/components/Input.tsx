import { Inter } from 'next/font/google';
import { InputHTMLAttributes } from "react";

const inter = Inter({ subsets: ['latin'], weight: ["400", "500"] })

import style from "@/style/input.module.css"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    classStyle?: string 
}

export default function Input(props: Props) {
    return <input  {...props} className={`${style.input} ${inter.className} ${props.className ?? ""}`} />
}