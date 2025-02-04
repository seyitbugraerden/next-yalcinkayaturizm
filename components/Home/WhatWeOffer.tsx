import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OfferCard from "../ui/OfferCard";

const WhatWeOffer = () => {
  return (
    <section className="bg-[#1D231F] !text-white">
      <SectionTitle title="Misyonumuz" />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <OfferCard key={index} />
          ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
