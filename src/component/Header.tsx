import React, { useEffect, useState } from 'react'
import {headerData} from "../Data"
import Nav from './Nav'
import { TiThMenuOutline } from 'react-icons/ti'
import NavMobile from './NavMobile'
import Socials from './Socials'
const Header:React.FC = () => {
    const {logo} = headerData
    const [isActive, setIsActive] = useState(false)
    const [navMobile, setNavMobile] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
        })
    })

  return (
    <header className={`${
        isActive ? "h-[100px] xl:h-[110px] shadow-lg ": " h-[120px] xl:h-[150px]"
    } bg-gray-100 fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
        <div className='flex justify-between items-center h-full pr-[60px]'>
            {/* logo */}
            <a href="/">
                <img className='w-[150px] h-[50px]' src={logo} alt="tatoo-logo" />
            </a>
            {/* nav- initially is hidden - show on desktop */}
            <div className="hidden xl:flex">
                <Nav/>
            </div>
            {/* nav menu btn - is showing by default -  hidden on desktop mode*/}
            <div onClick={()=>setNavMobile(!navMobile)} className="xl:hidden absolute right-[5%] bg-gray-100 p-2 rounded-md cursor-pointer">
                <TiThMenuOutline className='text-3xl bg-gray-100'/>
            </div>
            {/* nav mobile is showing by default - hidden on desktop */}
            <div className={`${navMobile ? "max-h-full": "max-h-0 overflow-hidden"} ${isActive ? "top-[100px] xl:top-[110px]" : "top-[120px] xl:top-[150px]"} fixed left-0 -z-10 w-full h-full bg-gray-100 transition-all duration-300`}>
                <NavMobile/>
            </div>
            {/* social icons - initially hidden is showing on desktop */}
            <div className="hidden xl:flex">
                <Socials/>
            </div>
        </div>

    </header>
  )
}

export default Header