"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsMobile(false);
  }, [path]);

  return (
    <nav className="flex flex-row items-center justify-between text-black">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={240} height={40} />
      </Link>
      <ul
        className={`absolute bg-white lg:relative top-0 left-0 w-screen lg:w-fit h-screen lg:h-fit flex-col gap-6 lg:flex lg:flex-row lg:items-center lg:gap-5 p-12 z-[999999] lg:p-0 ${
          isMobile ? "flex" : "hidden"
        }`}
      >
        <div className="mx-auto lg:hidden">
          <Image
            src="/logo.png"
            alt="logo"
            width={220}
            height={120}
            layout="responsive"
            className="!h-[60px] !w-[200px]"
          />
        </div>
        <li className="font-medium text-sm">
          <Link href="/">Ana Sayfa</Link>
        </li>
        <li className="relative group">
          <span className="flex flex-row items-center gap-1 group-hover:text-primary transition duration-200 font-medium text-sm cursor-pointer">
            Hizmetlerimiz <MdKeyboardArrowDown />
          </span>
          <ul className="absolute top-4 hidden group-hover:block w-full z-50">
            <div className="mt-4 bg-[#FAFAFA] w-full lg:min-w-[200px] rounded-xl shadow-sm shadow-primary pt-2 pb-4">
              <li className="px-4  hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/hizmetlerimiz/transfer-tasimaciligi"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Transfer Taşımacılığı
                </Link>
              </li>
              <li className="px-4 hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/hizmetlerimiz/vip-tasimaciligi"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Vip Taşımacılığı
                </Link>
              </li>
              <li className="px-4 hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/hizmetlerimiz/turizm-tasimaciligi"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Turizm Taşımacılığı
                </Link>
              </li>
              <li className="px-4 hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/hizmetlerimiz/filo-kiralama"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Filo Kiralama
                </Link>
              </li>
              <li className="px-4 hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/hizmetlerimiz/a-grubu-seyahat-acentesi"
                  className="hover:!text-white hover:!brightness-100"
                >
                  A Grubu Seyahat Acentesi
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative group">
          <span className="flex flex-row items-center gap-1 group-hover:text-primary transition duration-200 font-medium text-sm cursor-pointer">
            Referanslarımız <MdKeyboardArrowDown />
          </span>
          <ul className="absolute top-4 hidden group-hover:block w-full z-50">
            <div className="mt-4 bg-[#FAFAFA] w-full lg:min-w-[200px] rounded-xl shadow-sm shadow-primary pt-2 pb-4">
              <li className="px-4  hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/referanslarimiz/savunma-sanayi"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Savunma Sanayi
                </Link>
              </li>
              <li className="px-4 hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/referanslarimiz/resmi-kurumlar"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Resmi Kurumlar
                </Link>
              </li>
              <li className="px-4 hover:bg-bg transition duration-200 text-black hover:text-white py-2">
                <Link
                  href="/referanslarimiz/diger-kuruluslar"
                  className="hover:!text-white hover:!brightness-100"
                >
                  Diğer Kuruluşlar
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="font-medium text-sm">
          <Link href="/hakkimizda">Hakkımızda</Link>
        </li>
        <li className="font-medium text-sm">
          <Link href="/iletisim">İletişim</Link>
        </li>
      </ul>
      <GiHamburgerMenu
        size={24}
        className="lg:hidden"
        onClick={() => {
          setIsMobile(true);
        }}
      />
      <MdClose
        size={36}
        onClick={() => {
          setIsMobile(false);
        }}
        className={`absolute z-[999999] top-24 right-6 lg:hidden ${
          !isMobile && "hidden"
        }`}
      />
    </nav>
  );
};

export default Menu;
