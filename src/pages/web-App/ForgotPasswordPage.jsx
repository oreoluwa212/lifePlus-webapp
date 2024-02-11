import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Demo from "../../components/Demo";

const ForgotPasswordPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mds:absolute mds:flex mds:flex-row h-[80vh] border-t-2 border-red bg-[#fafafa] w-full">
        <div className="mds:w-full absolute mds:relative top-0 mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center">
          <div className=" lgss:flex xs:flex flex-col shadow-lg shadow-gray-400/50 bg-white lgss:w-[50%] lgss:h-[65%] rounded-[32px] mds:justify-center mds:items-center mds:gap-9 xs:gap-8">
            <div className="lgss:flex lgss:flex-col mds:gap-4 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Reset Your Password
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black text-gold font-semibold">
                Enter your email address and we will send you a link to reset
                your password
              </h3>
            </div>
            <form action="" className="mds:w-[90%] lgss:w-[60%] w-[100%] justify-between mds:flex mds:flex-col mds:gap-6">
            <div>
              <input
                type="text"
                className="h-[48px] mt-5 mds:w-[100%] w-[100%] justify-center items-center bg-transparent border-gold border-2 placeholder:text-gold pl-4 rounded-[32px] text-[1.2rem] outline-none"
                placeholder="Email address"
              />
              <Link to={"/new-password"}>
                <button className="h-[48px] mt-6 mds:mt-8 w-[100%] mds:w-[100%] flex justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]">
                  Submit Email
                </button>
              </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
