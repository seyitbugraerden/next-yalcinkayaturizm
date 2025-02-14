import WhatWeOffer from "@/components/Home/WhatWeOffer";
import Banner from "@/components/ui/Banner";
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
            turlara <strong>Yalçınkaya</strong> Net Seyahat güvencesiyle
            çıkabilirsiniz. Her türlü kültür ve inanç gezileri, yerli ve yabancı
            turist grupları için seyahat acenteleri tarafından düzenlenen
            Türkiye ve yurt dışına araç temin edebilirsiniz. Bu gezilerinizde
            lüks, modern araç filosuyla, her konuda deneyimi olan sürücüleriyle
            bilgili ve bilgilendirici rehberleriyle, güvenli ve konforlu bir
            yolculuk seçeneği sunuyor. Özel grupların yurt içi kültür turlarına
            araç temini hizmeti sağladığımız gibi, yerli ve yabancı seyahat
            acentelerinin tur programlarında da talep edilen tip ve özellikte
            araç sağlamaktayız.
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
      <WhatWeOffer bg="bg_sec" />
    </>
  );
};

export default page;
