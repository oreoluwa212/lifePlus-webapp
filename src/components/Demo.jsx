import React from "react";
import { signImg } from "../assets";

const Demo = () => {
  return (
    <div className=" mds:w-2/5 w-full h-screen">
      <img className="h-screen w-full bg-cover mds:h-[100%]" src={signImg} alt="" />
    </div>
  );
};

export default Demo;
