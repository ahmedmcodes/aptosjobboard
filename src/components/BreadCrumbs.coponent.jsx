import { Link } from "react-router-dom";
const paths = ["/", "/jobs"];

const BreadCrumbs = ({ location }) => {
  console.log(location);
  let pathSegments = location.split("/");
  pathSegments[0] = "home";
  console.log(pathSegments);

  pathSegments.map((item) => {
    console.log(item);
  });

  return (
    // <div>hello world</div>
    <ul className="flex flex-row mx-44 ">
      {pathSegments.map((item, index) => {
        return (
          <Link
            key={index}
            to={paths[index]}
            className="after:content-['>'] last:after:content-[''] "
          >
            {item}
          </Link>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
