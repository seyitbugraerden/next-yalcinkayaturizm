import Image from "next/image";
import Link from "next/link";

const WhoAreWe = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-4 max-w-8xl mx-auto lg:pb-20">
      <div className="flex-1 order-2 lg:order-1">
        <Image
          src="/about.webp"
          alt="Biz Kimiz"
          width={600}
          height={200}
          className="rounded-xl shadow-xl shadow-black/70 object-cover h-full lg:h-[500px]"
        />
      </div>
      <div className="flex-1 order-1 lg:order-2 flex">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
          <div className="px-3 py-2 border rounded-xl text-primary bg-primary/30 text-xs border-primary">
            Biz Kimiz?
          </div>
          <div className="text-4xl font-bold">
            Ankara&apos;da Güvenli ve Konforlu Ulaşım Hizmetleri
          </div>
          <div className="mt-4 text-justify">
            <p className="text-sm text-black/50">
              Yalçınkaya Turizm olarak Ankara&apos;da otobüs, minibüs, midibüs ve VIP
              araçlarla havaalanı transferi, gezi turları, düğün ve nişan
              organizasyonları için araç temini hizmeti sunuyoruz. Şirket
              misafirlerinizin karşılanması ve transfer süreçleri, deneyimli
              kadromuz ve konforlu araç filomuzla güvenle
              gerçekleştirilmektedir.
            </p>{" "}
            <br />
            <p className="text-sm text-black/50">
              Ayrıca, öğrenci ve personel servisi hizmetlerinde, araç takip
              sistemli ve kameralı güvenli taşıma seçenekleriyle çocuklarınızın
              ve çalışanlarınızın ulaşımını sağlıyoruz. Resmi kurumlar ve özel
              şirketler için binek araç, minibüs, midibüs, panel van ve 4x4
              pick-up kiralama hizmeti sunmaktayız.
            </p>{" "}
            <br />
            <p className="text-sm text-black/50">
              Ankara&apos;da uygun fiyatlı, güvenli ve konforlu ulaşım çözümleri için
              Yalçınkaya Turizm&apos;i tercih edin!
            </p>{" "}
            <br />
            <Link href="#" className="text-sm text-black/50">
              İletişim için hemen arayın!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
