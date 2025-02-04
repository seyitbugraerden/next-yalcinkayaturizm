import { IoMdCar } from "react-icons/io";

const OfferCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-[#FAFAFA] p-5 border border-transparent group transition duration-200 cursor-default rounded-xl">
      <div>
        <div className="rounded-full inline-block bg-primary p-3 group-hover:bg-bg_sec transition duration-200">
          <IoMdCar />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-1 text-black">
        <div className="text-xl font-semibold">Profesyonel Sürücüler</div>
        <p className="font-light text-sm text-black/80">
          Deneyimli ve güvenilir sürücülerimizle güvenli ve rahat bir seyahat
          deneyimi.
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
