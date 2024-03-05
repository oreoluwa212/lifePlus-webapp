import React from "react";
import { signImg } from "../assets";

const Demo = () => {
  return (
    <div className=" mds:w-2/5 w-full h-full">
      <img className=" w-full bg-cover h-[100%]" src={signImg} alt="" />
    </div>
  );
};

export default Demo;
