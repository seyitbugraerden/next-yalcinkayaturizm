import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

const Button = () => {
  return (
    <div className="border rounded-lg bg-primary border border-transparent px-4 py-2 group hover:bg-bg transition duration-200 hover:border-primary">
      <Link
        href="#"
        className="flex flex-row items-center gap-2 hover:!text-white"
      >
        <span className="text-md">İncele</span>
        <FaPaperPlane className="text-white transition duration-200" />
      </Link>
    </div>
  );
};

export default Button;
