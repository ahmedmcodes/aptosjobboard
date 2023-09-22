import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col text-white h-screen items-center justify-center ">
      <p className="text-3xl mb-16 text-center">
        Unlock Your Potential:
        <br />
        Explore Job Opportunities in the Aptos Ecosystem
      </p>
      <Link
        to="/jobs"
        className="border px-8 py-3 bg-white  border-white text-black hover:bg-[#06F7F7]  hover:cursor-pointer w-fit"
      >
        Explore Jobs
      </Link>
    </div>
  );
};

export default Home;
