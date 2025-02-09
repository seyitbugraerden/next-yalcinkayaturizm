import Banner from "@/components/ui/Banner";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.referans_resmi_kurumlar.meta_title,
  description: metadatas.referans_resmi_kurumlar.meta_description,
  alternates: { canonical: metadatas.referans_resmi_kurumlar.canonical },
};

const page = async () => {
  return (
    <>
      <Banner
        title="Resmi Kurumlar"
        imgEl="/alt_sayfalar_slider/referans.webp"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-8xl mx-auto gap-12">
        <Image
          src="/referanslarimiz/resmi/4.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="THY"
        />
        <Image
          src="/referanslarimiz/resmi/5.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="Haceppete Üniversitesi"
        />
        <Image
          src="/referanslarimiz/resmi/6.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="TÜRKAK"
        />
        <Image
          src="/referanslarimiz/resmi/7.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı"
        />
        <Image
          src="/referanslarimiz/resmi/8.png"
          alt="Image"
          width={300}
          height={300}
          className="shadow-md shadow-black/30 rounded-xl w-full px-12 py-6 scale-90 lg:scale-100 hover:scale-110 transition duration-200 object-cover"
          title="T.C. TARIM VE ORMAN BAKANLIĞI"
        />
      </section>
    </>
  );
};

export default page;
