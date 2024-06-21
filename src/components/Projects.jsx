import React, { useEffect } from "react";
import Toggle from "../themeTemp/toggle";
import { IoIosArrowBack } from "../icons/icons";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/featuredProjects";
import { DiGithubAlt } from "../icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-6xl h-screen mx-auto p-4 py-20 sm:px-5 overflow-auto">
      <div className="max-w-6xl mx-auto p-5 pb-20">
        <div className=" flex justify-between items-center mb-10">
          <button
            onClick={() => navigate("/")}
            className="text-white px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110"
          >
            <IoIosArrowBack />
          </button>
          <span>
            <Toggle />
          </span>
        </div>
        <div className="max-w-6xl h-screen mx-auto p-4 py-20 sm:px-5 overflow-auto">
          <h2
            className="text-4xl md:text-4xl font-medium text-gray-300 dark:text-white pb-4 mb-2 md:mb-16 text-center md:text-left md:pb-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Projects
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-start items-start dark:bg-gray-800 bg p-8 max-w-5xl rounded-lg shadow-md"
              >
                <div className="w-full sm:w-auto sm:flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-lg h-auto object-cover rounded-lg mr-0 sm:mr-8"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-8">
                  <h3 className="text-2xl text-black dark:text-white font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black dark:text-white text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    {project.techStack.map((stack, stackIndex) => (
                      <div
                        key={stackIndex}
                        className="rounded-full px-2 py-1 mt-2 mx-1 bg-gray-800 dark:bg-white inline-block text-white dark:text-black font-medium"
                      >
                        <p className="text-xs">{stack}</p>
                      </div>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-gray-700 text-lg"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <DiGithubAlt
                        size={30}
                        className="text-white dark:text-black bg-gray-800 dark:bg-white rounded-full mt-5 hover:text-gray-400 transition duration-300 ease-in-out"
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
