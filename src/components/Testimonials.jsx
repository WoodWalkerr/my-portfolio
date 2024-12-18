import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          What My Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="relative mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-24 h-24 rounded-full border-4 border-indigo-500 dark:border-indigo-300 object-cover mx-auto"
                />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-6 italic">
                {testimonial.quote}
              </p>
              <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 text-center">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
