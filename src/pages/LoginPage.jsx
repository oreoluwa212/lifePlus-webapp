import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";

const LoginPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mds:flex mds:flex-row h-screen border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 hidden mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-start mds:mt-[5%] mds:items-center">
          <div className="lgss:w-full lgss:flex flex-col lgss:justify-start lgss:items-center lgss:gap-16">
            <div className="lgss:flex lgss:flex-col lgss:gap-6 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">Login to LifePlus</h1>
              <h3 className="lgss:text-[18px] lgss:w-[55%] lgss:text-center">Enter your details to sign in to your account</h3>
            </div>
            <div className="mds:w-[60%] w-[65%] justify-between lgss:flex lgss:flex-col lgss:gap-6">
              <input type="text" placeholder='email' className='bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]' />
              <input type="password" placeholder='password' className='bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]' />
              <div className="lgss:flex lgss:justify-between lgss:items-center">
                <div className="lgss:flex px-4 lgss:gap-4 lgss:mt-2">
                  <input type="checkbox" name="" id="" />
                  <p>Remember me</p>
                </div>
                <div className=" lgss:px-4">
                  <button>Forgot password?</button>
                </div>
              </div>
              <Link to={'/dashboard'}>
                <button type="text" placeholder='password' className='bg-red text-white text-[18px] lgss:w-[100%] border-none rounded-[32px] lgss:px-8 lgss:h-[48px]'>
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
