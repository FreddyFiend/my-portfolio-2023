import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-gray-500 dark:bg-gray-800 flex text-white justify-center items-end pt-20 pb-4">
      <div className="flex flex-col justify-center items-center">
        <p class="pb-2">Contact</p>
        <div className="flex gap-3 justify-center">
          {/* <a href="https://twitter.com/mohsinabro666">
            <BsTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/unholyfiend">
            <BsInstagram size={24} />
          </a> */}
          <a href="https://www.linkedin.com/in/mohsin-raza-a93798184/">
            <BsLinkedin size={24} />
          </a>
        </div>
        <div className="flex gap-3 justify-center pt-4">
          <p>MohsinRazaAbro@gmail.com</p>
        </div>
        <div className="opacity-30 pt-1">© 2023 Mohsin Raza</div>
      </div>
    </div>
  );
};

export default Footer;
