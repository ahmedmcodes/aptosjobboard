import { Link } from "react-router-dom";
const paths = ["/", "/jobs"];

const BreadCrumbs = ({ location }) => {
  let pathSegments = location.split("/");
  pathSegments[0] = "home";

  return (
    <ul className="flex flex-row mx-44 my-2 text-xl p-4 ">
      {pathSegments.map((item, index) => {
        return (
          <Link
            key={index}
            to={paths[index]}
            className="last:after:content-[''] after:content-['>'] after:mx-2 capitalize hover:text-[#06F7F7]"
          >
            {item}
          </Link>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
