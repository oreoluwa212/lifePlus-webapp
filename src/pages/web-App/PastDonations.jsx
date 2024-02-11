import React from 'react'
import Header from '../../components/web-App/Header'
import SideBar from '../../components/web-App/SideBar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PastDonations = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className="lgss:w-4/5 lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          <Header />
          <div className="mt-[50px] text-[34px] text-gold font-semibold px-4 lgss:px-0">
            <h1 className="lgss:flex items-center gap-2">
              Donations{" "}
              <span className="text-[20px] font-light">
                <FaAngleRight />
              </span>
              <p className="text-[20px] font-normal">
                Donations History
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastDonations