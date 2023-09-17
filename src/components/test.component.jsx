import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

export const Test = () => {
  let { id } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://boards-api.greenhouse.io/v1/boards/aptoslabs/jobs?content=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJobs(data.jobs);
      });
  }, []);
  console.log(jobs);
  const filteredJob = jobs.filter((item) => {
    return item.internal_job_id == id;
  });

  console.log(filteredJob);

  if (filteredJob[0] === undefined) {
    return <div>loading</div>;
  }
  console.log(filteredJob);

  return (
    <div className="text-white text-3xl">
      <div
        dangerouslySetInnerHTML={{ __html: parse(filteredJob[0].content) }}
      />
    </div>
  );
};
