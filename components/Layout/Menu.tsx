"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="flex flex-row items-center justify-between text-white">
      <Image src="/logo.png" alt="logo" width={180} height={40} />
      <ul
        className={`absolute lg:relative top-0 left-0 w-screen lg:w-fit h-screen lg:h-fit flex-col gap-6 lg:flex lg:flex-row lg:items-center lg:gap-5 p-12 z-[999999] lg:p-0 ${
          isMobile ? "flex" : "hidden"
        }`}
      >
        <div className="mx-auto lg:hidden">
          {" "}
          <Image src="/logo.png" alt="logo" width={240} height={40} />
        </div>
        <li className="font-medium text-sm">
          <Link href="#">Ana Sayfa</Link>
        </li>
        <li className="relative group">
          <span className="flex flex-row items-center gap-1 group-hover:text-primary transition duration-200 font-medium text-sm cursor-pointer">
            Kurumsal <MdKeyboardArrowDown />
          </span>
          <ul className="absolute top-4 hidden group-hover:block w-full z-50">
            <div className="mt-4 bg-black rounded-xl shadow-sm shadow-primary pt-2 pb-4">
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative group">
          <span className="flex flex-row items-center gap-1 group-hover:text-primary transition duration-200 font-medium text-sm cursor-pointer">
            Hizmetlerimiz <MdKeyboardArrowDown />
          </span>{" "}
          <ul className="absolute top-4 hidden group-hover:block w-full z-50">
            <div className="mt-4 bg-black rounded-xl shadow-sm shadow-primary pt-2 pb-4">
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
              <li className="px-4 py-1 hover:bg-bg transition duration-200 text-white">
                <Link href="#" className="hover:!text-white">
                  Text
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="font-medium text-sm">
          <Link href="#">İletişim</Link>
        </li>
      </ul>
      <GiHamburgerMenu
        size={24}
        className="lg:hidden"
        onClick={() => {
          setIsMobile(true);
        }}
      />
      <MdClose
        size={36}
        onClick={() => {
          setIsMobile(false);
        }}
        className={`absolute z-[999999] top-24 right-6 lg:hidden ${!isMobile && "hidden"}`}
      />
    </nav>
  );
};

export default Menu;
