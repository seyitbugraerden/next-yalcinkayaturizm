"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "./Button";
import { Pagination } from "swiper/modules";
const SwiperElement = () => {
  return (
    <div className="text-white bg-gradient-to-b from-bg to-bg_sec  py-10">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper home_slider lg:h-[650px]"
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-6 py-2 max-w-8xl mx-auto cursor-pointer">
            <div className="flex-1 order-2 lg:order-1 flex flex-col gap-3 justify-center items-start">
              <div>
                <h2 className="text-4xl mb-4 lg:mb-4 lg:text-[80px] lg:leading-[90px] font-semibold">
                  Lüksün ve Konforun Buluştuğu Yer!
                </h2>
                <div className="w-1/2 h-[5px] bg-primary"></div>
              </div>
              <div className="flex flex-col gap-8 items-start mt-4">
                <p className="text-sm font-light">
                  VIP ayrıcalıklarıyla tasarlanmış konforlu ve prestijli seyahat
                  deneyimleri sunuyoruz. Kişiye özel hizmetlerle lüksü her an
                  hissedin!
                </p>
                <Button />
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <Image
                src="/slider.webp"
                alt="Slider Image"
                width={600}
                height={600}
                className="rounded-xl lg:h-[550px] w-[100%] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-6 py-2 max-w-8xl mx-auto cursor-pointer">
            <div className="flex-1 order-2 lg:order-1 flex flex-col gap-3 justify-center items-start">
              <div>
                <h2 className="text-4xl mb-4 lg:mb-4 lg:text-[80px] lg:leading-[90px] font-semibold">
                  Özel Yolculuklar, Unutulmaz Deneyimler!
                </h2>
                <div className="w-1/2 h-[5px] bg-primary"></div>
              </div>
              <div className="flex flex-col gap-8 items-start mt-4">
                <p className="text-sm font-light">
                  Her anı özel kılan VIP seyahatler! Konforlu ulaşım, seçkin
                  konaklamalar ve size özel planlanmış unutulmaz deneyimlerle
                  ayrıcalıklı dünyaya adım atın.
                </p>
                <Button />
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <Image
                src="/slider2.webp"
                alt="Slider Image"
                width={600}
                height={600}
                className="rounded-xl lg:h-[550px] w-[100%] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperElement;
