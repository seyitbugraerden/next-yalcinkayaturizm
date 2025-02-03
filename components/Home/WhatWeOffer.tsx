import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OfferCard from "../ui/OfferCard";

const WhatWeOffer = () => {
  return (
    <section>
      <SectionTitle />
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 mt-12">
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
