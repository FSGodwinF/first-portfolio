import React from "react";
import randomQuoteMachine from "../assets/portfolio/randomQuoteMachine.png";
import Pomodoro from "../assets/portfolio/pomodoro.png";
import Admin from "../assets/portfolio/admin-dashboard.png";
import RecipeApp from "../assets/portfolio/recipe-app.png";
import Faderia from "../assets/portfolio/faderia.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: randomQuoteMachine,
      href: "https://codepen.io/F_GEE/full/MWQLPZY",
      href2: "https://codepen.io/F_GEE/pen/MWQLPZY"
    },
    {
      id: 2,
      src: Pomodoro,
      href: "https://codepen.io/F_GEE/full/NWYabLY",
      href2: "https://codepen.io/F_GEE/full/NWYabLY",
    },
    {
      id: 3,
      src: RecipeApp,
      href:"https://github.com/FSGodwinF/Search-your-recipe-app",
      href2:"https://github.com/FSGodwinF/Search-your-recipe-app",
    },
    {
      id: 4,
      src: Admin,
      href:"https://github.com/FSGodwinF/Admin-dashboard",
      href2:"https://github.com/FSGodwinF/Admin-dashboard",
    },
    {
      id: 5,
      src: Faderia,
      href:"https://github.com/FSGodwinF/Social-Media-prot",
      href2:"https://github.com/FSGodwinF/Social-Media-prot",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-sm md:text-xl">These are some of the projects I have worked on,
           you can see find more on my <a className="text-teal-500" href="https://codepen.io/F_GEE" target="_blank" rel="noreferrer">Codepen </a>
            and <a className="text-teal-500" href="https://github.com/fsGodwinF" target="_blank" rel="noreferrer">Github</a></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-150"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={href2} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
