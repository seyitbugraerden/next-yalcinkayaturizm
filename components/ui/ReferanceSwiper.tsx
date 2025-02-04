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
    <div className="max-w-8xl mx-auto mt-3">
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        className="mySwiper h-[270px] px-44"
      >
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo.png"
            alt="Image"
            width={300}
            height={300}
            className="shadow-md shadow-black/30 rounded-xl w-full p-12"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReferanceSwiper;
