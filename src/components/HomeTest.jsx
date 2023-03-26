import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import cpp from "../assets/cpp.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import linux from "../assets/linux.png";
import python from "../assets/python.png";
import heroImage from "../assets/heroImage.png";
// import anirban from "../assets/anirban.jpeg";
import cv from "../assets/cv.pdf";
import { Link } from 'react-router-dom'




const HomeTest = () => {

  const downloadResume = () => {
    fetch(cv).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Anirban Dutta CV';
                alink.click();
      })
    })
  }

  return (
    <body class="bg-white">
      <div class="bg-white ">
        {/* #-------------------------NAVBAR----------------------# */}
        {/* <nav class="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white bg-opacity-60">
        <h1 className="text-3xl ml-2 font-medium hover:scale-105 duration-200">
            <a href="/" className='text-5xl font-bold underline'>ad.</a>
            </h1>
          <div class="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
            <a class="relative rounded-lg px-3 cursor-pointer inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ">Home</a>
            <a class="relative rounded-lg px-3 cursor-pointer inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ">Projects</a>
            <a class="relative rounded-lg px-3 cursor-pointer inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ">Experience</a>
          </div>
        </nav> */}
        <main class="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased">
        <div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div class="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
            <div class="flex md:w-3/4 flex-col mt-6">
              <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-2  text-black">Anirban Dutta</h1>
              <div class="relative leading-7 items-center flex-wrap text-zinc-700  mb-5 font-semibold">Software Engineer
                <a href="https://www.linkedin.com/in/anirban-dutta-6a2bb317a/" target="_blank" class="inline-block px-2 py-0 font-bold bg-gray-100 rounded-md mx-1" rel="noreferrer">Capgemini</a>
                 | Full Stack Developer 
              </div>
              <p class="text-zinc-600 dark:text-zinc-500 font-body">I am a detail oriented Software Engineer currently working at Capgemini.
              I am a passionate Web Developer [MERN] and a Open Source Contributor & Mentor.<br />
              I like Coding, Lifting weights, Football and music. <br />
              <button onClick={downloadResume} class="border font-semibold hover:bg-gray-50 rounded-md p-1 mt-2 ">Resume →</button>
              </p>
            </div>
            <div class=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
              <a href="https://www.linkedin.com/in/anirban-dutta-6a2bb317a/" class="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20">
                <img src={heroImage} class="transition duration-500  blur-0 scale-100 bg-gray-100 object-contain" alt="personal" />
              </a>
            </div>
            
          </div>


          {/* PROJECTS */}

          <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">Projects</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
           <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <div class="relative h-full">
             <div class=" flex flex-row items-start dark:border-gray-800 rounded p-4 relative">
               <div class="my-4"></div>
               <div>
                 <h4 class="text-xl font-bold tracking-tight text-gray-900 ">CryptoN</h4>
                 <p class="leading-6 pt-4 text-gray-700 mb-3">CryptoN is a all in one crptocurrency marketplace to stay up to date with all your favourite cryptocurrencies to help you #trade_better. View current prices and details of your favourite Coins.</p>
                 <a href="https://anirban-crypton.netlify.app/" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold mr-4 rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2" rel="noreferrer">Demo 🔗</a>
                 <a href="https://github.com/sonai99/CryptoN" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2 " rel="noreferrer">Code</a>
               </div>
             </div>
           </div>
         </div>   
         <div class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
           <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <div class="relative h-full">
             <div class=" flex flex-row items-start dark:border-gray-800 rounded p-4 relative">
               <div class="my-4"></div>
               <div>
                 <h4 class="text-xl font-bold tracking-tight text-gray-900 ">StaffMate</h4>
                 <p class="leading-6 pt-4 text-gray-700 mb-3">StaffMate is a Employee Management Software used for keeping track of all your 
                 Employees.You can Add, Delete and Edit data of your Employee's to keep your organization up to date.</p>
                 <a href="https://anirban-staffmate.netlify.app/" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold mr-4 rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2" rel="noreferrer">Demo 🔗</a>
                 <a href="https://github.com/sonai99/staffmate" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2 " rel="noreferrer">Code</a>
               </div>
             </div>
           </div>
         </div>   
         <div class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
           <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <div class="relative h-full">
             <div class=" flex flex-row items-start dark:border-gray-800 rounded p-4 relative">
               <div class="my-4"></div>
               <div>
                 <h4 class="text-xl font-bold tracking-tight text-gray-900 ">Jobify</h4>
                 <p class="leading-6 pt-4 text-gray-700 mb-3">Jobify is a Job Portal where Candidates can find their dream job from the available Job listings and Organizations can Post Job's and hire form the Best Talen in the country.</p>
                 <a href="https://anirban-jobify.netlify.app/" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold mr-4 rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2" rel="noreferrer">Demo 🔗</a>
                 <a href="https://github.com/sonai99/Jobify" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2 " rel="noreferrer">Code</a>
               </div>
             </div>
           </div>
         </div>   
         <div class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
           <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
           <div class="relative h-full">
             <div class=" flex flex-row items-start dark:border-gray-800 rounded p-4 relative">
               <div class="my-4"></div>
               <div>
                 <h4 class="text-xl font-bold tracking-tight text-gray-900 ">Portfolio</h4>
                 <p class="leading-6 pt-4 text-gray-700 mb-3">A minimal personal portfolio for a myself. A good online presence to provide proof of work to the potential recruiters who might want to hire me. Thanks for visiting.</p>
                 <a href="https://anirban-dutta-portfolio.netlify.app/" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold mr-4 rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2" rel="noreferrer">Demo 🔗</a>
                 <a href="https://github.com/sonai99/anirban-portfolio" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2 " rel="noreferrer">Code</a>
               </div>
             </div>
           </div>
         </div>   
          </div>
          <Link to="/portfolio" type='button' class="border px-4 py-2 flex items-center text-sm my-4 mx-auto hover:bg-gray-100 rounded-md font-medium text-gray-900">See More 
            <svg class="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </Link>



          {/* #------------------------------------SKILLS----------------------------------------# */}


          <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">Skills</h3>
          <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
          <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={reactImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={javascript} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={tailwind} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={cpp} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={html} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={github} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={css} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={linux} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
              <div class="relative h-full">
                <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div>
                  <img src={python} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 w-full my-4"></div>

          {/* #####--------Contact--------##### */}
          <footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
            <p class="flex flex-row text-gray-400">Let's Connect
            <a href="https://www.linkedin.com/in/anirban-dutta-6a2bb317a/" target="_blank" rel="noreferrer"> 
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" class="h-6 w-6 mx-1" alt="" /></a>

            <a href="https://twitter.com/Hustler052199" target="_blank" rel="noreferrer"> 
            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" class="h-6 w-6 mx-1" /></a>

            <a href="https://github.com/sonai99" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" class="h-6 w-6 mx-1" alt="" />
            </a>

            <a href="mailto:anirbandutta428@gmail.com" target="_blank" rel="noreferrer"> 
            <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" class="h-6 w-6 mx-1" /></a>
            
            </p>
          </footer>
        </div>
        </main>
      </div>
    </body>
  )
}

export default HomeTest



