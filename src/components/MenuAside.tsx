"use client"
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation'
import { AiFillHome, AiOutlineSearch, AiOutlineCompass, AiOutlineHome, AiFillCompass } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Image from 'next/image';
import Input from './Input';
import { Logo } from '@/constants/menus';
import ChangeTheme from "@/service/ChangeTheme"
import style from "@/style/aside.module.css"

const inter = Inter({ subsets: ['latin'], weight: ["400", "500"] })

export default function Aside() {
    const pathname = usePathname()
    const [isOpen, onOpen] = useState(false)

    const {colorScheme, toggleColorScheme} = ChangeTheme()

    function active(path: string, name: string = "sidebar__link-") {
        if (path === pathname)
            return style["sidebar__link-active"]
        return ""
    }
    return (<>
        <aside className={`${style.sidebar} ${isOpen ? style["sidebar-close"] : ""} ${inter.className}`}>
            <header className={style.sidebar__header}>
                <a href="/" title='Logo de instapoor'>
                <picture className="logo__small">
                        <Image src={colorScheme == "light" ? Logo.SmallLight : Logo.SmallDark} alt="Logo de instapoor corto" width={32}  height={32}/>
                </picture>
                <picture className={`logo__small ${isOpen ? 'logo__small-close' : ""}`}>
                        <Image src={colorScheme == "light" ? Logo.SmallLight : Logo.SmallDark} alt="Logo de instapoor corto" width={32}  height={32}/>
                </picture>
                    <picture className={`logo ${isOpen ? 'logo-close' : ""}`}>
                        <Image src={colorScheme == "light" ? Logo.Light : Logo.Dark} alt="Logo de instapoor" width={136}  height={32}/>
                    </picture>
                </a>
            </header>
            <nav className={style.sidebar__nav}>
                <ul className={style.sidebar__list}>
                    <li className={style.sidebar__item}>
                        <a href="/" className={`${style.sidebar__link} ${active("/")}`}>
                            {pathname === "/" ? <i className={style.sidebar__icon}><AiFillHome /></i> : <i className={style.sidebar__icon}><AiOutlineHome className={style.sidebar__icon} /></i>}
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li className={style.sidebar__item}>
                        <button className={`${style.sidebar__link} ${isOpen ? "clicked" : ""}`} onClick={()=>onOpen(!isOpen)}>
                            <i className={style.sidebar__icon}><AiOutlineSearch  /></i>
                            <span>Buscar</span>
                        </button>
                    </li>
                    <li className={style.sidebar__item}>
                        <button className={style.sidebar__link}>
                            <i className={style.sidebar__icon}><IoIosCreate  /></i>
                            <span>Crear</span>
                        </button>
                    </li>
                    <li className={style.sidebar__item}>
                        <a href="/explore" className={`${style.sidebar__link} ${active("/explore")}`}>
                            {pathname === "/explore" ? <i className={style.sidebar__icon}><AiFillCompass  /></i>  :  <i><AiOutlineCompass className={style.sidebar__icon} /></i>}

                            <span>explorar</span>
                        </a>
                    </li>
                    <li className={style.sidebar__item}>
                        <a href="#" className={style.sidebar__link} target='_blank'>
                            <img src="https://avatars.githubusercontent.com/u/75509927?v=4&size=64" alt="Icono de perfil de github" />
                            <span>Repositorio</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <button className={`${style.btn__system} ${inter.className}`} onClick={toggleColorScheme}>
                <i>{colorScheme === 'light' ? <CiSun/>: <FaMoon/>}</i> <span>Cambiar apariencia</span>
            </button>
        </aside>
            <div className={`${style.sidebar__search} ${isOpen ? style["sidebar__search-open"] : ""}`}>
                <form role='search' className={style.form__search}>
                    <h1 className={`${style.search__title} ${inter.className}`}>Buscar</h1>
                    <Input placeholder='Buscar' type='text' className={style.input}/>
                </form>
                <h4 className={`${style.alredy__title} ${inter.className}`}>Recientes</h4>
                <div className={`${style.container__alredy} ${inter.className}`}>
                    <p>No busqueda reciente.</p>
                </div>
            </div>
    </>)
}