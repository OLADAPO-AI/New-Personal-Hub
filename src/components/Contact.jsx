import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 '> 

        <h1 className=' text-4xl py-4 font-bold text-center text-[#001b5e]'>Contact</h1>
        <p className=' text-center py-8 text-lg font-normal text-stone-500 '>I'm available for work and open to any ideas of cooperation.</p>
        <form action="https://getform.io/f/35173759-8a19-4080-82ee-cb118158d85e" method='POST' encType='multipart/form-data'>

            <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className=' flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='' name='name'/>
                </div>
                <div className=' flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input  className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='' name='phone'/>
                </div>
            </div>
            <div className=' flex flex-col py-2' >
                <label className='uppercase text-sm py-2'> Email</label>
                <input  className=' border-2 rounded-lg p-3 flex border-gray-300' type="email" placeholder='' name='email'/>
            </div>
            <div className=' flex flex-col py-2' >
                <label className='uppercase text-sm py-2'> Subject</label>
                <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='' name='subject'/>
            </div>
            <div className=' flex flex-col py-2' >
                <label className='uppercase text-sm py-2'>Message</label>
               <textarea className=' border-2 rounded-lg p-3 flex border-gray-300'   name="message"  rows="10"></textarea>
            </div>
            <div className=' flex flex-row justify-center items-center'>
            <button className=' bg-gradient-to-r from-[#001b5e] to-amber-300 mt-4 w-6/12  p-4 rounded-lg text-white font-semibold'> Send Message </button>
            </div>
        </form>
    </div>
  )
}

export default Contact