import React from 'react'
import portfolio from "../assets/portfolio/portfolio.png"
import todo from "../assets/portfolio/todo.png"
import jokegenerator from "../assets/portfolio/jokegenerator.png"
import lightdarkmode from "../assets/portfolio/lightdarkmode.png"
import devilbutton from "../assets/portfolio/devilbutton.png"


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: portfolio,
        demo: "https://anirban-dutta-portfolio.netlify.app/",
        code: "https://github.com/sonai99/anirban-portfolio",
      },
      {
        id: 2,
        src: todo,
        demo:"https://anirban-todo-app.netlify.app/",
        code:"https://github.com/sonai99/ToDo-List-App",
      },
      {
        id: 3,
        src: jokegenerator,
        demo:"https://anirban-joke-generator.netlify.app/",
        code:"https://github.com/sonai99/Programming-Joke-Generator",
      },
      {
        id: 4,
        src: lightdarkmode,
        demo:"https://anirban-light-dark-mode-toggler.netlify.app/",
        code:"https://github.com/sonai99/Dark-Mode-Toggle",
      },
      {
        id: 5,
        src: devilbutton,
        demo:"https://anirban-dutta-devil-button.netlify.app/",
        code:"https://github.com/sonai99/Devil-Button-Can-t-touch-it",
      },
    ];
  

    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={portfolio.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                <a href={portfolio.demo} target="_blank" rel="noopener noreferrer"><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                <a href={portfolio.code} target="_blank" rel="noopener noreferrer"><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;