import AboutCard from "@/components/ui/AboutCard";
import Banner from "@/components/ui/Banner";
import { mission } from "@/lib/data";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.genel_bakis.meta_title,
  description: metadatas.genel_bakis.meta_description,
  alternates: { canonical: metadatas.genel_bakis.canonical },
};

const page = () => {
  return (
    <>
      <Banner title="Hakkımızda" />
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
      <section className="bg-bg_sec mb-[1px]">
        <h3 className="uppercase text-white text-center text-4xl font-bold mb-12">
          Misyon - Vizyon
        </h3>
        <div className="flex flex-col gap-12 lg:flex-row items-stretch max-w-6xl mx-auto">
          {mission.map((_, index) => (
            <AboutCard key={index} features={_} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
