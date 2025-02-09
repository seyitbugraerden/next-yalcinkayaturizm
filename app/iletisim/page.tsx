import FormEl from "@/components/Contact/FormEl";
import Banner from "@/components/ui/Banner";
import ContactCard from "@/components/ui/ContactCard";
import { contact } from "@/lib/data";
import { metadatas } from "@/lib/tr";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.iletisim.meta_title,
  description: metadatas.iletisim.meta_description,
  alternates: { canonical: metadatas.iletisim.canonical },
};

const page = () => {
  return (
    <>
      <Banner title="İletişim" imgEl="/alt_sayfalar_slider/iletisim.webp" />
      <section className="flex flex-col lg:flex-row gap-12 items-stretch max-w-8xl mx-auto">
        {contact.map((_, index) => (
          <ContactCard key={index} features={_} />
        ))}
      </section>
      <section className="bg-bg_sec mb-[1px]">
        <h4 className="uppercase text-white text-center text-4xl font-bold mb-12">
          Bize Ulaşın
        </h4>
        <div className="flex flex-col gap-12 lg:flex-row items-center max-w-8xl mx-auto">
          <div className="flex-1 order-2 lg:order-1 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.4019147198683!2d32.826784089506916!3d39.887632914274015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3458b577674c9%3A0xe594be421c094048!2zw5Z2ZcOnbGVyLCBUZXZmaWsgRmlrcmV0IENkLiBObzoyNiwgMDY0NjAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1738866832112!5m2!1str!2str"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-xl shadow-black w-full max-w-full h-[300px] lg:h-[450px]"
            ></iframe>
          </div>
          <div className="flex-1 lg:order-2 w-full">
            <FormEl />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
