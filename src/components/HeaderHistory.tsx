"use client"
import { ReactNode, useRef, useState } from "react"
import { AiFillCaretLeft as LeftIcon, AiFillCaretRight as RightIcon } from "react-icons/ai";
import styles from "@/style/Home.module.css"

interface Props {
    children: ReactNode,
}

export default function HeaderHistory({ children }: Props) {
    const [scroll, setScroll] = useState<number>(0)
    const [maxSize, setMaxSize] = useState<number>()
    const historyRef = useRef<HTMLDivElement>(null);

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
        <button id="left" className={`${styles.slider__button} ${scroll == 0 ? styles.close : ""}`} onClick={down}><i><LeftIcon /></i></button>
        <div className={styles.history__slider} ref={historyRef}>
            {children}
        </div>
        <button id="right" className={`${styles.slider__button} ${scroll == maxSize ? styles.close : ""}`} onClick={up}><i><RightIcon /></i></button>
    </header>
}