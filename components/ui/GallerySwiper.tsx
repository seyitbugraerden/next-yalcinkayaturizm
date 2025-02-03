"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules

const GallerySwiper = () => {
  return (
    <div className="max-w-6xl mx-auto -translate-y-32 h-[200px]">
      <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper">
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

export default GallerySwiper;
