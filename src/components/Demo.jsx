import React from "react";
import { signImg } from "../assets";

const Demo = () => {
  return (
    <div className=" mds:w-2/5 w-full mds:h-screen">
      <img className="h-[100%] w-full mds:h-[100%]" src={signImg} alt="" />
    </div>
  );
};

export default Demo;
