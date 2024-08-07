"use client"
import { Fragment, useEffect, useState, useRef } from "react"
import Image from "next/image";
import { IoVolumeMuteSharp as Mute, IoVolumeMedium as UnMute, IoHeart as Like, IoHeartOutline as NoLike } from "react-icons/io5";
import { useVideo } from "@/store/video"
import { ButtonLeft, ButtonRight } from "./ButtonMenu"
import style from "@/style/post.module.css"
import btn from "@/style/ButtonMenu.module.css"
import IProfile from "@/interface/IProfile";
import { useMoveScroll, useScrollWidth } from "@/service/scroll";


interface Props {
    content: string[]
    alt?: string
    user: IProfile
}


function Video({ url }: { url: string }) {
    const videoRefs = useRef<HTMLVideoElement>(null);
    const { onMuted, onPause, isMuted, isPlay, setPause } = useVideo()
    async function SeeVideo(entries: any) {
        let entry = entries[0]
        if (videoRefs.current) {

            if (entry.isIntersecting)
                setPause(false)
            else
                setPause(true)
        }
    }
    useEffect(() => {

        const observer = new IntersectionObserver(SeeVideo, {
            threshold: 0.5
        })
        if (videoRefs.current)
            observer.observe(videoRefs.current)


    }, [])
    useEffect(() => {
        if (videoRefs.current) {
            videoRefs.current.muted = isMuted;
        }
    }, [isMuted]);
    useEffect(() => {
        let video = videoRefs.current
        if (video) {
            const pause = async () => {
                if (isPlay) {
                    await video.pause()
                } else {
                    await video.play()
                }
            }
            pause()
        }
    }, [isPlay]);
    return (
        <div >
            <video onClick={onPause} src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`} autoPlay muted ref={videoRefs} ></video>
            <i onClick={onMuted} className={style.sound}>{isMuted ? <Mute /> : <UnMute />}</i>
        </div>)
}

export default function Post(props: Props) {

    const [like, setLike] = useState(false)
    const [animation, setAnimation] = useState(style["like-hidden"])
    const [time, setTime] = useState<any>(null)

    const post = useRef<HTMLDivElement>(null)
    const { maxSize, size } = useScrollWidth(post)
    const { left, right, scroll } = useMoveScroll(post, { move: 378, maxSize })


    const ext = (r: string) => r.split(".").pop()



    function onLike() {
        if (time != null) {
            clearTimeout(time)
        }
        setAnimation(style["like-animation"])
        const anima = setTimeout(() => {
            setAnimation(style["like-hidden"])
        }, 1500)
        setLike(true)
        setTime(anima)
    }

    return (
        <article className={style.container}>
            <div className={style.menu} >
                <header className={style.profile}>
                    <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${props.user.picture}`} alt={props.user.username} className={style.picture} />
                    <span className={style.username}>{props.user.username}</span>
                </header>
                <ButtonLeft className={`${style["button-left"]} ${scroll == 0 ? btn["slider__button-hidden"] : ""}`} onClick={left} />
                <div className={style.content} ref={post} onDoubleClick={onLike}>
                    {props.content.map(i => {
                        return (
                            <Fragment key={crypto.randomUUID()}>
                                {ext(i) == "jpg" || ext(i) == "png" || ext(i) == "jpeg" ? <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${i}`}
                                    decoding="async" loading="lazy" alt={props.alt ?? ""} /> : <Video url={i} />}
                            </Fragment>
                        )
                    })}
                </div>
                <Image src="/img/icon/corazon.webp" alt="Imagen de corazon" width={65} height={60} className={animation} />
                <ButtonRight className={`${style["button-right"]} ${scroll >= (maxSize - 1) ? btn["slider__button-hidden"] : ""}`} onClick={right} />
                <footer className={style.footer}>
                    <i className={like ? style.like : ""} onClick={() => setLike(!like)}>{like ? <Like /> : <NoLike />}</i>
                </footer>
            </div>

        </article>
    )
}