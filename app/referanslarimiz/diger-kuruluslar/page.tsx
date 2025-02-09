import Banner from "@/components/ui/Banner";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.referans_diger_kuruluslar.meta_title,
  description: metadatas.referans_diger_kuruluslar.meta_description,
  alternates: { canonical: metadatas.referans_diger_kuruluslar.canonical },
};

const page = async () => {
  return (
    <>
      <Banner
        title="Diğer Kuruluşlar"
        imgEl="/alt_sayfalar_slider/referans.webp"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-8xl mx-auto gap-12">
        <Image
          src="/referanslarimiz/diger/9.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
        />
        <Image
          src="/referanslarimiz/diger/10.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
        />
        <Image
          src="/referanslarimiz/diger/11.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
        />
      </section>
    </>
  );
};

export default page;
