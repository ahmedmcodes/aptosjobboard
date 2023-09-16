import { useEffect, useState } from "react";
import logo from "../assets/aptos-logo.svg";

const Jobs = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://boards-api.greenhouse.io/v1/boards/aptoslabs/jobs?content=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data.jobs);
      });
  }, []);
  console.log(state);

  return (
    <div className="flex flex-col items-center justify-center">
      {state &&
        state.map((item) => (
          <div className="bg-red-500 m-4 flex flex-row p-4" key={item.id}>
            <div>
              <img src={logo} alt="logo" className="w-6" />
            </div>
            <div className="mx-4">
              <h3>{item.title}</h3>
              <p>Aptos Labs</p>
              <p>{item.location.name}</p>
            </div>
            <div>Read More</div>
          </div>
        ))}
    </div>
  );
};

export default Jobs;
