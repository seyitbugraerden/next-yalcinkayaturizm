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
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
          <ServiceCard
            text="Transfer Taşımacılığı"
            imgEl="/hizmet_kartlar/transfer.webp"
            linkEl="/hizmetlerimiz/transfer-tasimaciligi"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            text="VIP Taşımacılığı"
            imgEl="/hizmet_kartlar/vip.webp"
            linkEl="/hizmetlerimiz/vip-tasimaciligi"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            text="Turizm Taşımacılığı"
            imgEl="/hizmet_kartlar/turizm.webp"
            linkEl="/hizmetlerimiz/turizm-tasimaciligi"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            text="Filo Kiralama"
            imgEl="/hizmet_kartlar/filo.webp"
            linkEl="/hizmetlerimiz/filo-kiralama"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            text="A Grubu Seyahat Acentesi"
            imgEl="/hizmet_kartlar/a.webp"
            linkEl="/hizmetlerimiz/a-grubu-seyahat-acentesi"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
