import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-sm md:text-xl mt-10 ">
        I obtained a Bachelor’s Degree in Electrical Electronics Engineering from Federal University of Technology Minna.
        I graduated with a Second Class upper grade (4.24 GPA).
         The switch to Software development was a matter of “when” and not “if”. 
         FreecodeCamp has enabled me work on solo projects, 
         learning about different frameworks and tools in the process. 
         VanillaJs, ReactJs, NodeJs, CSS, TailwindCSS, and HTML are some of the technologies I use in software development.
        </p>

        <br />

        <p className="text-sm md:text-xl">
        I am actively seeking opportunities to contribute my knowledge and skills
        to accomplish goals and objectives in the field of Software.
        </p>
      </div>
    </div>
  );
};

export default About;
