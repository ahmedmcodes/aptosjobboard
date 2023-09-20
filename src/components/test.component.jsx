import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./JobDescription.styles.css";

export const Test = () => {
  const [jobs, setJobs] = useState({});

  console.log(jobs);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="text-white text-xl mx-44 ">
      <h1>{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: parse(data.content) }}
        className="text-justify"
      />
    </div>
  );
};

export const careerLoader = async ({ params }) => {
  let { id } = params;

  const data = await fetch(
    `https://boards-api.greenhouse.io/v1/boards/aptoslabs/jobs/${id}?content=true`
  );

  if (data.status === 404) {
    throw new Response("Not Found");
  }
  return data.json();
};
