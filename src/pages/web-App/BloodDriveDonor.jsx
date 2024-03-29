import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../../components/web-App/Header";
import SideBar from "../../components/web-App/SideBar";
import { donor1, map } from "../../assets";
import { get } from "../../helpers/axios.helper";

const BloodDriveDonor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bloodDrives, setBloodDrives] = useState([]);
  const [providers, setProviders] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  let ignore = false;

  const navigate = useNavigate();

  useEffect(() => {
    const getBloodDrives = async () => {
      try {
        let data = await get("/all-blood-drive");
        setBloodDrives(data);
      } catch (err) {
        console.log(error);
      }
    };
    ignore = false;
    getBloodDrives();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar isOpen={isOpen} />
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
            <h1>Donations | Track Donatiions</h1>
          </div>
          <div className="px-6 lgss:px-0">
            <img src={map} alt="" className="w-[80%]" />
          </div>
          {bloodDrives &&
            bloodDrives.map((bloodDrive) => {
              return (
                <div
                  key={bloodDrive._id}
                  className="px-6 mt-6 lgss:py-5 h-[300px] lgss:w-[80%] bg-[#F8E9E9] shadow-lg shadow-gray-400/40 flex flex-col lgss:flex-row gap-4"
                >
                  <img
                    src={donor1}
                    alt=""
                    className=" flex w-[60px] h-[50px] mds:w-[130px] mds:h-[150px]"
                  />
                  <div className="w-[90%] flex justify-between font-semibold py-2">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-[22px] text-gold ">
                        {bloodDrive.userId.facilityName}
                      </h1>
                      <h1 className="text-[20px]">{bloodDrive.title}</h1>
                      <a href="#" className="text-red underline">
                        Locate
                      </a>
                      <p>Start Date: {bloodDrive.startDate}</p>
                    </div>
                    <div className="flex flex-col w-[30%] gap-4 px-2">
                      <h1>Donor Recieve</h1>
                      <p className="text-red">
                        {bloodDrive.tokenAmount} points
                      </p>
                      <p>Deadline: {bloodDrive.endDate}</p>
                      <button
                        type="submit"
                        className="bg-red text-white text-center text-[16px] border-none rounded-[32px] lgss:px-8 lgss:h-[45px] h-[45px] lgss:w-[150px] font-medium"
                        onClick={() => {
                          navigate(
                            `/appointments/schedule/${bloodDrive.userId._id}/${bloodDrive?._id}`
                          );
                        }}
                      >
                        <p>Schedule</p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BloodDriveDonor;
