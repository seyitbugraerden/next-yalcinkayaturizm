import WhatWeOffer from "@/components/Home/WhatWeOffer";
import Banner from "@/components/ui/Banner";
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
            <div className="flex flex-row gap-2 items-center">
              {" "}
              <Link href="https://www.tatilyaka.com.tr/" target="_blank">
                <Image
                  src="/alt_sayfalar_hizmet/anew.png"
                  alt="A Grubu Seyahat Acentesi"
                  width={120}
                  height={200}
                  className=""
                />
              </Link>{" "}
              <Link
                href="https://www.tatilyaka.com.tr/"
                target="_blank"
                className="text-sm text-[#575757] font-semibold"
              >
                Tatilyaka sitemize buradan ulaşabilirsiniz
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WhatWeOffer bg="bg_sec" />
    </>
  );
};

export default page;
