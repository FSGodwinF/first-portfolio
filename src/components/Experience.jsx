import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
  
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
     
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto pt-10 px-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl mt-5 font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-sm md:text-xl">These are the programming languages and frameworks I use.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}
            >
              <img src={src} alt="" className="w-10 mx-auto md:w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
