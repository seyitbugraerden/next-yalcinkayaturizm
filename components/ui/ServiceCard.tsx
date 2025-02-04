import Image from "next/image";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ServiceCard = ({ text }: homeServiceTypes) => {
  return (
    <div className="rounded-xl group shadow-md shadow-black/70 relative h-[430px] w-full overflow-hidden">
      <div className="bg-white py-4 px-3 z-10 w-[90%] rounded-xl absolute bottom-4 left-4 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1 items-start justify-start">
          <div className="w-12 h-[3px] bg-primary"></div>
          <h4 className="text-xl font-semibold min-h-12 max-w-52">{text}</h4>
        </div>
        <div>
          <div className="bg-white p-3 rounded-full group-hover:bg-primary transition duration-200">
            <FaPaperPlane className="text-primary group-hover:text-white transition duration-200" />
          </div>
        </div>
      </div>
      <Image
        src="/service.webp"
        alt="Service Image"
        fill
        className="absolute top-0 left-0 z-0 object-cover brightness-75"
      />
    </div>
  );
};

export default ServiceCard;
