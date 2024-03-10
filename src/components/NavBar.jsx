import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className="flex bg-[#fafafa] text-white items-center justify-between h-[100px] w-[100%] px-[5%]">
      <Link to={"/"}>
        <h1 className="text-black text-[36px] font-semibold">
          Life<span className="text-red">Plus</span>
        </h1>
      </Link>
      <div className="flex justify-between gap-6">
        <button
          onClick={() => { navigate("/login-as") }}
          className={`rounded-[16px] shadow-sm border-red border-[1px] shadow-black flex justify-center items-center h-[48px] w-[80px] lgss:w-[130px] ${pathname.includes("/login")
            ? "bg-red rounded-[14px] text-white"
            : "bg-transparent text-black"
            }`}
        >
          Log In
        </button>
        <button
          onClick={() => { navigate("/signup") }}
          className={`bg-red rounded-[16px] shadow-sm border-white border-[1px] shadow-black flex justify-center items-center h-[48px]  w-[80px] lgss:w-[130px] ${pathname.includes("/login")
            ? "bg-transparent text-black"
            : "bg-red text-white "
            }`}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default NavBar;
