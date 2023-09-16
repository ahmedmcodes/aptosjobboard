import { Outlet } from "react-router-dom";
import logo from "../assets/Aptos_Primary_WHT (1).svg";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between m-8 text-white text-xl ">
        <img src={logo} alt="logo" className="w-24" />
        <ul className=" flex text-3xl">
          <li className="mx-4">Build</li>
          <li className="mx-4">Connect</li>
          <li className="mx-4">Explore</li>
        </ul>
        <div className=" border px-6 py-1.5 hover:text-[#06F7F7] hover:border-[#06F7F7] hover:cursor-pointer">
          Post a Job
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
