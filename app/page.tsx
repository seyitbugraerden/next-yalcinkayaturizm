import HomeServices from "@/components/Home/HomeServices";
import ImageFixed from "@/components/Home/ImageFixed";
import Referance from "@/components/Home/Referance";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoAreWe from "@/components/Home/WhoAreWe";
import SwiperElement from "@/components/ui/SwiperElement";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: metadatas.home.meta_title,
  description: metadatas.home.meta_description,
  alternates: { canonical: metadatas.home.canonical },
};

export default function Home() {
  return (
    <>
      <SwiperElement />
      <div className="nax-w-8xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 pt-6">
        <Image
          src="/slider/logo1.png"
          alt="TURSAB"
          width={200}
          height={60}
          className="object-contain  "
        />
        <Image
          src="/slider/logo2.png"
          alt="TURSAB"
          width={100}
          height={60}
          className="object-contain"
        />
        <Image
          src="/slider/logo3.png"
          alt="TURSAB"
          width={100}
          height={60}
          className="object-contain"
        />
      </div>
      <WhoAreWe />
      <ImageFixed />
      <HomeServices />
      <WhatWeOffer />
      <Referance />
    </>
  );
}
