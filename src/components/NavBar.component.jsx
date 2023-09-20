import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/Aptos_Primary_WHT (1).svg";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between m-8 text-white text-xl border-b border-[#06F7F7] ">
          <NavLink to="/" className="flex flex-row">
            <img src={logo} alt="logo" className="w-24" />
            <p className="ml-2 mt-1 text-md">Board</p>
          </NavLink>
          <ul className=" flex text-2xl">
            <li className="mx-4">Build</li>
            <li className="mx-4">Connect</li>
            <NavLink to="jobs">
              <li className="mx-4">Explore</li>
            </NavLink>
          </ul>
          <div className=" border px-6 py-1.5 mb-1 hover:text-[#06F7F7] hover:border-[#06F7F7] hover:cursor-pointer">
            Post a Job
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
