"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const SwiperElement = () => {
  return (
    <div className="py-24 bg-black/80 text-white">
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-row py-2 max-w-7xl mx-auto ">
            <div className="flex-1 flex flex-col gap-3 justify-center items-start">
              <h2 className="text-8xl font-bold">KEŞFETMEYE HAZIR OLUN</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, laudantium!
              </p>
              <button className="px-3 py-2 border">Keşfet</button>
            </div>
            <div className="flex-1">
              <Image
                src="https://picsum.photos/600/600"
                alt="Slider Image"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row py-2 max-w-7xl mx-auto ">
            <div className="flex-1 flex flex-col gap-3 justify-center items-start">
              <h2 className="text-8xl font-bold">KEŞFETMEYE HAZIR OLUN</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, laudantium!
              </p>
              <button className="px-3 py-2 border">Keşfet</button>
            </div>
            <div className="flex-1">
              <Image
                src="https://picsum.photos/600/600"
                alt="Slider Image"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row py-2 max-w-7xl mx-auto ">
            <div className="flex-1 flex flex-col gap-3 justify-center items-start">
              <h2 className="text-8xl font-bold">KEŞFETMEYE HAZIR OLUN</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, laudantium!
              </p>
              <button className="px-3 py-2 border">Keşfet</button>
            </div>
            <div className="flex-1">
              <Image
                src="https://picsum.photos/600/600"
                alt="Slider Image"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperElement;
