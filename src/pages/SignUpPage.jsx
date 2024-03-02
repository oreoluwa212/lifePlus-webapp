import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <NavBar />
      <section className="relative h-[86vh] w-full mds:flex mds:flex-row border-t-2 border-red">
        <Demo />
        <div className=" mds:w-3/5 w-full absolute top-40 mds:relative mds:top-0 overflow-hidden flex flex-col justify-center items-center gap-10 text-center px-5">
          <span className="flex flex-col gap-3 mds:gap-6 items-center">
            <h1 className="text-gold font-bold text-[30px]">
              Sign Up for LifePlus
            </h1>
            <h3 className="lgss:text-[18px] mds:text-black text-gold font-semibold">
              Sign up as a donor or an healthcare provider here
            </h3>
          </span>
          <div className="w-[90%] justify-between flex flex-col gap-6">
            <Link to={"/signup-donor"}>
              <button className="h-[48px] w-[100%] mds:max-w-[400px] md:w-[100%] bg-red text-white rounded-[32px] text-[1.2rem]">
                Sign Up as a Donor
              </button>
            </Link>
            <Link to={"/signup-provider"}>
              <button className="h-[48px] w-[100%] mds:max-w-[400px] md:w-[100%] bg-gold text-white rounded-[32px] text-[1.2rem]">
                Sign Up as an Healthcare Provider
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
