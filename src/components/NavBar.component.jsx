import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/Aptos_Primary_WHT (1).svg";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between m-8 text-white text-xl ">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-24" />
          </NavLink>
          <ul className=" flex text-2xl">
            <li className="mx-4">Build</li>
            <li className="mx-4">Connect</li>
            <NavLink to="jobs">
              <li className="mx-4">Explore</li>
            </NavLink>
          </ul>
          <div className=" border px-6 py-1.5 hover:text-[#06F7F7] hover:border-[#06F7F7] hover:cursor-pointer">
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
