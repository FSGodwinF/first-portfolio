import React from "react";
import portfolioImage from "../assets/port.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-20 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My name is Godwin Faden. I am a Front-end developer.
          </h2>
          <p className="text-gray-500 py-4 text-sm md:text-xl max-w-md">
            I got into software development through 
            <a className="text-teal-500" href="freecodecamp.org/fcc14b07d66-5f35-4448-affb-c7729c56ce58" target="_blank"> freeCodeCamp's </a> 
            bootcamp, where I developed skills and certifications in 
            <a className="text-teal-500" href="https://www.freecodecamp.org/certification/fcc14b07d66-5f35-4448-affb-c7729c56ce58/responsive-web-design" rel="noreferrer" target="_blank"> Responsive Web Design</a>, 
            <a className="text-teal-500" href="https://www.freecodecamp.org/certification/fcc14b07d66-5f35-4448-affb-c7729c56ce58/javascript-algorithms-and-data-structures" rel="noreferrer" target="_blank"> JavaScript Algorithms</a>
            ,<a className="text-teal-500" href="https://www.freecodecamp.org/certification/fcc14b07d66-5f35-4448-affb-c7729c56ce58/front-end-development-libraries" rel="noreferrer" target="_blank"> Front-end Development Libraries</a>,  
            and <a className="text-teal-500" href="https://www.freecodecamp.org/certification/fcc14b07d66-5f35-4448-affb-c7729c56ce58/data-visualization" rel="noreferrer" target="_blank"> Data visualization</a>.
            I am seeking opportunities to develop and shape the future of software.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-700 to-blue-700 cursor-pointer"
            >
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={portfolioImage}
            alt="portolio headshot"
            className="rounded-2xl mx-auto w-1/3 invisible object-cover md:visible md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
