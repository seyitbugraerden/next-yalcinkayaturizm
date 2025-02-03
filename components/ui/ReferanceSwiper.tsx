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
    <div className="max-w-6xl mx-auto mt-12">
      <Swiper
        modules={[Pagination]}
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        className="mySwiper h-[280px]"
      >
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={600}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/600/600"
            alt="Image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl shadow-black/70"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReferanceSwiper;
