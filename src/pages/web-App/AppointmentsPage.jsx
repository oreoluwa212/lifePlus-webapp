import React from 'react'
import SideBar from '../../components/web-App/SideBar'
import Header from '../../components/web-App/Header';
import DetailsCard from '../../components/web-App/DetailsCard';
import { PiCalendarCheckFill, PiUsersFill } from 'react-icons/pi';
import DashboardCard from '../../components/web-App/DashboardCard';

const AppointmentsPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      {/* <div className="lgss:w-4/5 lgss:h-full lgss:overflow lgss:px-[4%] flex flex-col justify-between ">
        <Header />
        <div className="mt-[50px] text-[34px] text-gold font-semibold">
          <h1>Appointments</h1>
        </div>
          <DetailsCard />
        <div className="">
          <div className="flex flex-col justify-center items-center lgss:pt-8 pt-4">
            <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
              <DashboardCard title="Manage Profile" icon={<PiUsersFill />} />

              <DashboardCard
                title="Leadership board & Challenges"
                icon={<PiCalendarCheckFill />}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className=" w-4/5 h-full overflow-auto lgss:px-[4%]">
        <Header />
        <div className="mt-[50px] text-[34px] text-gold font-semibold px-4 lgss:px-0">
          <h1>Appointments</h1>
        </div>
        <DetailsCard />
        <>
          <div className="flex flex-col justify-center items-center lgss:h-[350px] lgss:mt-[2rem]">
            <div className=" flex flex-col gap-10 justify-center items-center lgss:grid lgss:grid-cols-3 lgss:gap-8">
              <DashboardCard
                title="Track Donations"
                icon={<PiUsersFill />}
              />

              <DashboardCard
                title="Blood centres & drives"
                icon={<PiCalendarCheckFill />}
              />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default AppointmentsPage