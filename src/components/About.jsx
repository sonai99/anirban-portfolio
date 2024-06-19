import React from 'react'

const About = () => {
  return (
    // <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    //   <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    //     <div className='pb-8'>
    //       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
    //     </div>
    //     <p className='text-xl mt-20'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum doloribus itaque, odit hic doloremque maiores perspiciatis. Et recusandae quos hic distinctio? Totam accusantium earum culpa? Ratione voluptatibus repellendus sed placeat omnis, asperiores ab reiciendis error ex assumenda velit veritatis dignissimos saepe sequi deserunt eaque vero, ullam corrupti, quae veniam!
    //     </p>
    //     <br />
    //     <p className='text-xl'>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ad unde delectus, omnis quis temporibus quo culpa earum fuga rerum alias tempore nostrum similique consectetur error id dignissimos illum qui officiis! Eveniet, sapiente explicabo maxime ratione eius accusantium voluptates maiores amet in consequatur similique deleniti laboriosam esse aut quibusdam ipsum!
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ad unde delectus, omnis quis temporibus quo culpa earum fuga rerum alias tempore nostrum similique consectetur error id dignissimos illum qui officiis! Eveniet, sapiente explicabo maxime ratione eius accusantium voluptates maiores amet in consequatur similique deleniti laboriosam esse aut quibusdam ipsum!
    //     </p>
    //   </div>
    // </div>
    
    // <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    //   <div className='flex flex-col justify-center items-center w-full h-full'>
    //     <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
    //       <div className='sm:text-right pb-8 pl-8'> 
    //         <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
    //       </div>
          
    //     </div>
    //     <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    //       <div className='sm:text-right text-4xl font-bold'>
    //           <p>Hi. I am Anirban, a passionate Software Engineer from India</p>
    //       </div>
    //       <div>
    //         <p>Currently working @Capgemini ERND (Sept' 21 - Current), worked on the following</p>
    //         <ul className='list-disc'>
    //           <p>
    //           Python Automation using ROBOT framework (Sept' 21 - Feb' 22)
    //           Embedded Systems (Mar' 22 - Current)
    //           </p>
    //           {/* <li>Python Automation using ROBOT framework (Sept' 21 - Feb' 22)</li>
    //           <li>Embedded Systems (Mar' 22 - Current)</li> */}
    //         <p className='text- font-bold text-green-100'>Winner of the Outstanding Contribution in Delivery Team Award (ER&D), 2022 </p>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">About</h1>
        <p class="text-gray-600  mb-4 font-sans">
        I am an experienced Software Developer currently working as a Software Engineer 2 at Cisco. In my current role, I work in Cisco's MDS Fabric switches. 
        My primary responsibilities involve creating and maintaining hardware-facing software solutions. 
        I work extensively with the Linux Kernel and Operating System Internals and C.
        </p>
        <div class="w-full">
          <div class="flex flex-col md:flex-row justify-between">
            <p class="text-xs	 font-semibold md:text-xl w-full text-gray-900 ">SWE 2 @Cisco | 2023 - Current </p>
            <p class="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">Senior Software Engineer @Capgemini | 2021 - 2023</p>
          </div>
          <hr />
          <div class="flex flex-col md:flex-row justify-between mt-2">
            <p class="text-xs	 md:text-xl w-full text-gray-900 ">Software Engineer @Capgemini</p>
            <p class="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">2021 - Current</p>
          </div>
        </div>
    </div>
  )
}
export default About
