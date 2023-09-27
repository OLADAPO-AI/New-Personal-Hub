import React , {useState} from 'react'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import Links from '../assets/Links'
import {MdPermPhoneMsg , MdDynamicFeed , MdOutlineLunchDining , MdOutlineLocalPhone} from "react-icons/md";
import {  SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import {GiCancel} from "react-icons/gi";

const Sidenav = () => {

    const [nav , setNav] = useState(false)
    const showNav = () => setNav(!nav)

    const navLink = [
        {id : 1 , name : 'Home', link : '#main' ,},
        {id : 2 , name : 'About', link : '#about'},
        {id : 3 , name : 'Projects', link : '#projects'},
        {id : 5 , name : 'Resume', link : '#resume'},
        {id : 4 , name : 'Contact', link : '#contact'},
        
        
    ]

  return (
    <div>
        {nav ? (<GiCancel onClick={showNav}  className=' cursor-pointer text-orange-500 font-semibold  absolute top-4 right-4 z-[99] md:hidden block'/>) : (<AiOutlineMenu onClick={showNav}  className=' cursor-pointer text-orange-500 font-semibold  absolute top-4 right-4 z-[99] md:hidden block'/>)}
        
        {nav ? (
            <div className=' fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden '>
             {navLink.map((link , index) => {
                    
                    return(
                        <a onClick={showNav} href={link.link} className=' w-[75%] justify-center flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200'>
                    
                    <span className=' pl-4'>{link.name}</span>
                   </a>
                    )
                  
                  })}
            </div>
        ) : (
           ""
        )}


        <div  className=' md:block hidden fixed top-[25%] z-10 '>

            <div className=' flex flex-col  '>
              <Links  icon = { <AiOutlineHome />} href={`#main`}/>
              <Links  icon = { < SiAboutdotme />} href={`#about`}/>
              <Links   icon = { <GoProjectSymlink />} href={`#projects`}/>
              <Links   icon = { <MdOutlineLunchDining />} href={`#resume`}/>
              <Links   icon = { <MdOutlineLocalPhone />} href={`#contact`}/>
            </div>
        </div>
    </div>
  )
}

export default Sidenav