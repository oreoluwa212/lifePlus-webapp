import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";

const LoginPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mds:flex mds:flex-row h-screen border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 hidden mds:h-full overflow-auto"></div>
      </div>
    </div>
  );
};

export default LoginPage;
