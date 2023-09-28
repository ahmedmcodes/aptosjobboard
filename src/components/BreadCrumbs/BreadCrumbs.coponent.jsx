import { Link } from "react-router-dom";
const paths = ["/aptosjobboard/", "/aptosjobboard/jobs"];

const BreadCrumbs = ({ location }) => {
  let pathSegments = location.split("/");
  const filteredSegements = pathSegments.filter((item) => item !== "");
  console.log(pathSegments);
  console.log(filteredSegements);
  return (
    <ul className="flex flex-row mx-44 my-2 text-xl p-4 ">
      {filteredSegements.map((item, index) => {
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
