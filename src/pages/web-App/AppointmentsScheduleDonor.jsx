import React, { useState } from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  PiCalendarCheckFill,
} from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

const AppointmentsScheduleDonor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  
  const [selectedDate, setSelectedDate] = useState(null);
  
  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

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
          <div className="mt-[50px] lgss:mt-0 text-[34px] text-gold font-semibold px-[5%] mds:px-0 ">
            <h1>Appointments | Schedule</h1>
          </div>
          <div className="flex flex-col px-[4%] lgss:px-0">
            <div className="relative flex justify-between items-center bg-[#F3E4E4] mt-4 w-[80%] lgss:w-[400px] h-[50px] px-6 rounded-[32px]">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setCalendarOpen(false);
                }}
                placeholderText="Pick a Date"
                className="w-full h-full bg-[#F3E4E4] outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px]"
                open={calendarOpen}
              />
              <FaAngleDown
                className="cursor-pointer "
                onClick={toggleCalendar}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <p className="font-semibold">Select a Time</p>
              <div className="flex gap-6 mt-4">
                <button className="h-[60px] w-[80px] rounded-[16px] bg-white shadow-lg shadow-gray-200/50 border border-gray-300">
                  9:00am
                </button>
                <button className="h-[60px] w-[80px] rounded-[16px] bg-pink-200 shadow-lg shadow-gray-200/50 border border-gray-300">
                  10:00am
                </button>
                <button className="h-[60px] w-[80px] rounded-[16px] bg-white shadow-lg shadow-gray-200/50 border border-gray-300">
                  11:00am
                </button>
                <button className="h-[60px] w-[80px] rounded-[16px] bg-pink-200 shadow-lg shadow-gray-200/50 border border-gray-300">
                  12:00am
                </button>
                <button className="h-[60px] w-[80px] rounded-[16px] bg-white shadow-lg shadow-gray-200/50 border border-gray-300">
                  1:00pm
                </button>
                <button className="h-[60px] w-[80px] rounded-[16px] bg-pink-200 shadow-lg shadow-gray-200/50 border border-gray-300">
                  2:00pm
                </button>
              </div>
              <button
                type="submit"
                className="bg-red text-white text-[18px] lgss:w-[40%] border-none rounded-[32px] lgss:px-8 mt-6 lgss:h-[48px] h-[50px] w-full"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsScheduleDonor;
