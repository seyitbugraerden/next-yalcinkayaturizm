import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SectionTitle = ({ title, mainTitle, description }: sectionTitleTypes) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="px-3 py-2 border rounded-xl uppercase text-primary bg-primary/30 border-primary text-xs flex flex-row items-center gap-1">
        <MdKeyboardArrowRight /> {title} <MdKeyboardArrowLeft />
      </div>
      <div className="text-4xl font-bold">{mainTitle}</div>
      <p className="text-sm text-black/50 mt-4 max-w-2xl text-center">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
