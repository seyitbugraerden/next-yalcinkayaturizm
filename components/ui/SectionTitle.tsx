const SectionTitle = ({
  title,
  mainTitle,
  description,
  white,
}: sectionTitleTypes) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div
        className={`"px-3 py-2 uppercase text-primary text-4xl font-bold flex flex-row items-start text-center gap-2 ${
          white && "!text-white"
        }`}
      >
        {title}
      </div>
      <div className="text-4xl font-bold">{mainTitle}</div>
      <p
        className={`text-sm mt-4 max-w-2xl text-center ${
          white ? "text-white/80" : "text-black/50"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
