import HomeServices from "@/components/Home/HomeServices";
import ImageFixed from "@/components/Home/ImageFixed";
import Referance from "@/components/Home/Referance";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoAreWe from "@/components/Home/WhoAreWe";
import GallerySwiper from "@/components/ui/GallerySwiper";
import SwiperElement from "@/components/ui/SwiperElement";

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
