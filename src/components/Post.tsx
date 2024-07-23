"use client"
import { Fragment, useEffect } from "react"
import style from "@/style/post.module.css"
import { ButtonLeft, ButtonRight } from "./ButtonMenu"

interface Props {
    content: string[]
    alt?: string
}



export default function Post(props: Props) {
    useEffect(() => {
        console.log(props.content)
    }, [])

    function ext(r: string) {
        const xt = r.split(".")
        return xt[xt.length - 1]
    }

    return (
        <article className={style.container}>
            <div className={style.menu}>
                <ButtonLeft className={style["button-left"]} />
                <div className={style.content}>
                    {props.content.map((i) => {
                        return (
                            <Fragment key={crypto.randomUUID()}>
                                {ext(i) == "jpg" || ext(i) == "png" || ext(i) == "jpeg" ? <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${i}`} alt={props.alt ?? ""} /> : <video src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${i}`} />}
                            </Fragment>
                        )
                    })}
                </div>
                <ButtonRight className={style["button-right"]} />
            </div>

            <p className={style.alt}>{props.alt}</p>
        </article>
    )
}