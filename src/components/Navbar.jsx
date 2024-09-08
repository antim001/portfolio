import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50 ">
      <div>
        <h1 className="text-5xl font-signature ml-2">Antim</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu (Slide from the left) */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-start p-8 space-y-8">
          {links.map(({ id, link }) => (
            <li key={id} className="text-4xl capitalize">
              <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
