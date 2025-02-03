import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="rounded-xl shadow-xl shadow-black/70 relative h-[500px] w-full overflow-hidden">
      <div className="bg-white py-4 px-3 z-10 w-[90%] rounded-xl absolute bottom-4 left-4 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1 items-start justify-start">
          <div className="w-12 h-[3px] bg-red-500"></div>
          <h4 className="text-xl font-semibold">Lorem, ipsum dolor.</h4>
        </div>
        <div>
          <button className="border border-red-500">Text</button>
        </div>
      </div>
      <Image
        src="https://picsum.photos/200/300"
        alt="Service Image"
        fill
        className="absolute top-0 left-0 z-0"
      />
    </div>
  );
};

export default ServiceCard;
