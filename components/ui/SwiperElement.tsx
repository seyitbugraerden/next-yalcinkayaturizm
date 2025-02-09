"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "./Button";
import { Pagination } from "swiper/modules";
const SwiperElement = () => {
  return (
    <Swiper
      className="mySwiper h-[90dvh]"
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide className="relative">
        <div className="max-w-8xl mx-auto text-white z-[999] h-full flex flex-col justify-center items-start gap-10">
          <h2 className="text-5xl lg:text-7xl font-semibold max-w-4xl">
            Taşımacılıkta Kalite ve Güven!
          </h2>
          <div className="w-1/2 lg:w-1/4 h-1 bg-primary"></div>
          <p className="text-sm text-white max-w-xl leading-6">
            Transfer taşımacılığı, VİP taşımacılığı, turizim taşımacılığı, filo
            kiralama, A grubu seyahat acentesi gibi hizmetlerimizle en iyi
            ulaşım çözümlerini sizlere sunuyoruz.{" "}
            <strong>Net Seyahat Turizm</strong> ile her yolculuğunuz keyifli ve
            sorunsuz olsun!
          </p>
          <Button linkEl="/hizmetlerimiz/transfer-tasimaciligi" />
          <div className="absolute bottom-6 left-0 w-full h-40 flex flex-row justify-center items-center items-stretch gap-2">
            <Image
              src="/slider/logo1.png"
              alt="TURSAB"
              width={240}
              height={60}
              className="object-contain w-24 md:w-52  "
            />
            <Image
              src="/slider/logo2.png"
              alt="TURSAB"
              width={120}
              height={60}
              className="object-contain w-24 md:w-52"
            />
            <Image
              src="/slider/logo3.png"
              alt="TURSAB"
              width={120}
              height={60}
              className="object-contain w-24 md:w-52"
            />
          </div>
        </div>
        <Image
          src="/slider/slider.webp"
          alt="Swiper Image"
          fill
          className="brightness-50 absolute top-0 left-0 w-full h-full -z-50 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperElement;
