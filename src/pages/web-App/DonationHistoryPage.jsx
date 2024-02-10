import React from 'react'
import SideBar from '../../components/web-App/SideBar'
import Header from '../../components/web-App/Header';
import DetailsCard from '../../components/web-App/DetailsCard';
import DashboardCard from '../../components/web-App/DashboardCard';
import { PiBinocularsFill, PiLadderSimpleFill, PiMapPinFill } from 'react-icons/pi';

const DonationHistoryPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" w-4/5 h-full overflow-auto lgss:px-[4%]">
        <Header />
        <div className="mt-[50px] text-[34px] text-gold font-semibold px-4 lgss:px-0">
          <h1>Donations</h1>
        </div>
        <DetailsCard />
        <>
          <div className="flex flex-col justify-center items-center lgss:h-[350px] lgss:mt-[2rem]">
            <div className=" flex flex-col gap-10 justify-center items-center lgss:grid lgss:grid-cols-3 lgss:gap-8">
              <DashboardCard
                title="Donation History"
                icon={<PiLadderSimpleFill />}
              />
              <DashboardCard
                title="Track Donations"
                icon={<PiBinocularsFill />}
              />

              <DashboardCard
                title="Blood centres & drives"
                icon={<PiMapPinFill />}
              />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default DonationHistoryPage