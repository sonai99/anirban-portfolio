import React  from "react";
// import  { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
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
