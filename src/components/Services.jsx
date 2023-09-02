import React, { useEffect } from "react";
import { FaPaintRoller, FaDatabase } from "../icons/icons";
import fGIF from "../assets/images/frontend.gif";
import bGIT from "../assets/images/backend.gif";
import dtGIF from "../assets/images/database.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSkills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-5 py-20" name="Services">
      <h2
        className="text-4xl md:text-4xl font-medium text-gray-300 dark:text-white pb-4 mb-12 md:mb-16 text-center md:text-left md:pb-0"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        What do I do?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="flex flex-col justify-center items-start"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="flex flex-col items-start justify-start pl-5 md:pl-0 font-light">
            <h1
              className="flex justify-center items-center text-xl md:text-2xl font-bold text-black dark:text-white relative"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <FaPaintRoller
                size={18}
                className="text-black mr-2 dark:text-white hover:text-gray-400 transition duration-300 ease-in-out"
              />
              <span>Web Designing</span>
            </h1>
            <p className="text-black dark:text-white">
              I can do static modern website designs using HTML, CSS,
              JavaScript, and especially React Js and Tailwind CSS.
            </p>
            <div
              id="tooltip-animation-1"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>

        <div
          className="p-4 flex justify-center items-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="aspect-w-3 aspect-h-2 w-full max-w-xs md:max-w-full">
            <img
              src={fGIF}
              alt="GIF"
              className="object-cover rounded-lg hover:scale-105 shadow-lg shadow-offset shadow-r-lg transform transition duration-300"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="p-4 pl-0 sm:pl-10 flex flex-col justify-center items-start md:order-last"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-start justify-start pl-5 md:pl-0 font-light">
            <h1 className="flex justify-center items-center text-xl md:text-2xl font-bold text-black dark:text-white relative">

              <h1 className="text-lg mr-2 font-extrabold text-black dark:text-white">
                &lt;/&gt;
              </h1>
              Back-end Programming
            </h1>
            <p className="text-black dark:text-white">
              I can do web pages dynamically using Node Js and Express.
            </p>
          </div>
        </div>
        <div
          className="p-4 flex justify-center items-start md:order-first"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="aspect-w-3 aspect-h-2 w-full max-w-xs md:max-w-full">
            <img
              src={bGIT}
              alt="GIF"
              className="object-cover rounded-lg hover:scale-105 shadow-lg shadow-offset shadow-r-lg transform transition duration-300"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="flex flex-col justify-center items-start"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-start justify-start pl-5 md:pl-0 font-light">
            <h1 className="flex justify-center items-center text-xl md:text-2xl font-bold text-black dark:text-white">
              <FaDatabase
                size={18}
                className="text-black dark:text-white mr-2 hover:text-gray-400 transition duration-300 ease-in-out"
              />
              Database Management
            </h1>
            <p className="text-black dark:text-white">
              I can do database management using PostgreSQL.
            </p>
          </div>
        </div>

        <div
          className="p-4 flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="aspect-w-3 aspect-h-2 w-full max-w-xs md:max-w-full">
            <img
              src={dtGIF}
              alt="GIF"
              className="object-cover rounded-lg hover:scale-105 shadow-lg shadow-offset shadow-r-lg transform transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
