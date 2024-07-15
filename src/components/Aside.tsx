"use client"
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation'
import { AiFillHome, AiOutlineSearch, AiOutlineCompass, AiOutlineHome, AiFillCompass } from "react-icons/ai";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Image from 'next/image';
import ChangeTheme from "@/service/ChangeTheme"
import Input from './Input';

const inter = Inter({ subsets: ['latin'], weight: ["400", "500"] })

export default function Aside() {
    const pathname = usePathname()
    const [isOpen, onOpen] = useState(false)
    const logo = "/img/InstaPoor.webp"
    const logoWhite = "/img/InstaPoor_white.webp"
    const logoSmall = "/img/InstaPoor_short.webp"
    const logoWhiteSmall = "/img/InstaPoor_short_white.webp"

    const {colorScheme, toggleColorScheme} = ChangeTheme()

    function active(path: string, name: string = "sidebar__link-") {
        if (path === pathname)
            return `${name}active`
        return ""
    }
    return (<>
        <aside className={`sidebar ${isOpen ? "sidebar-close" : ""} ${inter.className}`}>
            <header className={`sidebar__header`}>
                <a href="/" title='Logo de instapoor'>
                <picture className="logo__small">
                        <Image src={colorScheme == "light" ? logoSmall : logoWhiteSmall} alt="Logo de instapoor corto" width={32}  height={32}/>
                </picture>
                <picture className={`logo__small ${isOpen ? 'logo__small-close' : ""}`}>
                        <Image src={colorScheme == "light" ? logoSmall : logoWhiteSmall} alt="Logo de instapoor corto" width={32}  height={32}/>
                </picture>
                    <picture className={`logo ${isOpen ? 'logo-close' : ""}`}>
                        <Image src={colorScheme == "light" ? logo : logoWhite} alt="Logo de instapoor" width={136}  height={32}/>
                    </picture>
                </a>
            </header>
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a href="/" className={`sidebar__link ${active("/")}`}>
                            {pathname === "/" ? <i className="sidebar__icon"><AiFillHome /></i> : <i className="sidebar__icon"><AiOutlineHome className="sidebar__icon" /></i>}
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <button className={`sidebar__link ${isOpen ? "clicked" : ""}`} onClick={()=>onOpen(!isOpen)}>
                            <i className="sidebar__icon"><AiOutlineSearch  /></i>
                            <span>Buscar</span>
                        </button>
                    </li>
                    <li className="sidebar__item">
                        <a href="/explore" className={`sidebar__link ${active("/explore")}`}>
                            {pathname === "/explore" ? <i className="sidebar__icon"><AiFillCompass  /></i>  :  <i><AiOutlineCompass className="sidebar__icon" /></i>}

                            <span>explorar</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#" className="sidebar__link" target='_blank'>
                            <img src="https://avatars.githubusercontent.com/u/75509927?v=4&size=64" alt="Icono de perfil de github" />
                            <span>Repositorio</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <button className={`btn__system ${inter.className}`} onClick={toggleColorScheme}>
                <i>{colorScheme === 'light' ? <CiSun/>: <FaMoon/>}</i> <span>Cambiar apariencia</span>
            </button>
        </aside>
            <div className={`sidebar__search ${isOpen ? "sidebar__search-open" : ""}`}>
                <form role='search' className='form__search'>
                    <h1 className={`search__title ${inter.className}`}>Buscar</h1>
                    <Input placeholder='Buscar' type='text' className='input'/>
                </form>
                <h4 className={`alredy__title ${inter.className}`}>Recientes</h4>
                <div className={`container__alredy ${inter.className}`}>
                    <p>No busqueda reciente.</p>
                </div>
            </div>
    </>)
}