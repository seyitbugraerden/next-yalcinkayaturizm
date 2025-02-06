"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Banner = ({ title }: bannerTypes) => {
  const pathname = usePathname();
  console.log(pathname.split("/"));
  return (
    <div className="relative flex flex-col justify-center items-center h-[400px]">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Banner Logo"
        fill
        className="absolute top-0 left-0 brightness-75 w-full h-full -z-50"
      />
      <h1 className="text-6xl text-white">{title}</h1>
      <div className="flex flex-row gap-4 items-center text-white/70 mt-6 text-xl">
        <Link href="/">Ana Sayfa</Link>
        <SlArrowRight size={12} />
        {pathname.split("/").length > 2 ? (
          <>
            <span className="cursor-default">
              {pathname.split("/")[1].charAt(0).toUpperCase()}
              {pathname.split("/")[1].slice(1)}
            </span>
            <SlArrowRight size={12} />
            <span className="cursor-default">
              {pathname.split("/")[2].charAt(0).toUpperCase()}
              {pathname.split("/")[2].slice(1)}
            </span>
          </>
        ) : (
          <span className="cursor-default">
            {pathname.charAt(1).toUpperCase()}
            {pathname.slice(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default Banner;
