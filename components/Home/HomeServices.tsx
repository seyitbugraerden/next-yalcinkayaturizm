import React from "react";
import SectionTitle from "../ui/SectionTitle";
import HomeSwiper from "../ui/HomeSwiper";

const HomeServices = () => {
  return (
    <section>
      <SectionTitle
        title="Hizmetlerimiz"
        mainTitle="Özel VIP Araç Hizmetleri"
        description="Konforlu ve güvenli yolculuklar için sunduğumuz şoförlü VIP araç çözümleriyle her anınızı daha prestijli hale getiriyoruz."
      />
      <HomeSwiper />
    </section>
  );
};

export default HomeServices;
