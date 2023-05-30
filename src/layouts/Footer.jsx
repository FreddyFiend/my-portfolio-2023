import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-gray-500 dark:bg-gray-800 flex text-white justify-center items-end pt-20 pb-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-3 justify-center">
          <BsTwitter size={24} />
          <BsInstagram size={24} />
          <BsLinkedin size={24} />
        </div>
        <div className="flex gap-3 justify-center pt-4">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className="opacity-30 pt-1">© 2023 Mohsin Abro</div>
      </div>
    </div>
  );
};

export default Footer;
