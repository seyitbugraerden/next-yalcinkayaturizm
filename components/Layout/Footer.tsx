import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import {
  IoCall,
  IoLocationSharp,
  IoLogoInstagram,
  IoMailSharp,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-bg_sec text-white pt-0 lg:pt-4 pb-4">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 lg:gap-4 py-12">
        <div>
          <div className="flex justify-center items-center">
            <Image src="/white_logo.png" alt="logo" width={230} height={120} />
          </div>
          <p className="mt-4 text-sm text-white/50">
            Yalçın Kaya Net Turizm olarak şehir içi ve şehir dışı ulaşım,
            transfer, personel ve öğrenci taşımacılığı hizmetleri sunuyoruz.
            Güvenli, konforlu ve kaliteli taşımacılık için buradayız!
          </p>
          <div className="flex flex-row justify-center lg:justify-start w-full items-center gap-2 mt-4">
            <Link
              href="https://www.facebook.com/people/Yal%C3%A7%C4%B1nkaya-Tur/100082860146198/"
              target="_blank"
              className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/yalcinkayatur/?hl=tr"
              target="_blank"
              className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
            >
              <IoLogoInstagram size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@yalcinkayaturizm?_t=ZS-8tbb4HQPzaa&_r=1"
              target="_blank"
              className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
            >
              <FaTiktok size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/yalçınkaya-turizm/about/"
              target="_blank"
              className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
            >
              <FaLinkedinIn size={18} />
            </Link>{" "}
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-xl flex flex-row items-center gap-2">
            Hizmetlerimiz
          </h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light text-sm">
            <li>
              <Link href="#">Transfer Taşımacılığı</Link>
            </li>
            <li>
              <Link href="#">Vip Taşımacılığı</Link>
            </li>
            <li>
              <Link href="#">Turizm Taşımacılığı</Link>
            </li>{" "}
            <li>
              <Link href="#">Filo Kiralama</Link>
            </li>
            <li>
              <Link href="#">Personel Taşımacılığı</Link>
            </li>
            <li>
              <Link href="#">A Grubu Seyahat Ajantesi</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-xl flex flex-row items-center gap-2">
            Referanslarımız
          </h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light text-sm">
            <li>
              <Link href="#">Savunma Sanayi</Link>
            </li>
            <li>
              <Link href="#">Resmi Kurumlar</Link>
            </li>
            <li>
              <Link href="#">Diğer Kuruluşlar</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-xl flex flex-row items-center gap-2">
            Hakkımızda
          </h5>
        </div>
        <div>
          <h5 className="font-semibold text-xl flex flex-row items-center gap-2">
            İletişim
          </h5>
          <div className="flex flex-col items-start gap-4 mt-4">
            <div className="flex flex-row items-center gap-6">
              <div>
                <div className="bg-primary inline-flex p-2 rounded-full">
                  <IoLocationSharp />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="font-light lg:w-[250px] text-sm">
                  Öveçler, Tevfik Fikret Cd. No:26, 06450 Çankaya/Ankara
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div>
                <div className="bg-primary inline-flex p-2 rounded-full">
                  <IoMailSharp />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  href="mailto:yalcinkayanetturizm@hotmail.com"
                  className="font-light text-sm"
                >
                  yalcinkayanetturizm@hotmail.com
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div>
                <div className="bg-primary inline-flex p-2 rounded-full">
                  <IoCall />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  href="tel:+905323445502"
                  className="font-light w-full whitespace-nowrap text-nowrap text-sm"
                >
                  +90 532 344 55 02
                </Link>{" "}
                <Link
                  href="tel:+905323445502"
                  className="font-light w-full whitespace-nowrap text-nowrap text-sm"
                >
                  +90 312 480 76 58
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto border-t border-white/30 pt-3 mt-6 flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between">
        <div className="text-sm text-white/50">
          Copy@ 2024, All Right Reserved
        </div>
        <div className="flex flex-row items-center gap-3">
          <Link href="#" className="text-sm text-white/50">
            Gizlilik Politikası
          </Link>
          <Link href="#" className="text-sm text-white/50">
            KVKK
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
