import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <Link
      href="http://wa.me/+905323445502"
      target="_blank"
      aria-label="Whatsapp İletişim"
      className="fixed right-6 bottom-6 bg-[#38E759] rounded-xl p-2 z-[9999999] text-white hover:!text-white shadow-md shadow-black/30 hover:brightness-90 transition duration-200"
    >
      <FaWhatsapp size={42} />
    </Link>
  );
};

export default WhatsappButton;
