"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "./Button";
import { Pagination } from "swiper/modules";
const SwiperElement = () => {
  return (
    <Swiper
      className="mySwiper h-[85dvh]"
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide className="relative">
        <div className="max-w-8xl mx-auto text-white z-[999] h-full flex flex-col justify-center items-start gap-10">
          <h2 className="text-5xl lg:text-7xl font-semibold max-w-4xl">
            Lüksün ve Konforun Buluştuğu Yer!
          </h2>
          <div className="w-1/2 lg:w-1/4 h-1 bg-primary"></div>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            amet.
          </p>
          <Button />
        </div>
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Swiper Image"
          fill
          className="brightness-50 absolute top-0 left-0 w-full h-full -z-50"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="max-w-8xl mx-auto text-white z-[999] h-full flex flex-col justify-center items-start gap-10">
          <h2 className="text-5xl lg:text-7xl font-semibold max-w-4xl">
            Lüksün ve Konforun Buluştuğu Yer!
          </h2>
          <div className="w-1/2 lg:w-1/4 h-1 bg-primary"></div>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            amet.
          </p>
          <Button />
        </div>
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Swiper Image"
          fill
          className="brightness-50 absolute top-0 left-0 w-full h-full -z-50"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperElement;
