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
  title: metadatas.transfer_tasimaciligi.meta_title,
  description: metadatas.transfer_tasimaciligi.meta_description,
  alternates: { canonical: metadatas.transfer_tasimaciligi.canonical },
};

const page = () => {
  return (
    <>
      <Banner
        title="Transfer Taşımacılığı"
        imgEl="/alt_sayfalar_slider/hizmetlerimiz.webp"
      />
      <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/alt_sayfalar_hizmet/transfer.webp"
          alt="Transfer Taşımacılığı"
          width={600}
          height={200}
          className="rounded-xl shadow-lg shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
        <div>
          <p className="flex-1 text-text text-justify">
            Sektöründe lider olmayı hedefleyen, yeniliklere öncülük yapan Net
            Seyahat, Ankara&aposda başladığı Transfer taşımacılığı hizmetlerine,
            maksimum müşteri memnuniyeti anlayışıyla 7/24 yurdumuzun her
            noktasına hizmet vermektedir. Transferlerinizi Güvenilir, Konfor ve
            Huzur dolu Seyahat tadında gerçekleştirip Havalimanı ve Otel
            Transferleri hizmetleri ile Yurt içi Transferlerinizi sağlamaktayız.
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
