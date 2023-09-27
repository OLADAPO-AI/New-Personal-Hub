import React from 'react'

const Workitem = ({year,title, duration, Role1, Role2, Role3, Role4, Role5}) => {
  return (
    <ol className=' flex flex-col md:flex-row relative border-l border-stone-200 '>

        <li className=' mb-10 ml-4 '>
            <div className=' absolute w-3 h-3 bg-amber-300 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className=' inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md '>{year}</span>
                <span className=' text-lg font-semibold text-[#001b5e]'>{title}</span>
                <span className=' my-1 text-sm font-normal leading-none text-stone-400 '>{duration}</span>
            </p>

            <div className=' flex flex-col gap-3 my-2 text-base font-normal text-stone-500 '>
               <p>{Role1}</p>
               <p>{Role2}</p>
               <p>{Role3}</p>
               <p>{Role4}</p>
               <p>{Role5}</p>
            </div>
        </li>
    </ol>
  )
}

export default Workitem