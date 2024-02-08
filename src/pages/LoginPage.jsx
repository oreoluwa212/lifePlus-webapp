import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar';

const LoginPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-row bg-red h-screen">
        <SideBar />
        <div className=" w-4/5 h-full overflow-auto"></div>
      </div>
    </div>
  );
}

export default LoginPage