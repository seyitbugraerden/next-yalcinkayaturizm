"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ServiceCard from "./ServiceCard";

const HomeSwiper = () => {
  return (
    <div className="mx-12 mt-12">
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[570px]"
      >
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
