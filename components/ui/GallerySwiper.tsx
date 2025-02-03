"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules

const GallerySwiper = () => {
  return (
    <div className="max-w-8xl mx-auto lg:-translate-y-40 lg:h-[200px]">
      <div className="flex justify-center items-center w-full mb-4 lg:hidden">
        <div className="px-3 py-2 border rounded-xl text-primary bg-primary/30 border-primary text-xs">
          Galeri
        </div>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70 w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GallerySwiper;
