"use client"
import { ReactNode, useEffect, useRef } from "react"
import { ButtonLeft, ButtonRight } from "./ButtonMenu";
import styles from "@/style/Home.module.css"
import { useMoveScroll, useScrollWidth } from "@/service/scroll";

interface Props {
    children: ReactNode,
}

export default function HeaderHistory({ children }: Props) {
    const historyRef = useRef<HTMLDivElement>(null);
    const { maxSize } = useScrollWidth(historyRef, 1)
    const { left, right, scroll } = useMoveScroll(historyRef, { move: 288, maxSize: historyRef.current?.scrollWidth ?? 0 })


    return <header className={styles.history} role="menu" >
        <ButtonLeft className={scroll == 0 ? styles.close : ""} onClick={left} />

        <div className={styles.history__slider} ref={historyRef}>
            {children}
        </div>

        <ButtonRight className={scroll >= maxSize ? styles.close : ""} onClick={right} />

    </header>
}