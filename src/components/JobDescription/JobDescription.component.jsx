import { useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./JobDescription.styles.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs.coponent";
import { VscLoading } from "react-icons/vsc";
import { HiArrowUpRight } from "react-icons/hi2";

export const JobDescription = () => {
  let location = useLocation();
  location = location.pathname;
  const data = useLoaderData();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  if (isVisible === false) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen text-2xl ">
          <VscLoading className="animate-spin-faster text-5xl font-extrabold mr-2" />
        </div>
      </div>
    );
  }

  return (
    isVisible && (
      <div className="mt-2 mb-4">
        <BreadCrumbs location={location} />
        <div className="text-white text-xl mx-44 p-10 bg-[#08555C] rounded-lg">
          <div className="flex flex-row justify-between ">
            <div>
              <h1 className="text-2xl">{data.title}</h1>
              <p className="text-sm">Location: {data.location.name} </p>
            </div>
            <div>
              <button className="text-sm border px-4 py-1 hover:text-[#06F7F7] hover:border-[#06F7F7] hover:cursor-pointer flex flex-row items-center">
                <a href={data.absolute_url} rel="noreferrer" target="_blank">
                  Apply Now
                </a>
                <HiArrowUpRight className="ml-2 text-xs" />
              </button>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: parse(data.content) }}
            className="text-justify my-4"
          />
        </div>
      </div>
    )
  );
};

export const jobDescriptionLoader = async ({ params }) => {
  let { id } = params;

  const data = await fetch(
    `https://boards-api.greenhouse.io/v1/boards/aptoslabs/jobs/${id}?content=true`
  );

  return data.json();
};
