import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className=" bg-[#08555C] rounded-xl h-min m-44 p-8 w-1/4 ">
      <Link className="text-xl " to="/">
        Go to Homepage
      </Link>
      <p className="text-8xl my-5">404</p>
      <p className="text-xl">Page Not Found</p>
    </div>
  );
};

export default ErrorElement;
