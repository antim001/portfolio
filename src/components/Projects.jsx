import React from "react";

import demo5 from "../assets/portfolio/demo5.JPG";
import demo3 from "../assets/portfolio/demo3.JPG";
import demo2 from "../assets/portfolio/demo2.JPG";
import demo4 from "../assets/portfolio/demo4.JPG";
import demo6 from "../assets/portfolio/demo6.JPG";
import demo1 from '../assets/portfolio/demo1.JPG'
import { Link } from 'react-scroll';


const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: demo1,
      demoLink: "https://bistro-foodie.vercel.app",
      codeLink: "https://github.com/antim001/Restaurent-website"
    },
    {
      id: 2,
      src: demo2,
      demoLink: "https://netflix-antim.vercel.app/",
      codeLink: "https://github.com/antim001/Netflix2.0"
    },
    {
      id: 3,
      src: demo3,
      demoLink: "https://net-newspaper.netlify.app/",
      codeLink: "https://github.com/antim001/e-newspaper"
    },
    {
      id: 4,
      src: demo4,
      demoLink: "https://fruit-shop-antim.netlify.app/",
      codeLink: "https://github.com/antim001/fruit-website"
    },
    {
      id: 5,
      src: demo5,
      demoLink: "https://react-world-tour-antim.netlify.app/",
      codeLink: "https://github.com/antim001/react-world-tour"

    },
    {
      id: 6,
      src: demo6,
      demoLink: "https://rock-paper-scissor-game-js-antim.netlify.app/",
      codeLink: "https://github.com/antim001/rock-paper-scissor-game-js"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:mt-40 lg:mt-52">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
         Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demoLink,codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center">
              {demoLink && (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>)}
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
