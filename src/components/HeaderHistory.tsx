"use client"
import { ReactNode, useEffect, useRef, useState } from "react"
import { ButtonLeft, ButtonRight } from "./ButtonMenu";
import styles from "@/style/Home.module.css"

interface Props {
    children: ReactNode,
}

export default function HeaderHistory({ children }: Props) {
    const [scroll, setScroll] = useState<number>(0)
    const [maxSize, setMaxSize] = useState<number>()
    const historyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (historyRef.current) {
            let history = historyRef.current
            let maxScroll = history.scrollWidth - history.clientWidth;
            setMaxSize(maxScroll)
            if (history.clientWidth >= history.scrollWidth) {
                setScroll(maxScroll)
            }
            window.addEventListener("resize", () => {
                maxScroll = history.scrollWidth - history.clientWidth;
                setMaxSize(maxScroll)
                setScroll(history.scrollLeft)
                if (history.scrollLeft > maxScroll) {
                    setScroll(maxScroll)
                }
            })
            history.addEventListener("scroll", () => {
                maxScroll = history.scrollWidth - history.clientWidth;
                setMaxSize(maxScroll)
                setScroll(history.scrollLeft)
                if (history.scrollLeft >= (maxScroll - 20)) {
                    setScroll(maxScroll)
                }


            })
        }
    }, [])
    function down() {
        let resolve = scroll - 300
        let res = Math.max(resolve, 0)
        setScroll(res)
        if (historyRef.current) {
            historyRef.current.scrollLeft = res
        }
    }
    function up() {
        let res = scroll + 240

        if (historyRef.current) {
            const maxScroll = historyRef.current.scrollWidth - historyRef.current.clientWidth;
            setMaxSize(maxScroll)

            if (res <= maxScroll) {
                setScroll(res)
                historyRef.current.scrollLeft = res
            } else {
                setScroll(maxScroll)
                historyRef.current.scrollLeft = maxScroll
            }
        }

    }

    return <header className={styles.history} role="menu" >
        <ButtonLeft className={scroll == 0 ? styles.close : ""} onClick={down} />

        <div className={styles.history__slider} ref={historyRef}>
            {children}
        </div>

        <ButtonRight className={scroll == maxSize ? styles.close : ""} onClick={up} />

    </header>
}