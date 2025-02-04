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
        modules={[Pagination]}
        className="mySwiper h-[480px] overflow-visible"
      >
        <SwiperSlide>
          <ServiceCard text="Ankara Personel Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Havaalanı Transfer" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Otobüs Kiralama" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Şoförlü Vip Minibüs Kiralama" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Öğrenci Servis Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Konforlu Transfer Hizmeti" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Ziyaretçi Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara Turizm Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ankara V.I.P. Transfer" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
