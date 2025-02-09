import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ linkEl }: { linkEl: string }) => {
  return (
    <Link
      href={linkEl}
      className="border rounded-lg bg-primary border-transparent px-4 py-2 group hover:bg-bg transition duration-200 hover:border-primary"
    >
      <div className="flex flex-row items-center gap-2 hover:!text-white">
        <span className="text-md">İncele</span>
        <FaLongArrowAltRight className="text-white transition duration-200" />
      </div>
    </Link>
  );
};

export default Button;
