import React, { useState } from 'react'
import DetailsProviderCard from '../../components/web-App/DetailsProviderCard';
import Header from '../../components/web-App/Header';
import SideBarProvider from '../../components/web-App/SideBarProvider';

const BloodDriveProvider = () => {
     const [isOpen, setIsOpen] = useState(false);
     const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-row h-screen w-full">
      <SideBarProvider isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          {loggedInUser && (
            <Header
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              currentUser={loggedInUser}
            />
          )}{" "}
          <div className="mt-[50px] lgss:mt-0 text-[34px] text-gold font-semibold px-[5%] mds:px-0">
            <h1>Donations | Blood Drive</h1>
          </div>
          {loggedInUser && <DetailsProviderCard loggedInUser={loggedInUser} />}
          <form className="mds:w-[100%] w-[100%] justify-between flex flex-col gap-6 h-[80vh] items-center bg-[#F3E4E4] mds:mt-8 mds:py-12 rounded-[32px]">
            <input
              type="text"
              name="title"
              placeholder="Title e.g Need for O+ Donors"
              className="bg-transparent border-gold border-2 rounded-[32px] mds:w-[480px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
            />
            <input
              type="text"
              name="Sdate"
              placeholder="Start Date"
              className="bg-transparent border-gold border-2 rounded-[32px] mds:w-[480px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
            />

            <input
              type="text"
              name="Edate"
              id="Edate"
              placeholder="End Date"
              className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none mds:w-[480px] placeholder:text-[18px]"
            />

            <input
              type="text"
              name="points"
              id="points"
              placeholder="Points Reward e.g 20LP Tokens"
              className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none mds:w-[480px] placeholder:text-[18px]"
            />

            <button
              type="submit"
              className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-[50%]"
            >
              Create Blood Drive
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BloodDriveProvider