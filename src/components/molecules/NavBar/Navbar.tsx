'use client'
import React, { useEffect } from 'react'
import './Navbarstyle.scss'
import Link from 'next/link'
import { navData } from '@/lib/data'
import Button from '../../atoms/Button'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import MenuIcon from '@/app/Vectors/MenuIcon'
import CloseIcon from '@/app/Vectors/CloseIcon'
const Navbar = () => {
    const pathName = usePathname()
    const params = usePathname()
    const [active, setActive] = useState(0)
    const [mobile, setMobile] = useState(false)
    const [show, setShow] = useState(true)
    const [lastScrolly, setLastScrolly] = useState(846)

    const controlNavbar = () => {
        if(window.scrollY > lastScrolly){
            console.log(lastScrolly)
            setShow(false)
        }else {
            setShow(true)
            console.log({lastScrolly})
        }
        setLastScrolly(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
    
        // cleanup function
        return () => {
           window.removeEventListener('scroll', controlNavbar);
        };
      }, [lastScrolly]);

    return (
        <div className={`nav ${show ? 'bg-transparent' : 'bg-red-500'}`}>
        <div className='nav-wrapper'>
        <div>
            <img src="/vectors/logo.svg" alt="" className='logo' />
        </div>
        
        <div className='link-wrapper'>
        <div className='links'>
        {navData.map((data:{title:string, link:string}, index:number)=>  <Link className={`link`} href={`#${data.link}`} key={`link-${index}`} onClick={()=> setActive(index)}>
            <p>{data.title}</p>
            {index === active && <div className='line'></div>}
        </Link>)}
        </div>
        <Button bgColor='#2657A4' title='FREE TRIAL'/>
        </div>
        <MenuIcon className='menu' onClick={()=>setMobile(!mobile)}/>
        </div>
        <div className={`mobile-screen ${mobile? 'mt-[0]': 'mt-[-300%]'}`}>
        <div className='logo-wrapper'>
            <img src="/vectors/logo.svg" alt="" className='logo' />
           <CloseIcon onClick={()=> setMobile(false)}/>
        </div>
        
        <div className='link-wrapper'>
        <div className='links'>
        {navData.map((data:{title:string, link:string}, index:number)=>  <Link className={`link`} href={`#${data.link}`} key={`link-${index}`} onClick={()=> setActive(index)}>
            <p>{data.title}</p>
            {index === active && <div className='line'></div>}
        </Link>)}
        </div>
        <Button title='FREE TRIAL'/>
        </div>
        </div>
        </div> 
    )
}

export default Navbar
