"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ServiceCard from "./ServiceCard";

const HomeSwiper = () => {
  return (
    <div className="mx-12 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 1000, // 3 saniyede bir değişim
          disableOnInteraction: false, // Kullanıcı kaydırsa bile autoplay devam eder
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
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[500px] overflow-visible"
      >
        <SwiperSlide>
          <ServiceCard text="Personel Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Havaalanı Transfer" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Otobüs Kiralama" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Şoförlü Vip Minibüs Kiralama" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Öğrenci Servis Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Konforlu Transfer Hizmeti" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Ziyaretçi Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="Turizm Taşımacılığı" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard text="V.I.P. Transfer" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
