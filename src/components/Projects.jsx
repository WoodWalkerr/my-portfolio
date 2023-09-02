import React from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import Toggle from "../themeTemp/toggle";
import { IoIosArrowBack } from '../icons/icons'
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate()

  return (
    <div className="w-full text-black  dark:text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto p-5 pb-20">
        <div className=" flex justify-between items-center mb-10">
        <button onClick={() => navigate('/')} className="text-white px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110">
            <IoIosArrowBack />
          </button>
          <span>
            <Toggle />
          </span>
        </div>
        <div className="text-6xl md:text-6xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
          Projects
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((proj) => (
            <Link to={proj.path} target="_blank" key={proj.title}>
              <div className="bg-gray-300 dark:bg-gray-800  p-6 max-w-sm mx-auto rounded-xl shadow-lg space-x-4">
                <div className="h-[350px] md:h-[250px] overflow-hidden border-b relative">
                  <img
                    alt=""
                    src={proj.img}
                    className="w-full rounded-md absolute left-0 my-auto transition-all duration-300 ease-in-out transform hover:scale-90"
                  ></img>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="text-white dark:text-white px-6 py-3 font-semibold rounded-md bg-gray-600 dark:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110">
                    {proj.title}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
