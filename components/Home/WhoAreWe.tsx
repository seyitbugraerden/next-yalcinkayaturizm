import Image from "next/image";
import Link from "next/link";

const WhoAreWe = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-12 max-w-8xl mx-auto lg:pb-20">
      <div className="flex-1 order-2 lg:order-1">
        <Image
          src="/about.webp"
          alt="Biz Kimiz"
          width={600}
          height={200}
          className="rounded-xl shadow-xl shadow-black/70 object-cover h-full lg:h-[450px] max-w-[90%] mx-auto"
        />
      </div>
      <div className="flex-1 order-1 lg:order-2 flex">
        <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
          <div className="uppercase text-primary text-4xl font-bold">
            Biz Kimiz?
          </div>
          <div className="text-4xl font-bold"></div>
          <div className="mt-4 text-justify">
            <p className="text-sm text-[#575757]">
              <strong>Yalçınkaya</strong> Net Turizm Ltd. Şti olarak turizm ve
              taşımacılık sektöründe uzmanlaşmış bir ekip ile sahip olduğumuz
              bütün tecrübeyi bir araya getirerek siz değerli müşterilerimize
              hizmet vermekten mutluluk duyarız. Çıkmış olduğumuz bu yolda
              başlıca ilkelerimiz, kalite, güven ve devamlılıktır bu ilkeler
              doğrultusunda sizlere; şehir içi ve şehir dışı, ulaşım ve transfer
              faaliyetlerini, otobüs, minibüs, midibüs, VIP minibüs ve VIP
              otomobil araçlar ile hizmet vermekteyiz. <br /> <br />{" "}
              Hizmetlerimiz resmi ve özel kurumların şehir içi ve şehir
              dışındaki ulaşım faaliyetlerini ve personel servis taşıma
              işlemlerini; özel ve resmi kurum kuruluşların binek otomobil, 4x4
              pick-up, hafif ticari araç ihtiyaçlarını karşılamayı
              kapsamaktadır. <br /> <br /> Başarı ve devamlılığın teminatı
              hizmette dürüstlük ve kalitedir. Bu prensibi ilke olarak
              benimseyen <strong>Yalçınkaya</strong> Net Turizm olarak göstermiş
              olduğunuz yakın ilgi ve desteğinizden ötürü teşekkür ederek,
              sizlere bugün ve gelecekte hizmet vermekten gurur duyarız.
            </p>

            <br />
            <Link
              href="tel:+905323445502"
              className="text-sm text-[#575757] font-semibold"
            >
              İletişim için hemen arayın!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
