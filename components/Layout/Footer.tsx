import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import {
  IoCall,
  IoLocationSharp,
  IoLogoInstagram,
  IoMailSharp,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-bg_sec text-white pt-24 lg:pt-12 pb-4">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-0">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          <div className="flex flex-row gap-6">
            <div>
              <div className="bg-primary inline-flex p-2 rounded-full">
                <IoLocationSharp />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold">Konum</div>
              <div className="font-light lg:w-[250px] text-sm">
                Öveçler, Tevfik Fikret Cd. No:26, 06450 Çankaya/Ankara
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div>
              <div className="bg-primary inline-flex p-2 rounded-full">
                <IoMailSharp />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold">E-posta</div>
              <Link
                href="mailto:yalcinkayanetturizm@hotmail.com"
                className="font-light text-sm"
              >
                yalcinkayanetturizm@hot...
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div>
              <div className="bg-primary inline-flex p-2 rounded-full">
                <IoCall />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold">İletişim</div>
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
        <div className="flex flex-row justify-center lg:justify-end w-full items-center gap-2">
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
            href="#"
            className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
          >
            <BsTwitterX size={18} />
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
          <Link
            href="#"
            className="w-[45px] h-[45px] flex justify-center items-center border-none rounded-full bg-white/10"
          >
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
        <div>
          <Image src="/white_logo.png" alt="logo" width={280} height={120} />
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.4019147198683!2d32.826784089506916!3d39.887632914274015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3458b577674c9%3A0xe594be421c094048!2zw5Z2ZcOnbGVyLCBUZXZmaWsgRmlrcmV0IENkLiBObzoyNiwgMDY0NjAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1738661127449!5m2!1str!2str"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            className="w-full h-full rounded-xl mt-4"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
