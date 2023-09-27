import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import background from '../assets/background.jpg'
import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa' 
const Main = () => {
  return (
    <div id='main'>
    
      <img src={background } className=' w-full h-screen object-cover ' alt="" />
      <div className=' w-full h-screen absolute top-0 left-0 bg-white/10'>
        <div className=' max-w-[800px] m-auto h-full w-full flex flex-col justify-center items-center'>
            <h1 className=' sm:text-4xl text-2xl font-bold text-gray-200 py-3 '>Oladapo Digital Realm!</h1>
            <h2 className=' flex sm:text-xl text-lg py-4 text-amber-300 '>I'm a frontend scorcerer </h2>
            <h3 className=' flex sm:text-2xl text-lg  text-gray-200 font-bold'>
            <TypeAnimation
         sequence={[
        // Same substring at the start will only be typed out once, initially
        'crafting enchanting user experiences',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'crafting innovative frontend solutions',
        2000,
        'crafting intuitive web applications',
        2000,
         ]}
         wrapper="div"
         speed={50}
         style={{ fontSize: '1em', display: 'inline-block' , paddingLeft : '5px' }}
         repeat={Infinity}
       />
   
            </h3>    
        
        
          <div className=' flex justify-between pt-6 max-w-[200px] w-full text-gray-200 cursor-pointer'>
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main