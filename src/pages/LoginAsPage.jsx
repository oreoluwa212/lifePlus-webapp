import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Demo from "../components/Demo";

function LoginAsPage() {
  return (
    <div className="">
      <NavBar />
      <div className="relative mds:absolute mds:flex mds:flex-row h-[80vh] border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 w-full absolute mds:relative top-0 mt-[5%] mds:mt-0 mds:h-full overflow-auto flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center mds:gap-16 xs:gap-8">
            <div className="flex flex-col mds:gap-6 items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Sign In to your LifePlus Account
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black text-gold font-semibold">
                Sign in as a donor or an healthcare provider here
              </h3>
            </div>
            <div className="mds:w-[70%] w-[80%] justify-between mds:flex mds:flex-col mds:gap-6">
              <Link to={"/login"}>
                <button className="h-[48px] mt-5 mds:w-[100%] w-[100%] justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]">
                  Sign In as a Donor
                </button>
              </Link>
              <Link to={"/login-provider"}>
                <button className="h-[48px] mt-6 mds:mt-0 w-[100%] mds:w-[100%] flex justify-center items-center bg-gold text-white rounded-[32px] text-[1.2rem]">
                  Sign In as an Healthcare Provider
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAsPage;