import React from "react";
// import HeroImage from "../assets/heroImage.png";
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
      className="h-screen w-full bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold font-sans">
            Hi, I'm Anirban Dutta 👨‍💻

          </h2>
          <p className=" py-4 max-w-full ">
          A very detail oriented Software Developer currently working @Capgemini as a Software Engineer from 
          Sept '21. 
          <br />
          <h3 className="text-xl font-bold my-3  "><mark class="px-2 bg-slate-700 text-white">Projects i have worked on </mark></h3>
          <ul>
            <h4 className="font-bold">C++  Developer (March' 22 - Current)</h4>
            <p className="font-bold underline text-[#134e4a]">Key responsibilities - </p>
            <li class="font-sans-serif">- Working closely on designing and implementing new features on the product.</li>
            <li>- Deep analysis of logs to Debug and write production ready code to fix field issues on the product to assure smooth release in every iteration of the software release. </li>
            <li>- Maintain and upgrade local test beds using the management channel.</li>
            <li>- Onboard new team members and giving KT sessions to get them familiar with the product.</li>
            </ul>
            <ul>
            <h4 className="font-bold">Python Automation using ROBOT framework (Sept' 21 - Feb' 22)</h4>
            <p className="font-bold text-[#134e4a] underline">Key responsibilities - </p>
            <li>- Responsible for converting the pre existing test scripts of the product to the customers new product</li>
            <li>- Worked closely in writing/ debugging/ fixing automation scripts to make the test cases pass.</li>
            </ul>
          </p>
          

          <div>
            
            {/* <Link
              to="about"
              smooth
              duration={500}
              className="hover:scale-110 duration-300 group  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >Resume
            <span>
                <FaCloudDownloadAlt size={25}  className="ml-1" />
              </span>
            </Link> */}

            <button onClick={downloadResume} className="hover:scale-110 duration-300 group  w-fit px-6 py-3 
            my-2 flex items-center rounded-md bg-[#2563eb] text-white cursor-pointer">
            Resume
            <span>
                <FaCloudDownloadAlt size={25}  className="ml-1" />
              </span>
            </button>
            
            

          </div>
        </div>

        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div> */}

        
      </div>
    </div>
  );
};

export default Home;
