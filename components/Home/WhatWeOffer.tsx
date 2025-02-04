import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OfferCard from "../ui/OfferCard";

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-b from-bg to-bg_sec !text-white">
      <SectionTitle
        white
        title="Misyonumuz"
        mainTitle="Önceliğimiz Sizin Konforunuz ve Güvenliğiniz"
        description="Seyahatlerinizi konforlu, güvenli ve lüks hale getiren VIP seyahat hizmetimizle tanışın. Özel araçlar, profesyonel sürücüler ve kişiye özel hizmetlerle her yolculuk bir deneyim haline gelir."
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
