import Banner from "@/components/ui/Banner";
import OfferCard from "@/components/ui/OfferCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/lib/data";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.filo_kiralama.meta_title,
  description: metadatas.filo_kiralama.meta_description,
  alternates: { canonical: metadatas.filo_kiralama.canonical },
};

const page = () => {
  return (
    <>
      <Banner title="Filo Kiralama" />
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
            Filo Kiralama ve Sağladığı Avantajlar Filo kiralama sayesinde ciddi
            bir finansman avantajı sağlarsınız ve finans kaynağınızı sürekli
            değer kaybeden bir yatırım kalemine bağlamamış olursunuz. Filo
            kiralama, firmanıza değerli finans kaynağınızı diğer fırsatlara
            yöneltmeniz noktasında ciddi avantaj sağlar. Günümüzde pek çok
            kuruluş, araç satın alma yerine uzun dönem kiralamayı tercih ediyor
            ve operasyonel filo kiralamanın avantajlarından yararlanıyor.
            Özellikle araç filosu bulunan şirketler için araç kiralamak satın
            almaktan çok daha akılcı bir çözüm olmaktadır.
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
