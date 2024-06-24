import React, { useEffect } from "react";
import img from "../assets/images/profile.jpg";
import { FaLinkedinIn, DiGithubAlt, AiFillInstagram } from "../icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-5 py-20 overflow-hidden" name="About">
      <div className="flex flex-col">

      <div className="md:flex md:flex-row-reverse items-center mt-4 sm:mt-10 space-y-8 md:space-y-0">
        <div className="md:w-1/3" data-aos="fade-left" data-aos-delay="200">
          <img
            src={img}
            alt="Profile"
            className="rounded-full w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 object-cover object-center mx-auto md:mx-0 border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 mb-4 md:mb-0 md:ml-0"
          />
        </div>

        <div
          className="md:flex-1 sm:mb-0 space-y-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-4xl font-medium text-gray-300 dark:text-white pb-4 mb-2 md:mb-16 md:text-left md:pb-0">
              About
            </h1>
            <span className="text-black dark:text-white text-md md:text-3xl">
              Hi, Im
            </span>
            <div className="text-cyan-500 text-4xl font-bold justify-center">
              Melven Bagolaque
            </div>
            <div className="font-light text-black dark:text-white">
              Im a highly enthusiastic and eager to learn person who loves taking
              on new challenges and pushing my limits. I enjoy learning new
              skills and sharing my knowledge with others. I believe that being
              a jack of all trades and master of none is always better than
              being a master of one.
            </div>
            <div className="flex justify-center md:justify-start mt-4">
              <button className="text-white px-6 py-1 mt-1 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110">
                <a
                  href="/Melven Bagolaque-CV.pdf"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white font-semibold"
                >
                  View My CV
                </a>
              </button>
            </div>
            <div className="flex justify-center items-center md:justify-start mt-4">
              <a
                href="https://www.facebook.com/melven.bagolaque"
                rel="noreferrer"
                target="_blank"
                className="mr-6"
              >
                <FaLinkedinIn
                  size={18}
                  className=" text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out"
                />
              </a>
              <a
                href="https://github.com/WoodWalkerr"
                rel="noreferrer"
                target="_blank"
                className="mr-6"
              >
                <DiGithubAlt
                  size={25}
                  className="text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out"
                />
              </a>
              <a
                href="https://www.instagram.com/melven.bagolaque"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillInstagram
                  size={20}
                  className="text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
