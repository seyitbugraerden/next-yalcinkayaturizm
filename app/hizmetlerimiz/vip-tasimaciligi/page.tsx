import FormEl from "@/components/Contact/FormEl";
import Banner from "@/components/ui/Banner";
import OfferCard from "@/components/ui/OfferCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/lib/data";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.vip_tasimaciligi.meta_title,
  description: metadatas.vip_tasimaciligi.meta_description,
  alternates: { canonical: metadatas.vip_tasimaciligi.canonical },
};

const page = () => {
  return (
    <>
      <Banner title="VIP Taşımacılığı" />
      <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/about.webp"
          alt="Biz Kimiz"
          width={600}
          height={200}
          className="rounded-xl shadow-xl shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
        <div>
          <p className="flex-1 text-text text-justify">
            Farklı ulaşım ihtiyaçlarınıza cevap verebilmek adına filomuzu
            sürekli genç tutarak son model, özel iç tasarımlı, teknolojik
            araçlarımızla deneyimli profesyonel uzman kadromuz ile VIP
            Taşımacılık hizmetlerinizi sağlamaktayız. Günümüzde para kadar
            değerli vaktinize değer kaybettirmeden zamanında güvenli ve konforlu
            bir şekilde sizlere hizmet vermeyi hedefliyoruz.
          </p>
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
