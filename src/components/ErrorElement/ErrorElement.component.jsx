import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";

const ErrorElement = () => {
  return (
    <div className=" bg-[#08555C] rounded-xl h-min m-44 p-8 w-1/2 ">
      <Link
        className="text-2xl flex flex-row items-center hover:text-[#06F7F7]"
        to="/aptosjobboard/"
      >
        <HiArrowNarrowLeft className="mr-2 text-lg" />
        Go to Homepage
      </Link>
      <p className="flex flex-row items-center text-8xl my-5">
        404
        <RiErrorWarningLine className="ml-2 text-6xl" />
      </p>
      <p className="text-xl">Page Not Found</p>
    </div>
  );
};

export default ErrorElement;
