import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f5f5f4] p-4 '>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-4'>Submit the form below to get in touch!!!</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/a1bf410e-08d2-4ca2-94d7-d3d50fffa1e7" method="POST" className='flex flex-col w-full md:w-1/2 '>
            <input type="text" 
            name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 
            rounded-md  focus:outline-none '/>

            <input type="text" 
            name="email" placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 
            rounded-md  focus:outline-none '/>

            <textarea name="message" id="" rows="10" placeholder="Enter your message" className='p-2 bg-transparent border-2 rounded-md  focus:outlie-none'></textarea>

            <button className=' bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 
            my-8 mx-auto flex items-center rounded-md
            hover:scale-110 duration-300'>Let's talk</button>
          </form>

        </div>   
      </div>  
    </div>
  )
}

export default Contact