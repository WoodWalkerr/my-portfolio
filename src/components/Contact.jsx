import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const SERVICE_ID = 'service_hv6vsm6'
  const TEMP_ID = 'template_pyd2l1k'
  const PUBLIC_KEY = '475dUTU2teTf8fxII'


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMP_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        toast.success("Your message has been sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        toast.error("An error occurred while sending the message.");
      }
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 py-20 text-black dark:text-white" name="Contact">
      <div
        className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 lg:max-w-2xl max-w-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="text-3xl font-bold mb-10 text-center">
            Lets Work Together
          </h1>
          <label
            htmlFor="user_name"
            className="block text-md font-medium text-gray-800 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="border-gray-300 text-gray-900 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 block w-full sm:text-sm border mt-2"
          />

          <label
            htmlFor="user_email"
            className="block text-md font-medium text-gray-800 dark:text-gray-300 mb-2 mt-6"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="border-gray-300 text-gray-900  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 block w-full sm:text-sm border"
          />

          <label
            htmlFor="message"
            className="block text-md font-medium text-gray-800 dark:text-gray-300 mb-2 mt-6"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border-gray-300 text-gray-900  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 block w-full sm:text-sm border"
            rows="5"
          />

          <input
            type="submit"
            value="Send"
            className="inline-flex justify-center py-1 px-5 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:transition-all hover:ease-in-out hover:scale-110 mt-6"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;