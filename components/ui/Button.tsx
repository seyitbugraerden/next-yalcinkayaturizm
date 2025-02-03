import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

const Button = () => {
  return (
    <div className="border rounded-full bg-primary border-none ps-4 py-1 group">
      <Link
        href="#"
        className="flex flex-row items-center gap-4 hover:!text-white"
      >
        <span className="text-md">İncele</span>
        <div className="bg-white p-3 rounded-full group-hover:bg-primary transition duration-200">
          <FaPaperPlane className="text-primary group-hover:text-white transition duration-200" />
        </div>
      </Link>
    </div>
  );
};

export default Button;
