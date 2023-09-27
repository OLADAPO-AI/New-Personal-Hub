import React from 'react'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'

const Links = ({icon , href}) => {
  return (
    <a href={href} className=' rounded-full text-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-300 '> {icon}</a>
  )
}




export default Links