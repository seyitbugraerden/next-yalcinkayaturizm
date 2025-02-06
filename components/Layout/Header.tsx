import React from "react";
import Menu from "./Menu";
import { IoCall, IoLogoInstagram, IoMailSharp } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white bg-white">
      <div className="text-white bg-primary">
        <div className="max-w-8xl mx-auto">
          <div className="flex bg-whiteflex-row gap-6 lg:gap-4 md:flex-row items-center justify-between py-3 text-sm">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <Link
                href="mailto:yalcinkayanetturizm@hotmail.com"
                className="hidden lg:flex flex-row items-center gap-2 text-xs font-light"
                aria-label="E-Posta Adresi"
              >
                <IoMailSharp size={14} />
                <span>yalcinkayanetturizm@hotmail.com</span>
              </Link>
              <Link
                href="tel:+905323445502"
                className="flex flex-row items-center gap-2 text-xs font-light"
                aria-label="Telefon numarası"
              >
                <IoCall size={14} />
                <span>+90 532 344 55 02</span>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Link
                href="https://www.facebook.com/people/Yal%C3%A7%C4%B1nkaya-Tur/100082860146198/"
                target="_blank"
                aria-label="Facebook sayfamızı ziyaret edin"
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="https://www.instagram.com/yalcinkayatur/?hl=tr"
                target="_blank"
                aria-label="Instagram sayfamızı ziyaret edin"
              >
                <IoLogoInstagram size={16} />
              </Link>
              <Link
                href="https://www.tiktok.com/@yalcinkayaturizm?_t=ZS-8tbb4HQPzaa&_r=1"
                target="_blank"
                aria-label="Tiktok sayfamızı ziyaret edin"
              >
                <FaTiktok size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/yalçınkaya-turizm/about/"
                target="_blank"
                aria-label="Linkedin sayfamızı ziyaret edin"
              >
                <FaLinkedinIn size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto py-4">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
