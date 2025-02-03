"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex flex-row items-center justify-between">
      <Image src="https://picsum.photos/180/40" alt="logo" width={180} height={40} />
      <ul className="flex lg:flex-row lg:items-center lg:gap-5">
        <li>Ana Sayfa</li>
        <li className="relative group">
          <span className="flex flex-row items-center gap-1">
            Kurumsal <MdKeyboardArrowDown />
          </span>
          <ul className="absolute top-4 pt-4 hidden group-hover:block">
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
          </ul>
        </li>
        <li className="relative group">
          <span className="flex flex-row items-center gap-1">
            Hizmetlerimiz <MdKeyboardArrowDown />
          </span>{" "}
          <ul className="absolute top-4 pt-4 hidden group-hover:block">
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
          </ul>
        </li>
        <li>İletişim</li>
      </ul>
    </nav>
  );
};

export default Menu;
