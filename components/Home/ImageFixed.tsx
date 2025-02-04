import React from "react";
import Button from "../ui/Button";

const ImageFixed = () => {
  return (
    <div className="flex flex-col gap-3 text-white justify-center items-center py-24 image_pos">
      <h3 className="text-xl lg:text-4xl font-bold">
        Lüksü ve Konforu Yeniden Tanımlayın
      </h3>
      <p className="text-sm max-w-8xl text-center">
        Özel VIP araçlarımızla güvenli, konforlu ve prestijli bir yolculuk
        deneyimi yaşayın.
      </p>
      <Button />
    </div>
  );
};

export default ImageFixed;
