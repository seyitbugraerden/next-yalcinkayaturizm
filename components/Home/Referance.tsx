import ReferanceSwiper from "../ui/ReferanceSwiper";

const Referance = () => {
  return (
    <section>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="px-3 py-2 border rounded-xl text-primary bg-primary/30 border-primary text-xs">
          Referanslarımız
        </div>
        <div className="text-4xl font-bold">Lorem ipsum dolor sit.</div>
        <p className="text-sm text-white/70 mt-4 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          vero atque quae possimus debitis nemo reiciendis repudiandae ex
          accusantium sunt?
        </p>
      </div>
      <ReferanceSwiper />
    </section>
  );
};

export default Referance;
