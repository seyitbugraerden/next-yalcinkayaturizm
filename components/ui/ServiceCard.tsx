import Image from "next/image";

const ServiceCard = ({ text }: homeServiceTypes) => {
  return (
    <div className="rounded-xl group shadow-md shadow-black/70 relative h-[430px] w-full overflow-hidden">
      <div className="bg-white group-hover:bg-primary group-hover:text-white transition duration-200 py-4 px-3 z-10 w-[90%] rounded-xl absolute bottom-4 left-4 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1 items-start justify-start">
          <h4 className="text-xl font-semibold  line-clamp-1">{text}</h4>
        </div>
      </div>
      <Image
        src="/service.webp"
        alt="Service Image"
        fill
        className="absolute top-0 left-0 z-0 object-cover brightness-75"
      />
    </div>
  );
};

export default ServiceCard;
