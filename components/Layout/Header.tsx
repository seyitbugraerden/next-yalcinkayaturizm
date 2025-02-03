import React from "react";
import Menu from "./Menu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-black">
      <div className="text-black">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row items-center justify-between py-3 text-xs">
            <div className="flex flex-row gap-4 items-center">
              <Link href="#" className="flex flex-row items-center gap-1">
                <MdOutlineAlternateEmail size={14} />
                <span>support@support.com</span>
              </Link>
              <Link href="#" className="flex flex-row items-center gap-1">
                <IoCall size={14} />
                <span>+90 555 555 55 55</span>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Link href="#">
                <FaFacebookSquare size={16} />
              </Link>
              <Link href="#">
                <FaSquareXTwitter size={16} />
              </Link>
              <Link href="#">
                <FaLinkedin size={16} />
              </Link>
              <Link href="#">
                <FaSquareYoutube size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto py-4">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
