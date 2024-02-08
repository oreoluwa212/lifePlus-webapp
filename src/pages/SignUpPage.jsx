import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mds:flex mds:flex-row h-screen border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 hidden mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center">
          <div className="lgss:w-full lgss:flex flex-col lgss:justify-center lgss:items-center ">
            <h1 className="text-gold text-[30px]">Sign Up for LifePlus</h1>
            <div className="mds:w-[80%] w-[65%] justify-between lgss:flex lgss:flex-col lgss:gap-6">
              <Link to={"/login"}>
                <button className="h-[48px] lgss:w-[100%] flex justify-center items-center bg-red text-white rounded-[32px] text-[22px]">
                  Sign Up as a Donor
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="h-[48px] lgss:w-[100%] flex justify-center items-center bg-gold text-white rounded-[32px] text-[22px]">
                  Sign Up as an Healthcare Provider
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
