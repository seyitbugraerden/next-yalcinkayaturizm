import HomeServices from "@/components/Home/HomeServices";
import ImageFixed from "@/components/Home/ImageFixed";
import Referance from "@/components/Home/Referance";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoAreWe from "@/components/Home/WhoAreWe";
import SwiperElement from "@/components/ui/SwiperElement";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metadatas.genel_bakis.meta_title,
  description: metadatas.genel_bakis.meta_description,
  alternates: { canonical: metadatas.genel_bakis.canonical },
};

export default function Home() {
  return (
    <>
      <SwiperElement />
      <WhoAreWe />
      <ImageFixed />
      <HomeServices />
      <WhatWeOffer />
      <Referance />
    </>
  );
}
