import React from 'react'
import SideBar from '../../components/web-App/SideBar'
import Header from '../../components/web-App/Header';

const AppointmentsPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" w-4/5 h-full overflow-auto lgss:px-[4%]">
        <Header />
        <div className="mt-[50px] text-[34px] text-gold font-semibold">
          Appointments
        </div>
      </div>
    </div>
  );
}

export default AppointmentsPage