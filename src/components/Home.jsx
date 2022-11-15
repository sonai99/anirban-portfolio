import React from "react";
import HeroImage from "../assets/heroImage.png";
// import Html from "../assets/html.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import { Link } from "react-scroll";
import cv from "../assets/cv.pdf";

const Home = () => {

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
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi, I'm Anirban Dutta 👨‍💻

          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am a very detail oriented Software Developer currently working @Capgemini as a software developer from 
          Sept '21. Currently i am a part of a Agile DevOps team, working on Embedded Systems to support the customers in every iteration of the software release. 
          </p>
          

          <div>
            
            {/* <Link
              to="about"
              smooth
              duration={500}
              className="hover:scale-110 duration-300 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >Resume
            <span>
                <FaCloudDownloadAlt size={25}  className="ml-1" />
              </span>
            </Link> */}

            <button onClick={downloadResume} className="hover:scale-110 duration-300 group text-white w-fit px-6 py-3 
            my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Resume
            <span>
                <FaCloudDownloadAlt size={25}  className="ml-1" />
              </span>
            </button>
            
            

          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
