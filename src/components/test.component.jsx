import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./JobDescription.styles.css";
import BreadCrumbs from "./BreadCrumbs.coponent";
import { VscLoading } from "react-icons/vsc";

export const Test = () => {
  let location = useLocation();
  location = location.pathname;
  const data = useLoaderData();
  console.log(data);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  if (isVisible === false) {
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="flex justify-center items-center h-screen text-2xl ">
          <VscLoading className="animate-spin-faster text-5xl font-extrabold mr-2" />
        </div>
      </div>
    );
  }

  return (
    isVisible && (
      <div>
        <BreadCrumbs location={location} />
        <div className="text-white text-xl mx-44 ">
          <h1>{data.title}</h1>
          <p>Location: {data.location.name}</p>
          <div
            dangerouslySetInnerHTML={{ __html: parse(data.content) }}
            className="text-justify my-4"
          />
        </div>
      </div>
    )
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
