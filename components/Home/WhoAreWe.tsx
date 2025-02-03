import Image from "next/image";

const WhoAreWe = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-4 max-w-8xl mx-auto">
      <div className="flex-1 order-2 lg:order-1">
        <Image
          src="https://picsum.photos/600/600"
          alt="Biz Kimiz"
          width={600}
          height={200}
          className="rounded-xl shadow-xl shadow-black/70"
        />
      </div>
      <div className="flex-1 order-1 lg:order-2 flex">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
          <div className="px-3 py-2 border rounded-xl text-primary bg-primary/30 text-xs border-primary">
            Biz Kimiz?
          </div>
          <div className="text-4xl font-bold">Lorem ipsum dolor sit.</div>
          <div className="mt-4 text-justify">
            <p className="text-sm text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ab corrupti perspiciatis distinctio praesentium eligendi fugiat
              dolores repudiandae sapiente quas possimus harum non repellat
              vero, magni velit voluptates id dicta quod adipisci? Nesciunt,
              soluta. Excepturi corrupti voluptate et vero hic.
            </p>{" "}
            <p className="text-sm text-black/50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              voluptas nisi ullam fugiat consequatur, commodi facere aperiam
              porro beatae natus nulla dignissimos quasi quidem necessitatibus
              totam assumenda animi sit laborum sint in id impedit repudiandae
              maxime. Voluptatem quam tenetur non?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
