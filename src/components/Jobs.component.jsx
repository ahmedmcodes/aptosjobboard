import { useEffect, useState } from "react";
import logo from "../assets/aptos-logo.svg";
import { Link, Outlet } from "react-router-dom";

const Jobs = () => {
  const [openJobs, setOpenJobs] = useState([]);

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
      <div className="flex justify-center items-center h-screen">loading</div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {openJobs.map((item) => (
          <div className="bg-red-500 m-4 flex flex-row p-4" key={item.id}>
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
      <Outlet />
    </>
  );
};

export default Jobs;
