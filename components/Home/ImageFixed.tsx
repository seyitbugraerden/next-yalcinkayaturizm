import React from "react";
import Button from "../ui/Button";

const ImageFixed = () => {
  return (
    <div className="flex flex-col gap-3 text-white justify-center items-center py-24 image_pos">
      <h3 className="text-xl lg:text-4xl font-bold">Lorem, ipsum dolor.</h3>
      <p className="text-sm max-w-8xl text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, velit
        perferendis. Laboriosam adipisci provident ab. Est reiciendis quae
        perspiciatis nulla.
      </p>
      <Button />
    </div>
  );
};

export default ImageFixed;
