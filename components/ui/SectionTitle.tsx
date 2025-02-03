import React from "react";

const SectionTitle = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="px-3 py-2 border rounded-xl text-red-500 bg-red-500/30 text-xs">
        Biz Kimiz?
      </div>
      <div className="text-4xl font-bold">Lorem ipsum dolor sit.</div>
      <p className="text-sm text-black/50 mt-4 max-w-4xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero
        atque quae possimus debitis nemo reiciendis repudiandae ex accusantium
        sunt?
      </p>
    </div>
  );
};

export default SectionTitle;
