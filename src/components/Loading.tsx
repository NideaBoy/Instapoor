import style from "@/style/loading.module.css"
export default function Loading() {
    return <div className={style.container}>
        <div role="timer" className={style.loading}>

        </div>
    </div>
}