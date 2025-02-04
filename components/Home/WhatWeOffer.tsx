import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OfferCard from "../ui/OfferCard";

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-b from-bg to-bg_sec !text-white">
      <SectionTitle
        white
        title="NEDEN BİZİ SEÇMELİSİNİZ ?"
        mainTitle=""
        description=""
      />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <OfferCard key={index} />
          ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
