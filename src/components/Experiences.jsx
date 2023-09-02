import React, { useEffect } from "react";
import { experiences } from "../data/experience";
import AOS from "aos";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-5 py-20" name="Experiences">
      <p
        className="text-4xl md:text-5xl font-medium text-center md:text-left mb-5 text-gray-300"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Experiences
      </p>
      <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="300">
        <div className="flex flex-wrap gap-6">
          {experiences.map((experience, index) => (
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between"
              key={index}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {experience.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
