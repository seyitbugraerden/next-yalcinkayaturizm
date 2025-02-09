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
  title: metadatas.a_grubu.meta_title,
  description: metadatas.a_grubu.meta_description,
  alternates: { canonical: metadatas.a_grubu.canonical },
};

const page = () => {
  return (
    <>
      <Banner
        title="A Grubu Seyahat Acentesi"
        imgEl="/alt_sayfalar_slider/hizmetlerimiz.webp"
      />
      <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/alt_sayfalar_hizmet/a.webp"
          alt="A Grubu Seyahat Acentesi"
          width={600}
          height={200}
          className="rounded-xl shadow-lg shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
        <div>
          <div className="flex-1">
            <p className=" text-text text-justify">
              Yolculuklarınızı konfor, güven ve kaliteyle birleştirerek, A Grubu
              Seyahat Acentesi olarak sizlere en iyi taşımacılık hizmetlerini
              sunuyoruz. Turizm taşımacılığı, şehir içi ve şehirler arası yolcu
              transferleri, özel grup gezileri ve kurumsal seyahat
              organizasyonları gibi geniş bir yelpazede profesyonel çözümler
              sağlıyoruz.
            </p>{" "}
            <br />
            <p className="text-text text-justify">
              Deneyimli ekibimiz ve modern araç filomuz ile müşteri
              memnuniyetini ön planda tutuyor, konforlu ve güvenli seyahat
              imkânı sunuyoruz. İster bireysel, ister kurumsal seyahatlerinizde,
              zamanında ve eksiksiz hizmet anlayışımızla yanınızdayız.
            </p>{" "}
            <br />
            <Link
              href="tel:+905323445502"
              className="text-sm text-[#575757] font-semibold"
            >
              İletişim için hemen arayın!
            </Link>
          </div>
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
