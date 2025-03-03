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
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 lg:gap-4 py-12 lg:pb-0">
        <div className="lg:col-span-2">
          <div className="flex justify-start items-center">
            <Image src="/white_logo.png" alt="logo" width={230} height={120} />
          </div>
          <p className="mt-4 text-sm text-white/50 lg:pe-24">
            <strong>Yalçınkaya</strong> Net Turizm Ltd. Şti olarak turizm ve
            taşımacılık sektöründe uzmanlaşmış bir ekip ile sahip olduğumuz
            bütün tecrübeyi bir araya getirerek siz değerli müşterilerimize
            hizmet vermekten mutluluk duyarız.
          </p>
          <div className="flex flex-row justify-start items-center gap-3">
            <Image
              src="/footer1.png"
              alt="TURSAB"
              width={240}
              height={60}
              className="object-contain w-36  "
            />
            <Image
              src="/footer2.png"
              alt="TURSAB"
              width={120}
              height={60}
              className="object-contain w-24"
            />
            <Image
              src="/footer3.png"
              alt="TURSAB"
              width={120}
              height={60}
              className="object-contain w-24"
            />
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-xl flex flex-row items-center gap-2">
            Hizmetlerimiz
          </h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light text-sm">
            <li>
              <Link href="/hizmetlerimiz/transfer-tasimaciligi">
                Transfer Taşımacılığı
              </Link>
            </li>
            <li>
              <Link href="/hizmetlerimiz/vip-tasimaciligi">
                Vip Taşımacılığı
              </Link>
            </li>
            <li>
              <Link href="/hizmetlerimiz/turizm-tasimaciligi">
                Turizm Taşımacılığı
              </Link>
            </li>{" "}
            <li>
              <Link href="/hizmetlerimiz/filo-kiralama">Filo Kiralama</Link>
            </li>
            <li>
              <Link href="/hizmetlerimiz/a-grubu-seyahat-acentesi">
                A Grubu Seyahat Ajantesi
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-xl flex flex-row items-center gap-2">
            Referanslarımız
          </h5>
          <ul className="flex flex-col items-start gap-3 mt-4 font-light text-sm">
            <li>
              <Link href="/referanslarimiz/savunma-sanayi">Savunma Sanayi</Link>
            </li>
            <li>
              <Link href="/referanslarimiz/resmi-kurumlar">Resmi Kurumlar</Link>
            </li>
            <li>
              <Link href="/referanslarimiz/diger-kuruluslar">
                Diğer Kuruluşlar
              </Link>
            </li>
          </ul>
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
                  className="font-light w-full whitespace-nowrap text-nowrap text-sm py-1 pe-4 block"
                >
                  +90 532 344 55 02
                </Link>{" "}
                <Link
                  href="tel:+905323445502"
                  className="font-light w-full whitespace-nowrap text-nowrap text-sm py-1 pe-4 block"
                >
                  +90 312 480 76 58
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto border-t border-white/30 pt-3 mt-6 flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between">
        <div className="text-sm text-white/50 lg:text-nowrap">
          Telif Hakları © 2025 <strong>Yalçınkaya </strong>Net Turizm Ltd. Şti
          tarafından saklıdır.
        </div>
        <div className="flex flex-row justify-center w-full items-center gap-2">
          <Link
            href="https://www.facebook.com/people/Yal%C3%A7%C4%B1nkaya-Tur/100082860146198/"
            target="_blank"
            aria-label="Facebook sayfamızı ziyaret edin"
            className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
          >
            <FaFacebookF size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/yalcinkayatur/?hl=tr"
            target="_blank"
            aria-label="Instagram sayfamızı ziyaret edin"
            className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
          >
            <IoLogoInstagram size={18} />
          </Link>
          <Link
            href="https://www.tiktok.com/@yalcinkayaturizm?_t=ZS-8tbb4HQPzaa&_r=1"
            target="_blank"
            aria-label="Tiktok sayfamızı ziyaret edin"
            className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
          >
            <FaTiktok size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/yalçınkaya-turizm/about/"
            target="_blank"
            aria-label="Linkedin sayfamızı ziyaret edin"
            className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
          >
            <FaLinkedinIn size={18} />
          </Link>{" "}
        </div>
        <div className="flex flex-row items-center gap-3">
          <span className="text-sm text-white/50 lg:text-nowrap">
            KOZAK Reklam Ajansı -
          </span>
          <Link
            href="https://www.milleniumyazilim.com.tr/"
            target="_blank"
            className="text-sm text-white/50 lg:text-nowrap"
          >
            Millenium Yazılım
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
