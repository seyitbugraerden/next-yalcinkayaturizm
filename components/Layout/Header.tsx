import React from "react";
import Menu from "./Menu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-black/80 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between py-2 text-xs">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row items-center gap-1">
              <MdOutlineAlternateEmail size={14} />
              <span>support@support.com</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <IoCall size={14} />
              <span>+90 555 555 55 55</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaFacebookSquare size={16} />
            <FaSquareXTwitter size={16} />
            <FaLinkedin size={16} />
            <FaSquareYoutube size={16} />
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
