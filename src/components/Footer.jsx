import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FiLink } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
        <footer class="text-center lg:text-left bg-gray-100 text-gray-600 bg-gradient-to-br from-gray-700 via-gray-900 to-black">
  <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
    <div class="mr-12 hidden lg:block">
      <span className='text-white'>Let's Connect</span>
    </div>
    <div class="flex justify-center">
            <a href="https://twitter.com/Hustler052199" target="_blank" rel="noreferrer">
            <span>
                <BsTwitter size={25}  className="mr-6 text-white hover:scale-110 duration-300 cursor-pointer" />
            </span>
            </a>

            <a href="https://github.com/sonai99" target="_blank" rel="noreferrer">
            <span>
                <AiOutlineGithub size={25}  className="mr-6 text-white hover:scale-110 duration-300 cursor-pointer" />
            </span>
            </a>

            <a href="https://www.linkedin.com/in/anirban-dutta-6a2bb317a/" target="_blank" rel="noreferrer">
            <span>
                <GrLinkedinOption size={25}  className="mr-6 text-white hover:scale-110 duration-300 cursor-pointer" />
            </span>
            </a>

            <a href="https://leetcode.com/anirbandutta428/" target="_blank" rel="noreferrer">
            <span>
                <BsCodeSlash size={25}  className="mr-6 text-white hover:scale-110 duration-300 cursor-pointer" />
            </span>
            </a>

            <a href="https://linktr.ee/hustler052199" target="_blank" rel="noreferrer">
            <span>
                <FiLink size={25}  className="mr-6 text-white hover:scale-110 duration-300 cursor-pointer" />
            </span>
            </a>
           
    </div>
  </div>
  
  <div class="text-center bg-gradient-to-b from-black to-gray-800 text-white ">
    <span>©Created by Anirban Dutta</span>
  </div>
</footer>
    </div>
  )
}

export default Footer
