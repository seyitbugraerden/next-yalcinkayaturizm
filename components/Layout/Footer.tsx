import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import GallerySwiper from "../ui/GallerySwiper";

const Footer = () => {
  return (
    <footer className="bg-[#1D231F] text-white pt-0 pb-4 mt-40">
      <GallerySwiper />
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex flex-row items-center gap-24">
          <div className="flex flex-row gap-6">
            <Image
              src="https://picsum.photos/200/300"
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full w-[48px] h-[48px]"
            />
            <div className="flex flex-col items-start">
              <div className="font-semibold">Konum</div>
              <div className="font-light">Ankara</div>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <Image
              src="https://picsum.photos/200/300"
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full w-[48px] h-[48px]"
            />
            <div className="flex flex-col items-start">
              <div className="font-semibold">E-posta</div>
              <div className="font-light">support@support.com</div>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <Image
              src="https://picsum.photos/200/300"
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full w-[48px] h-[48px]"
            />
            <div className="flex flex-col items-start">
              <div className="font-semibold">İletişim</div>
              <div className="font-light">+90 555 555 55 55</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10">
            <FaFacebookF />
          </div>
          <div className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10">
            <FaFacebookF />
          </div>
          <div className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10">
            <FaFacebookF />
          </div>
          <div className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10">
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-4 py-12">
        <div>
          {" "}
          <h5 className="font-semibold text-xl">Logo</h5>
        </div>
        <div>
          <h5 className="font-semibold text-xl">Kurumsal</h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light">
            <li>Kurumsal Başlık</li>
            <li>Kurumsal Başlık</li>
            <li>Kurumsal Başlık</li>
            <li>Kurumsal Başlık</li>
            <li>Kurumsal Başlık</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-xl">Hizmetlerimiz</h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light">
            <li>Hizmetlerimiz Başlık</li>
            <li>Hizmetlerimiz Başlık</li>
            <li>Hizmetlerimiz Başlık</li>
            <li>Hizmetlerimiz Başlık</li>
            <li>Hizmetlerimiz Başlık</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-xl">İletişim</h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light">
            <li>Adres - Ankara: Ankara - Kızılay</li>
            <li>Telefon: +90 555 555 55 55</li>
            <li>E-Posta: support@support.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/30 pt-3 mt-6 flex flex-row items-center justify-between">
        <div>Copy@ 2024, All Right Reserved</div>
        <div className="flex flex-row items-center gap-3">
          <Link href="#">Başlık</Link>
          <Link href="#">Başlık</Link>
          <Link href="#">Başlık</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
