import React from 'react'
import portfolio from "../assets/portfolio/portfolio.png"
import todo from "../assets/portfolio/todo.png"
// import jokegenerator from "../assets/portfolio/jokegenerator.png"
// import lightdarkmode from "../assets/portfolio/lightdarkmode.png"
import devilbutton from "../assets/portfolio/devilbutton.png"
// import digitalclock from "../assets/portfolio/digitalclock.png"
// import employeemanagement from "../assets/portfolio/employeemanagement.png"
import crypton from "../assets/portfolio/crypton.png"
import jobify from "../assets/portfolio/jobify.png"
import staffmate from "../assets/portfolio/staffmate.png"


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        name: "Crypton",
        src: crypton,
        demo: "https://anirban-crypton.netlify.app/",
        code: "https://github.com/sonai99/CryptoN",
      },
      {
        id: 2,
        name: "Jobify",
        src: jobify,
        demo: "https://anirban-jobify.netlify.app/",
        code: "https://github.com/sonai99/Jobify",
      },
        {
        id: 3,
        name: "StaffMate",
        src: staffmate,
        demo:"https://anirban-staffmate.netlify.app/",
        code:"https://github.com/sonai99/staffmate",
      },
      {
        id: 4,
        src: portfolio,
        name: "Portfolio",
        demo:"https://anirban-dutta-portfolio.netlify.app/",
        code:"https://github.com/sonai99/anirban-portfolio",
      },
      {
        id: 5,
        src: todo,
        name: "TO-DO App",
        demo:"https://anirban-todo-app.netlify.app/",
        code:"https://github.com/sonai99/ToDo-List-App",
      },
      // {
      //   id: 6,
      //   src: lightdarkmode,
      //   demo:"https://anirban-light-dark-mode-toggler.netlify.app/",
      //   code:"https://github.com/sonai99/anirban-portfolio",
      // },
      {
        id: 6,
        src: devilbutton,
        name: "The Devil Button",
        demo:"https://anirban-dutta-devil-button.netlify.app/",
        code:"https://github.com/sonai99/Devil-Button-Can-t-touch-it",
      },
//       {
//         id: 6,
//         src: digitalclock,
//         demo:"https://anirban-digital-clock.netlify.app/",
//         code:"https://github.com/sonai99/Digital-Clock-Javascript",
//       },
        
        
    ];
  

    return (
      // <div
      //   name="portfolio"
      //   className="bg-gradient-to-b from-white to-blue-50 w-full  md:h-screen"
      // >
      //   <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      //     <div className="pb-8">
      //       <p className="text-4xl font-bold inline border-b-4 border-gray-500">
      //         Portfolio
      //       </p>
      //       <p className="py-6">Check out some of my work</p>
      //     </div>
  
      //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      //       {portfolios.map((portfolio) => (
      //         <div key={portfolio.id} className="shadow-md shadow-gray-300 rounded-lg">
      //           <img
      //             src={portfolio.src}
      //             alt=""
      //             className="rounded-md duration-200 hover:scale-105"
      //           />
      //           <div className="flex items-center justify-center">
      //           <a href={portfolio.demo} target="_blank" rel="noopener noreferrer"><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-blue-900 hover:scale-105">Demo</button></a>
      //           <a href={portfolio.code} target="_blank" rel="noopener noreferrer"><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-blue-900 hover:scale-105">Code</button></a>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </div>
      // <div class="bg-white ">
      // <main class="flex flex-col justify-center bg-white  text-gray-900  antialiased">
      //   <div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      //     <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black ">Projects</h1>
      //     <h3 class="prose text-gray-600  mb-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab porro quidem vitae? Recusandae quos officiis quidem rem aspernatur sint sed, obcaecati quasi facere ea ab non eius. Minima, dignissimos ea.</h3>
      //     {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      //       { portfolios.map((portfolio) => (
      //         <div key={portfolio.id} class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
      //         <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      //         <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      //         <div class="relative h-full">
      //           <div class=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  
      //             <div>
      //               <h4 class="text-xl font-bold tracking-tight text-gray-900 ">{portfolio.name}</h4>
      //               <p class="leading-6 pt-4 text-gray-700 mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem incidunt nisi quos odit temporibus ipsum illo dolorem dolores similique.</p>
      //               <a href="" class="items-center text-sm my-4 mx-auto mr-4 font-semibold rounded-md font-medium text-gray-900 border px-4 py-2 ">Demo 🔗</a>
      //               <a href="" class="items-center text-sm my-4 mx-auto font-semibold rounded-md font-medium text-gray-900 border px-4 py-2">Code ⭜
      //               </a>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       )) }
      //     </div> */}
      //     <a href="" class="border flex flex-row items-center justify-center mx-auto rounded-md mt-2 px-4 py-2">
      //       See all at 
      //       <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="ml-2" fill="currentColor" stroke="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></span>
      //     </a>
      //   </div>
      // </main>
      // </div>

      <body class="bg-white">
         <div class="bg-white ">
         <main class="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased">
         <div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
         <h1 class="font-bold text-5xl mb-4 md:text-4xl tracking-tight mt-8 text-black ">Projects</h1>
          <div class="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolios.map((portfolio) => (
           <div key={portfolio.id} class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
           <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 "></span>
           <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 "></span>
           <div class="relative h-full">
             <div class=" flex flex-row items-start dark:border-gray-800 rounded p-4 relative">
               <div class="my-4"></div>
               <div>
                 <h4 class="text-xl font-bold tracking-tight text-gray-900 ">{portfolio.name}</h4>
                 <img src={portfolio.src} alt="" class="mb-4"/>
                 <a href="https://anirban-crypton.netlify.app/" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold mr-4 rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2" rel="noreferrer">Demo 🔗</a>
                 <a href="https://github.com/sonai99/CryptoN" target="_blank" class="items-center text-sm my-4 mx-auto font-semibold rounded-md  hover:bg-gray-100 text-gray-900 border px-4 py-2 " rel="noreferrer">Code</a>
               </div>
             </div>
           </div>
         </div>         
            ))}
          </div>
          </div>
          <a href="https://github.com/sonai99" target="_blank" class="border flex flex-row items-center justify-center mx-auto rounded-md mt-2 px-4 py-2" rel="noreferrer">      See all at 
     <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="ml-2" fill="currentColor" stroke="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></span>
   </a>
         </div>
         </main>
         </div>
      </body>
    );
  };
  
  export default Portfolio;

  // <a href="" class="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200  w-full">
  //             <span class="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
  //             <span class="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-700/0 via-blue-700/40 to-blue-700/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
  //             <div class="relative h-full">
  //               <div class=" flex flex-row items-start dark:border-gray-800 rounded p-4 relative">
  //                 <div class="my-4"></div>
  //                 <div>
  //                   <h4 class="text-xl font-bold tracking-tight text-gray-900 ">StaffMate</h4>
  //                   <p class="leading-6 pt-4 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem incidunt nisi quos odit temporibus ipsum illo dolorem dolores similique.</p>
  //                   <a href="" class="items-center text-sm my-4 mx-auto mr-4 rounded-md font-medium text-gray-900">Demo 🔗</a>
  //                   <a href="" class="items-center text-sm my-4 mx-auto  rounded-md font-medium text-gray-900">Code</a>
  //                 </div>
  //               </div>
  //             </div>
  //           </a>