"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "./Button";
import { Autoplay, Pagination } from "swiper/modules";
const SwiperElement = () => {
  return (
    <Swiper
      className="mySwiper h-[85dvh]"
      modules={[Pagination, Autoplay]}
      loop
      autoplay={{
        delay: 5000, // 3 saniyede bir değişim
        disableOnInteraction: false, // Kullanıcı kaydırsa bile autoplay devam eder
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide className="relative">
        <div className="max-w-8xl mx-auto text-white z-[999] h-full flex flex-col justify-center items-start gap-10">
          <h2 className="text-5xl lg:text-7xl font-semibold max-w-4xl">
            Taşımacılıkta Kalite ve Güven!
          </h2>
          <div className="w-1/2 lg:w-1/4 h-1 bg-primary"></div>
          <p className="text-sm text-white max-w-xl leading-6">
            Transfer taşımacılığı, VIP taşımacılığı, turizim taşımacılığı, filo
            kiralama, A grubu seyahat acentesi gibi hizmetlerimizle en iyi
            ulaşım çözümlerini sizlere sunuyoruz. <strong>Yalçınkaya </strong>{" "}
            Net Turizm ile her yolculuğunuz keyifli ve sorunsuz olsun!
          </p>
          <Button linkEl="/hizmetlerimiz/transfer-tasimaciligi" />
        </div>
        <Image
          src="/slider/sd.webp"
          alt="Swiper Image"
          fill
          className="brightness-50 absolute top-0 left-0 w-full h-full -z-50 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="max-w-8xl mx-auto text-white z-[999] h-full flex flex-col justify-center items-start gap-10">
          <h2 className="text-5xl lg:text-7xl font-semibold max-w-4xl">
            Güvenli ve Konforlu Ulaşım!
          </h2>
          <div className="w-1/2 lg:w-1/4 h-1 bg-primary"></div>
          <p className="text-sm text-white max-w-xl leading-6">
            <strong>Yalçınkaya</strong> Net Turizm ile şehir içi ve
            şehir dışı yolculuklarınızı güvenli, konforlu ve zamanında
            gerçekleştirin. Profesyonel ekibimizle daima yanınızdayız!
          </p>
          <Button linkEl="/hizmetlerimiz/transfer-tasimaciligi" />
        </div>
        <Image
          src="/swiper2.webp"
          alt="Swiper Image"
          fill
          className="brightness-50 absolute top-0 left-0 w-full h-full -z-50 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperElement;
