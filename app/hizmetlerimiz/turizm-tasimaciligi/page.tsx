import Banner from "@/components/ui/Banner";
import OfferCard from "@/components/ui/OfferCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/lib/data";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.turizm_tasimaciligi.meta_title,
  description: metadatas.turizm_tasimaciligi.meta_description,
  alternates: { canonical: metadatas.turizm_tasimaciligi.canonical },
};

const page = () => {
  return (
    <>
      <Banner
        title="Turizm Taşımacılığı"
        imgEl="/alt_sayfalar_slider/hizmetlerimiz.webp"
      />
      <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/alt_sayfalar_hizmet/turizm.webp"
          alt="Turizm Taşımacılığı"
          width={600}
          height={200}
          className="rounded-xl shadow-lg shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
        <div>
          <p className="flex-1 text-text text-justify">
            Her köşesinden tarih ve kültür fışkıran güzel yurdumuzun harika
            yerlerini keşfetmek için düzenleyeceğiniz kısa veya uzun süreli
            turlara Net Seyehat güvencesiyle çıkabilirsiniz. Her türlü kültür ve
            inanç gezileri, yerli ve yabancı turist grupları için seyahat
            acenteleri tarafından düzenlenen Türkiye ve yurtdışına araç temin
            edebilirsiniz. Bu gezilerinizde lüks, modern araç filosuyla, her
            konuda deneyimi olan sürücüleriyle bilgili ve bilgilendirici
            rehberleriyle, güvenli ve konforlu bir yolculuk seçeneği sunuyor.
            Özel grupların yurt içi kültür turlarına araç temini hizmeti
            sağladığımız gibi, yerli ve yabancı seyahat acentelerinin tur
            programlarında da talep edilen tip ve özellikte araç sağlanmaktadır.
          </p>{" "}
          <br />
          <Link
            href="tel:+905323445502"
            className="text-sm text-[#575757] font-semibold"
          >
            İletişim için hemen arayın!
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-bg to-bg_sec !text-white">
        <SectionTitle
          white
          title="NEDEN BİZİ SEÇMELİSİNİZ ?"
          mainTitle=""
          description=""
        />
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((_, index) => (
            <OfferCard key={index} features={_} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
