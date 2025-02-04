import Image from "next/image";
import React from "react";

const OfferCard = () => {
  return (
    <div className="flex flex-row gap-3 bg-[#FAFAFA] p-5 border border-transparent hover:border-red-500 transition duration-200 cursor-default rounded-xl">
      <div>
        <Image
          src="https://picsum.photos/600/600"
          className="rounded-full inline-block h-[60px] w-[150px]"  
          alt="Card Icon"
          width={96}
          height={96}
        />
      </div>
      <div className="flex flex-col items-start gap-1 text-black">
        <div className="text-xl font-semibold">Lorem, ipsum.</div>
        <p className="font-light text-black/50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          nobis repudiandae eum?
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
