import { FaRegClock } from "react-icons/fa";
import { FaArrowsToDot, FaHelmetSafety } from "react-icons/fa6";
import { GiPillow } from "react-icons/gi";
const OfferCard = ({ features }: offerCardTypes) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-[#FAFAFA] p-5 border border-transparent group transition duration-200 cursor-default rounded-xl">
      <div>
        <div className="rounded-full inline-block bg-primary p-3 group-hover:bg-bg_sec transition duration-200">
          {features.icon === "safety" && <FaHelmetSafety />}
          {features.icon === "comfort" && <GiPillow />}
          {features.icon === "clock" && <FaRegClock />}
          {features.icon === "flex" && <FaArrowsToDot />}
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-1 text-black">
        <div className="text-xl font-semibold">{features.title}</div>
        <p className="font-light text-sm text-black/80">
          {features.description}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
