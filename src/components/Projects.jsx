import React from 'react'
import Projectitem from '../assets/Projectitem'
import background from '../assets/background.jpg'

const Projects = () => {
  return (
    <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className=' text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className=' text-center py-8 text-lg font-normal text-stone-500 '>Here are some of my projects</p>
        <div className=' grid sm:grid-cols-2 gap-12'>
            <Projectitem 
                title='Project 1'
                
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 2'
                
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 3'
               
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 4'
                
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 5'
               
                image={background}
                link='https://github.com'
            />
            <Projectitem 
                title='Project 6'
                
                image={background}
                link='https://github.com'
            />
        </div>
    </div>
  )
}

export default Projects