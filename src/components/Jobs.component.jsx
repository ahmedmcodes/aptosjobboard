import { useEffect, useState } from "react";
import logo from "../assets/aptos-logo.svg";
import { Link, Outlet } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import BreadCrumbs from "./BreadCrumbs.coponent";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const [openJobs, setOpenJobs] = useState([]);
  const [jobsToLoad, setJobsToLoad] = useState(9);
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

  const jobsToShow = openJobs.slice(0, jobsToLoad);
  const loadJobs = () => {
    setJobsToLoad(9 + jobsToLoad);
  };
  if (openJobs[0] === undefined) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl ">
        <VscLoading className="animate-spin-faster text-5xl font-extrabold mr-2" />
      </div>
    );
  }

  return (
    <div className="bg-Aptos-black">
      <BreadCrumbs location={location} />
      <div className="flex flex-col mx-44">
        {jobsToShow.map((item) => (
          <div
            className=" m-4  flex flex-row bg-[#08555C] p-6 rounded-lg"
            key={item.id}
          >
            <div className="self-center">
              <img src={logo} alt="logo" className="w-6" />
            </div>
            <div className="mx-4">
              <h3 className="text-lg">{item.title}</h3>
              <a href="https://aptoslabs.com" target="_blank">
                Aptos Labs
              </a>
              <p className="text-sm">{item.location.name}</p>
            </div>
            <div className="self-center ml-auto ">
              <Link to={`${item.id}`} className="hover:text-[#06F7F7]">
                Read More
              </Link>
            </div>
          </div>
        ))}
        {jobsToShow.length === openJobs.length ? null : (
          <button
            className="my-4 border px-8 py-3 bg-white  border-white text-black hover:bg-[#06F7F7]  hover:cursor-pointer w-fit m-auto font-bold"
            onClick={loadJobs}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
