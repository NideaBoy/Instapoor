"use client"
import { ButtonHTMLAttributes } from "react";
import { AiFillCaretLeft as LeftIcon, AiFillCaretRight as RightIcon } from "react-icons/ai";
import styles from "@/style/ButtonMenu.module.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function ButtonLeft(props: Props) {
    return <button {...props} className={`${styles.slider__button} ${props.className}`}><i><LeftIcon /></i></button>
}
export function ButtonRight(props: Props) {
    return <button {...props} className={`${styles.slider__button} ${props.className}`}><i><RightIcon /></i></button>
}