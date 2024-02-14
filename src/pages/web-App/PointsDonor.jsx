import React from 'react'
import SideBar from '../../components/web-App/SideBar';
import ForumHeader from '../../components/web-App/ForumHeader';
import { points } from '../../assets';

const PointsDonor = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-12">
        <ForumHeader currentUser={loggedInUser} />
        <div className="flex gap-9 mt-10 lgss:mt-4 px-[5%] mds:px-0 w-full">
          <div className="flex flex-col justify-between lgss:gap-5 lgss:items-center ">
            <div className="">
              <img src={points} alt="" />
            </div>
            <div className="">
              <p>
                Collect your favorite rewards in one place. Start redeeming your
                rewards.
              </p>
            </div>
            <button
              type="submit"
              className="h-[48px] lgss:mt-6 mt-4 mds:mt-0 w-[100%] mds:w-[70%] flex justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]"
            >
              Redeem Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PointsDonor