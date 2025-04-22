import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/featuredProjects";
import { IoMdGlobe, DiGithubAlt } from "../icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl h-screen mx-auto p-4 py-20 sm:px-5 overflow-auto">
      <h2
        className="text-4xl md:text-4xl font-medium text-gray-300 dark:text-white pb-4 mb-2 md:mb-16 text-center md:text-left md:pb-0"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Featured Projects
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex flex-col sm:flex-row justify-start items-start dark:bg-gray-800 bg p-8 max-w-5xl rounded-lg shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300">
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
                <div className="mt-5">
                  {project.techStack.includes("Wix") ||
                  project.techStack.includes("Namesco") ||
                  project.techStack.includes("Squarespace") ? (
                    <IoMdGlobe
                      size={30}
                      className="text-white dark:text-black bg-gray-800 dark:bg-white rounded-full hover:text-gray-400 transition duration-300 ease-in-out"
                    />
                  ) : (
                    <DiGithubAlt
                      size={30}
                      className="text-white dark:text-black bg-gray-800 dark:bg-white rounded-full hover:text-gray-400 transition duration-300 ease-in-out"
                    />
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center md:justify-start mt-4">
        <button
          onClick={() => navigate("/projects")}
          className="text-white px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110"
        >
          View All Projects
          <span className="group-hover:rotate-90 duration-300 ml-2"></span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
