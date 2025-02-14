import WhatWeOffer from "@/components/Home/WhatWeOffer";
import Banner from "@/components/ui/Banner";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.filo_kiralama.meta_title,
  description: metadatas.filo_kiralama.meta_description,
  alternates: { canonical: metadatas.filo_kiralama.canonical },
};

const page = () => {
  return (
    <>
      <Banner
        title="Filo Kiralama"
        imgEl="/alt_sayfalar_slider/hizmetlerimiz.webp"
      />
      <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/alt_sayfalar_hizmet/filoic.webp"
          alt="Filo Kiralama"
          width={600}
          height={200}
          className="rounded-xl shadow-lg shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
        <div>
          <p className="flex-1 text-text text-justify">
            Filo kiralama, işletmeler için önemli bir finansal avantaj sunarak,
            sermayenizi sürekli değer kaybeden bir yatırım kalemine bağlamanızı
            önler. Bu sayede finansal kaynaklarınızı daha verimli alanlara
            yönlendirebilir ve şirketinizin büyümesine katkı sağlayabilirsiniz.
            Günümüzde birçok firma, araç satın almak yerine uzun dönem filo
            kiralamayı tercih ederek operasyonel maliyetlerini optimize
            etmektedir. Özellikle geniş araç filosuna ihtiyaç duyan şirketler
            için filo kiralama, satın almaya kıyasla çok daha akılcı ve
            sürdürülebilir bir çözümdür.
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
