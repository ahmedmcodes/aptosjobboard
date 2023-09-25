import { Outlet, NavLink } from "react-router-dom";
import logo from "../../assets/Aptos_Primary_WHT (1).svg";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between py-4 px-6 border-b border-white  text-white text-xl  ">
          <NavLink to="/" className="flex flex-row">
            <img src={logo} alt="logo" className="w-24" />
            <p className="ml-2 text-md">Board</p>
          </NavLink>
          <ul className=" flex text-xl items-center  ">
            <li className="mx-6 hover:text-[#06F7F7] ">Build</li>
            <li className="mx-6 hover:text-[#06F7F7]">Connect</li>
            <NavLink to="jobs">
              <li className="mx-6 hover:text-[#06F7F7]">Explore</li>
            </NavLink>
          </ul>
          <div className="text-md border px-4 py-1 mb-1 hover:text-[#06F7F7] hover:border-[#06F7F7] hover:cursor-pointer">
            Post a Job
          </div>
        </nav>
      </header>
      <main className="bg-main">
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
