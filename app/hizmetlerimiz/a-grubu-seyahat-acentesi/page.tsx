import Banner from "@/components/ui/Banner";
import OfferCard from "@/components/ui/OfferCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/lib/data";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.a_grubu.meta_title,
  description: metadatas.a_grubu.meta_description,
  alternates: { canonical: metadatas.a_grubu.canonical },
};

const page = () => {
  return (
    <>
      <Banner title="A Grubu Seyahat Acentesi" />
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
            Sektöründe öncü olmayı hedefleyen A Grubu Seyahat Acentesi,
            Ankara&aposda başladığı transfer taşımacılığı hizmetleri ile 7/24
            güvenli ve konforlu seyahat deneyimi sunmaktadır. Müşteri
            memnuniyetini her şeyin önünde tutarak, yurdumuzun her noktasına
            kesintisiz hizmet sağlıyoruz. Hizmetlerimiz: Havaalanı Transferi:
            Uçuşlarınızın saatine göre zamanında ve güvenli bir şekilde
            havalimanına transferinizi gerçekleştiriyoruz. Otel Transferi:
            Otelden istediğiniz noktaya rahat ve konforlu bir şekilde seyahat
            etmenizi sağlıyoruz. Yurtiçi Transfer: Türkiye&aposnin dört bir yanına
            kesintisiz transfer hizmeti sunuyoruz. A Grubu Seyahat Acentesi
            olarak, her transferi güvenli, konforlu ve huzur dolu bir seyahat
            deneyimi sunarak gerçekleştiriyoruz. İhtiyaçlarınıza en uygun
            çözümleri sunmak için her zaman yanınızdayız.
          </p>
        </div>
      </section>
      <section className="bg-bg_sec !text-white">
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
