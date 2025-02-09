import Banner from "@/components/ui/Banner";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.referans_savunma_sanayi.meta_title,
  description: metadatas.referans_savunma_sanayi.meta_description,
  alternates: { canonical: metadatas.referans_savunma_sanayi.canonical },
};

const page = async () => {
  return (
    <>
      <Banner
        title="Savunma Sanayi"
        imgEl="/alt_sayfalar_slider/referans.webp"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-8xl mx-auto gap-12">
        <Image
          src="/referanslarimiz/savunma/1.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="Roketsan"
        />{" "}
        <Image
          src="/referanslarimiz/savunma/2.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="Aselsan"
        />{" "}
        <Image
          src="/referanslarimiz/savunma/3.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="MKE"
        />
      </section>
    </>
  );
};

export default page;
