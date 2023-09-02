import React, {useEffect} from "react";
import { skills } from "../data/skills";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white"
      name="Expertise"
    >
      <div className="max-w-6xl mx-auto p-4 py-20 sm:px-5"
         data-aos="fade-up"
         data-aos-delay="300"
      >
        <h1 className="text-3xl md:text-4xl text-center md:text-center font-extrabold text-black dark:text-white">
          My Tech Stacks
          <p className="text-lg font-light">Technology stacks that I am currently working on.</p>

        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 mt-6 md:mt-8"
        >
          
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 h-40 w-40 mx-auto my-4 md:mx-2 md:my-6 px-2 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:scale-110"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {skill.img && (
                <img
                  src={skill.img}
                  alt={skill.skill}
                  className="w-24 h-24 md:w-20 md:h-20 mb-3 md:mb-4"
                />
              )}
              {skill.icon && (
                <div className="text-3xl md:text-4xl">{skill.icon}</div>
              )}
              <div className="text-dark dark:text-white">{skill.skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
