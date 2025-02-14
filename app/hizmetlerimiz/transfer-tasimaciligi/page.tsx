import WhatWeOffer from "@/components/Home/WhatWeOffer";
import Banner from "@/components/ui/Banner";
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
            Sektöründe lider olmayı hedefleyen, yeniliklere öncülük yapan
            <strong>Yalçınkaya</strong> Net Seyahat, Ankara&aposda başladığı
            transfer taşımacılığı hizmetlerine, maksimum müşteri memnuniyeti
            anlayışıyla 7/24 yurdumuzun her noktasına hizmet vermektedir.
            Transferlerinizi güvenilir, konfor ve huzur dolu seyahat tadında
            gerçekleştirip havalimanı ve otel transferleri hizmetleri ile yurt
            içi transferlerinizi sağlamaktayız.
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
