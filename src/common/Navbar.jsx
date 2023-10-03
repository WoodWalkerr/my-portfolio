import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Toggle from "../themeTemp/toggle";
import { Link } from "react-scroll";
import { links } from "../data/navbar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleCloseNav = () => {
    if (nav) {
      setNav(false);
    }
  };

  return (
    <div className="fixed flex items-center w-full h-20 px-4 md:px-12 bg-white dark:bg-black text-black dark:text-white z-50">
      <div className="max-w-6xl mx-auto w-full sm:px-4  ">
        <div className="flex justify-between items-center">
          <div className="text-start mr-auto">
            <Link spy={true} smooth={true} duration={500} to="Home">
              <button className="text-2xl ml-3 font-extrabold py-6 text-black dark:text-white bg-clip-text">
                MELVEN.
              </button>
            </Link>
          </div>

          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-3 cursor-pointer font-medium text-black dark:text-white hover:scale-100 dark:hover:text-gray-500 hover:text-gray-500"
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleCloseNav}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? (
              <FaTimes size={20} onClick={() => setNav(!nav)} />
            ) : (
              <FaBars size={20} onClick={() => setNav(!nav)} />
            )}
          </div>

          {nav && (
            <ul className="flex flex-col absolute top-0 left-0 w-full h-screen bg-white dark:bg-black text-black dark:text-white ">
              <div className="text-start mr-auto">
                <span className="text-2xl ml-3 font-extrabold px-4 md:px-12 py-6 text-white dark:text-black bg-clip-text">
                  MELVEN.
                </span>
              </div>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="py-4 text-2xl flex justify-center pt-6 font-medium uppercase tracking-wider hover:text-gray-300"
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseNav}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
