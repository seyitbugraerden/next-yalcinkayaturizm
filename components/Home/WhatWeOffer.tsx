import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OfferCard from "../ui/OfferCard";

const WhatWeOffer = () => {
  const features = [
    {
      icon: "safety",
      title: "Güvenli Seyahat",
      description:
        "Deneyimli şoförlerimiz ve düzenli bakımdan geçen araçlarımız ile yolculuklarınızı güvenle gerçekleştirin.",
    },
    {
      icon: "comfort",
      title: "Konforlu Ulaşım",
      description:
        "Geniş, modern ve donanımlı araçlarımızla rahat ve keyifli bir seyahat deneyimi yaşayın.",
    },
    {
      icon: "clock",
      title: "Planlı Hizmet",
      description:
        "Transfer ve taşımacılık hizmetlerimizi tam zamanında gerçekleştirerek planlarınıza sadık kalıyoruz.",
    },
    {
      icon: "flex",
      title: "Esnek Araç Seçenekleri",
      description:
        "Otobüs, minibüs, VIP araçlar ve ticari çözümlerle her ihtiyaca uygun taşımacılık hizmeti sunuyoruz.",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-bg to-bg_sec !text-white">
      <SectionTitle
        white
        title="NEDEN BİZİ SEÇMELİSİNİZ ?"
        mainTitle=""
        description=""
      />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((_, index) => (
          <OfferCard key={index} features={_} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
