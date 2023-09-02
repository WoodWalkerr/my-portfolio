

import React from "react";
import { DiGithubAlt } from "../icons/icons";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 py-20">
      <p className="text-center text-black dark:text-white p-10">
          © 2023 Copyright Melven Bagolaque
        </p>
      <p className="text-center text-black dark:text-white text-sm">
        <span className="font-semibold">EN:</span> This website was developed by
        Melven Bagolaque. It cannot and should not be reproduced in any forms or
        by any means without the consent from him.
      </p>
      <p className="text-center text-black dark:text-white text-sm mt-4">
        <span className="font-semibold">FIL:</span> Ang website na ito ay ginawa
        ni Melven Bagolaque. Ito ay hindi maaaring at hindi dapat kopyahin sa
        anumang paraan o sa anumang anyo nang walang pahintulot mula sa kaniya.
      </p>
      <div className=" flex justify-center items-center mt-8">
        <a
          href="https://github.com/WoodWalkerr"
          rel="noreferrer"
          target="_blank"
          className="text-black dark:text-white mr-6 hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <DiGithubAlt
            size={25}
            className="text-black dark:text-white  hover:text-gray-400 transition duration-300 ease-in-out"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
