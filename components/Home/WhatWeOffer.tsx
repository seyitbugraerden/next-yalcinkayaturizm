"use client";
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import CountUp from "react-countup";
import { IoIosHappy } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-b from-bg to-bg_sec !text-white">
      <SectionTitle
        white
        title="NEDEN BİZİ SEÇMELİSİNİZ ?"
        mainTitle=""
        description=""
      />
      <div className="xl:max-w-6xl max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col justify-center items-center gap-3 bg-[#FAFAFA] p-5 border border-transparent group transition duration-200 cursor-default rounded-xl">
          <div>
            <div className="rounded-full inline-block bg-primary p-3 group-hover:bg-bg_sec transition duration-200">
              <FaStar />
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-1 text-primary">
            <div className="font-semibold  text-4xl">
              <CountUp end={32} duration={5} enableScrollSpy />+
            </div>
            <p className="font-light text-sm text-black/80">Sektörel Deneyim</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-[#FAFAFA] p-5 border border-transparent group transition duration-200 cursor-default rounded-xl">
          <div>
            <div className="rounded-full inline-block bg-primary p-3 group-hover:bg-bg_sec transition duration-200">
              <GiTrophyCup />
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-1 text-primary">
            <div className="font-semibold  text-4xl">
              <CountUp end={8700} duration={5} enableScrollSpy />+
            </div>
            <p className="font-light text-sm text-black/80">
              Başarılı Operasyon
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-[#FAFAFA] p-5 border border-transparent group transition duration-200 cursor-default rounded-xl">
          <div>
            <div className="rounded-full inline-block bg-primary p-3 group-hover:bg-bg_sec transition duration-200">
              <IoIosHappy />
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-1 text-primary">
            <div className="font-semibold  text-4xl">
              <CountUp end={100} duration={5} enableScrollSpy />%
            </div>
            <p className="font-light text-sm text-black/80">
              Müşteri Memnuniyeti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
