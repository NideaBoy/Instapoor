"use client"
import { AiFillHome,  AiOutlineCompass, AiOutlineHome, AiFillCompass } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ChangeTheme from "@/service/ChangeTheme";
import style from "@/style/footer.module.css"



export default function Footer() {
    const pathname = usePathname()
    const {colorScheme, toggleColorScheme} = ChangeTheme()

    return <footer className={style.footer}>
        <nav className={style.footer__nav}>
            <ul className={style.footer__list}>
                <li className={style.footer__item}><a href="/" className={style.footer__link}><i className={style.footer__icon}>{pathname === "/" ? <AiFillHome/> : <AiOutlineHome/>}</i></a></li>
                <li className={style.footer__item}><a href="/explore" className={style.footer__link}>
                <i className={style.footer__icon}>{pathname === "/explore" ? <AiFillCompass/> : <AiOutlineCompass/>}</i>
                </a></li>
                <li className={style.footer__item}><i className={style.footer__icon}><IoIosCreate/></i></li>
                <li className={style.footer__item}><a href="https://github.com/NideaBoy/Instapoor" className={style.footer__link} target='_blank' rel='noopener' >
                            <img src="https://avatars.githubusercontent.com/u/75509927?v=4&size=64" alt="Icono de perfil de github" />
                        </a></li>
                <li className={style.footer__item}><i className={style.footer__icon} onClick={toggleColorScheme}>{colorScheme === 'light' ? <CiSun/>: <FaMoon/>}</i></li>
            </ul>
        </nav>
    </footer>
}