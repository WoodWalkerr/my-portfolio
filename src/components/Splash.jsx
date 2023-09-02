import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { codeObject } from "../data/codingList";
import { FaLinkedinIn, DiGithubAlt, AiFillInstagram } from "../icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Splash = () => {
  const [selectedCode, setSelectedCode] = useState("python");
  const navigate = useNavigate()

  const handleClick = (code) => {
    setSelectedCode(code);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="h-screen w-full max-w-6xl mx-auto p-5 py-20"
      id="Home"
    >
      <div className="container mx-auto flex flex-col md:flex-row py-20 md:py-20 px-4 md:px-8 items-center"
           data-aos="fade-down"
           data-aos-delay="200"
      >
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-3xl font-light mb-4 md:mb-5 tracking-tight text-center md:text-left sm:text-3xl">
           Hi, Im Melven. <br />
            <span className="text-black dark:text-white font-bold text-5xl md:text-4xl lg:text-6xl">
              Lets create something amazing!
            </span>
          </h1>
          <div className="flex justify-center md:justify-start mt-4">
            <button
            onClick={() => navigate('/projects')}
              className="text-white px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110"
            >
              View My Projects
              <span className="group-hover:rotate-90 duration-300 ml-2"></span>
            </button>
          </div>
          <div className="flex justify-center items-center md:justify-start mt-4">
            <a
              href="https://www.facebook.com/melven.bagolaque"
              rel="noreferrer"
              target="_blank"
              className="mr-6"
            >
              <FaLinkedinIn size={18} className=" text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://github.com/WoodWalkerr"
              rel="noreferrer"
              target="_blank"
              className="mr-6"
            >
              <DiGithubAlt size={25} className="text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/melven.bagolaque"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram size={20} className="text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:items-start md:mt-6 md:ml-6 w-full md:w-auto">
          <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-md p-4 md:p-6 lg:p-8 w-full hidden md:block">
            <pre>
              {codeObject[selectedCode].map((line, index) => (
                <code className="block" key={index}>
                  {index + 1} {line}
                </code>
              ))}
            </pre>
          </div>

          <div className="mb-4 hidden md:block">
            <div className="flex col">
              <button
                className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 hover:transition-all hover:ease-in-out hover:scale-110 ${
                  selectedCode === "python"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
                onClick={() => handleClick("python")}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript Logo"
                  className="w-10 h-10 rounded-lg"
                />
              </button>
              <button
                className={`flex items-center justify-center w-12 h-12 rounded-lg hover:transition-all hover:ease-in-out hover:scale-110 ${
                  selectedCode === "js"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
                onClick={() => handleClick("js")}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python Logo"
                  className="w-10 h-10 rounded-lg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
