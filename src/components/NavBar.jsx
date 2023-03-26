import React  from "react";
// import  { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'


const NavBar = () => {
// const [nav, setNav] = useState(false);

  // const links = [
  //   {
  //     id:1,
  //     link:"home",
  //   },
  //   {
  //     id:2,
  //     link:"about",
  //   },
  //   {
  //     id:3,
  //     link:"portfolio",
  //   },
  //   {
  //     id:4,
  //     link:"experience",
  //   },
  //   {
  //     id:5,
  //     link:"contact",
  //   },
  // ];

  return (
    // <div className="flex justify-between items-center w-full h-20 bg-white  px-4 overflow-hidden">
    //     <div>
    //       <h1 className="text-3xl ml-2 text-[#292524] font-medium hover:scale-105 duration-200">
    //         <NavLink to="/" className=' text-5xl font-bold underline'>ad.</NavLink>
    //         </h1>
    //     </div>

    //     <ul className="hidden md:flex">
    //         {/* {links.map(({ id, link }) => (
    //           <li 
    //           key={id} className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200'>
    //           <Link to={link} smooth duration={500}>{link}</Link>
    //           </li>
    //         ))} */}
    //         <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200'>
    //           <NavLink to="/" smooth duration={500}>Home</NavLink>
    //           <hr class="border border-gray-400 rounded" />
    //         </li>
    //         <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200'>
    //           <NavLink to="/portfolio" smooth duration={500}>Portfolio</NavLink>
    //           <hr class="border border-gray-400 rounded" />
    //         </li>
    //         <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200'>
    //           <NavLink to="/experience" smooth duration={500}>Experience</NavLink>
    //           <hr class="border border-gray-400 rounded" />
    //         </li>
    //         <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200'>
    //           <NavLink to="/about" smooth duration={500}>About</NavLink>
    //           <hr class="border border-gray-400 rounded" />
    //         </li>
    //     </ul>

    //     <div
    //     onClick={() => setNav(!nav)}
    //     className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
    //     {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    //   </div>

    //   {nav && (
    //     // <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
    //     //   {links.map(({ id, link }) => (
    //     //     <li
    //     //       key={id}
    //     //       className="px-4 cursor-pointer capitalize py-6 text-4xl">
    //     //       <Link
    //     //         onClick={() => setNav(!nav)}
    //     //         to={link}
    //     //         smooth
    //     //         duration={500}>
    //     //         {link}
    //     //       </Link>
    //     //     </li>
    //     //   ))}
    //     // </ul>
    //     <ul>
    //       <li>
    //         <NavLink to="/" onClick={() => setNav(!nav)} smooth duration={500} >Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/portfolio" onClick={() => setNav(!nav)} smooth duration={500} >Portfolio</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/experience" onClick={() => setNav(!nav)} smooth duration={500} >Experience</NavLink>
    //       </li>
    //     </ul>
    //           )}
    //     </div>
    <nav class="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white bg-opacity-60">
        <h1 className="text-3xl ml-2 font-medium hover:scale-105 duration-200">
            <a href="/" className='text-5xl font-bold underline'>ad.</a>
            </h1>
          <div class="sm:block rounded-full bg-white/90 px-3 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
            <Link to="/" class="relative rounded-lg px-3 cursor-pointer inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ">Home</Link>
            {/* <a class="relative rounded-lg px-3 cursor-pointer inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ">About</a> */}
            <Link to="/portfolio" class="relative rounded-lg px-3 cursor-pointer inline-block py-2 text-sm transition-all delay-150 hover:text-gray-900 ">Projects</Link>
          </div>
        </nav>
  );
};

export default NavBar
