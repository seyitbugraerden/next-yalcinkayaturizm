import AboutCard from "@/components/ui/AboutCard";
import Banner from "@/components/ui/Banner";
import OfferCard from "@/components/ui/OfferCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features, mission } from "@/lib/data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Banner title="Filo Kiralama" />
      <section className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/about.webp"
          alt="Biz Kimiz"
          width={600}
          height={200}
          className="rounded-xl shadow-xl shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
        <div>
          <h2 className="uppercase text-primary text-4xl font-bold mb-4">
            Biz Kimiz?
          </h2>
          <p className="flex-1 text-text">
            <strong>Net Seyahat Turizm Ltd. Şti</strong> olarak turizm ve
            taşımacılık sektöründe uzmanlaşmış bir ekip ile sahip olduğumuz
            bütün tecrübeyi bir araya getirerek siz değerli müşterilerimize
            hizmet vermekten mutluluk duyarız. çıkmış olduğumuz bu yolda başlıca
            ilkelerimiz, kalite, güven ve devamlılıktır bu ilkeler doğrultusunda
            sizlere; şehir içi ve şehir dışı, ulaşım ve transfer faliyetlerini,
            otobüs, minibüs, midibüs, vip minibüs ve vip otomobil araçlar ile
            hizmet vermekteyiz. Hizmetlerimiz resmi ve özel kurumların şehir içi
            ve şehir dışındaki ulaşım faaliyetlerini, personel ve öğrenci servis
            taşıma işlemlerini. Özel ve resmi kurum kuruluşların binek otomobil,
            4x4 pick-up, hafif ticari araç ihtyaçlarını karşılamayı
            kapsamaktadır. Başarı ve devamlılığın teminatı hizmette dürüstlük ve
            kalitedir. Bu prensibi ilke olarak benimseyen Net Seyahat Turizm
            olarak göstermiş olduğunuz yakın ilgi ve desteğinizden ötürü
            teşekkür ederek, sizlere bugün ve gelecekte hizmet vermekten gurur
            duyarız.
          </p>
        </div>
      </section>
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
    </>
  );
};

export default page;
