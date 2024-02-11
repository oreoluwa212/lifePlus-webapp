import React from 'react'
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

const CreateNewPassword = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mds:absolute mds:flex mds:flex-row h-[80vh] border-t-2 border-red bg-[#fafafa] w-full">
        <div className="mds:w-full absolute mds:relative top-0 mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center">
          <div className=" lgss:flex xs:flex flex-col shadow-lg shadow-gray-400/50 bg-white lgss:w-[50%] lgss:h-[75%] rounded-[32px] mds:justify-center mds:items-center mds:gap-9 xs:gap-8">
            <div className="lgss:flex lgss:flex-col mds:gap-4 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Create a New Password
              </h1>
            </div>
            <form action="" className="mds:w-[90%] lgss:w-[60%] w-[100%] justify-between mds:flex mds:flex-col mds:gap-6">
              <div className="">
                <label htmlFor="NewPassword" className="font-semibold">
                  New Password
                </label>
                <input
                  type="text"
                  name="NewPassword"
                  className="h-[48px] mds:w-[100%] w-[100%] justify-center items-center bg-transparent border-gold border-2 placeholder:text-gold pl-4 rounded-[32px] text-[1.2rem] outline-none"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="">
                <label htmlFor="ConfirmPassword" className="font-semibold">
                  Confirm Password
                </label>
                <input
                  type="text"
                  name="ConfirmPassword"
                  className="h-[48px] mds:w-[100%] w-[100%] justify-center items-center bg-transparent border-gold border-2 placeholder:text-gold pl-4 rounded-[32px] text-[1.2rem] outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <Link to={"/dashboard"}>
                <button className="h-[48px] lgss:mt-6 mt-4 mds:mt-0 w-[100%] mds:w-[100%] flex justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]">
                  Create New Password
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword