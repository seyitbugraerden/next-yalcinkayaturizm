"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";

// import required modules

const ReferanceSwiper = () => {
  return (
    <div className="max-w-8xl mx-auto mt-12">
      <Swiper
        modules={[Pagination]}
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
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
        spaceBetween={30}
        className="mySwiper h-[420px] px-44"
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

export default ReferanceSwiper;
