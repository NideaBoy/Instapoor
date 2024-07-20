"use client"
import Image from 'next/image';
import { Logo } from '@/constants/menus';
import ChangeTheme from '@/service/ChangeTheme';
import style from "@/style/header.module.css"
import Input from './Input';

export default function Header() {
    const {colorScheme} = ChangeTheme()
    return <header className={style.header}> 
        <Image src={colorScheme == "light" ? Logo.SmallLight : Logo.SmallDark} alt="Logo de instapoor corto" width={32}  height={32} priority={true}/>
        <Image src={colorScheme == "light" ? Logo.Light : Logo.Dark} alt="Logo de instapoor" width={136}  height={32} priority={true}/>

        <div>
            <Input placeholder='Buscar' className={style.input}/>        
        </div>
    </header>
}