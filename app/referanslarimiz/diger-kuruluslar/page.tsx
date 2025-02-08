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
      <Banner title="Diğer Kuruluşlar" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-8xl mx-auto gap-12">
        {Array.from({ length: 12 }).map((_, index) => (
          <Image
            key={index}
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12 scale-90 lg:scale-100 hover:scale-110 transition duration-200"
          />
        ))}
      </section>
    </>
  );
};

export default page;
