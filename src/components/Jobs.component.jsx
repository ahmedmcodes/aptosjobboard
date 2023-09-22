import { useEffect, useState } from "react";
import logo from "../assets/aptos-logo.svg";
import { Link, Outlet } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import BreadCrumbs from "./BreadCrumbs.coponent";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const [openJobs, setOpenJobs] = useState([]);
  let location = useLocation();
  location = location.pathname;

  useEffect(() => {
    fetch(
      "https://boards-api.greenhouse.io/v1/boards/aptoslabs/jobs?content=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOpenJobs(data.jobs);
      });
  }, []);
  console.log(openJobs);

  if (openJobs[0] === undefined) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl ">
        <VscLoading className="animate-spin-faster text-5xl font-extrabold mr-2" />
      </div>
    );
  }

  return (
    <div clas>
      <BreadCrumbs location={location} />
      <div className="flex flex-col items-center justify-center">
        {openJobs.map((item) => (
          <div className=" m-4 flex flex-row p-4" key={item.id}>
            <div>
              <img src={logo} alt="logo" className="w-6" />
            </div>
            <div className="mx-4">
              <h3>{item.title}</h3>
              <p>Aptos Labs</p>
              <p>{item.location.name}</p>
            </div>
            <Link to={`${item.id}`}>
              <div>Read More</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
