import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { certificateData } from '../data/certificates'

  function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
  
    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <div className="bg-white dark:bg-black text-black dark:text-white" name="Certificates">
        <div className="max-w-6xl mx-auto p-4 py-20 sm:px-5">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
            Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificateData.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={certificate.delay}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {certificate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{selectedCertificate.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedCertificate.description}
              </p>
              <button
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setSelectedCertificate(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

export default Certificates;