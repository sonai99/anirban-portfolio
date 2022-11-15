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

const Experience = () => {

    const array = [
        {
          id: 1,
          src: html,
          title: "HTML",
          shadow: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          shadow: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          shadow: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          shadow: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          shadow: "shadow-sky-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          shadow: "shadow-gray-400",
        },
        {
            id: 9,
            src: cpp,
            title: "C++",
            shadow: "shadow-sky-400",
          },
          {
            id: 10,
            src: linux,
            title: "LINUX",
            shadow: "shadow-gray-400",
          },
          {
            id: 11,
            src: python,
            title: "PYTHON",
            shadow: "shadow-yellow-400",
          },
      ];

  return (
    <div name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full pt-6 h-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-pink-600 p-2 inline '>Experience</p>
                <p className='py-6'>//These are the technologies i have worked on</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {array.map(({id, src, title, shadow}) => (
                        <div key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${shadow}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                        </div>
                    )
                    )
                }
        </div>
        </div>
    </div>
  )
}
export default Experience