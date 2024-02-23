import React, { useState } from "react";
import SideBar from "../../components/web-App/SideBar";
import Header from "../../components/web-App/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown } from "react-icons/fa";
import SubmitSchheduleDonor from "../../components/web-App/SubmitSchheduleDonor";

const AppointmentsScheduleDonor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && selectedTime) {
      setIsOpen(true);
      // Add logic to handle the form submission
    } else {
      alert("Please select both date and time");
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleFormKeyPress = (e) => {
    // Prevent form submission on Enter key
    if (e.key === 'Enter') {
      e.preventDefault();
    }
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
          )}
          <div className="mt-[50px] lgss:mt-0 text-[34px] text-gold font-semibold px-[5%] mds:px-0 ">
            <h1>Appointments | Schedule</h1>
          </div>
          <SubmitSchheduleDonor
            isOpen={isOpen}
            handleClose={handleCloseModal}
          />
          <form
            onSubmit={handleFormSubmit}
            onKeyPress={handleFormKeyPress}
            className="flex flex-col px-[4%] lgss:px-0"
          >
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
              <div className="flex gap-6 mt-4 text-[18px]">
                <button
                  type="button"
                  className={`h-[60px] w-[90px] rounded-[16px] ${
                    selectedTime === "9:00am" ? "bg-pink-200" : "bg-white"
                  } shadow-lg shadow-gray-200/50 border border-gray-300`}
                  onClick={() => setSelectedTime("9:00am")}
                >
                  9:00am
                </button>
                <button
                  type="button"
                  className={`h-[60px] w-[90px] rounded-[16px] ${
                    selectedTime === "10:00am" ? "bg-pink-200" : "bg-white"
                  } shadow-lg shadow-gray-200/50 border border-gray-300`}
                  onClick={() => setSelectedTime("10:00am")}
                >
                  10:00am
                </button>
                <button
                  type="button"
                  className={`h-[60px] w-[90px] rounded-[16px] ${
                    selectedTime === "11:00am" ? "bg-pink-200" : "bg-white"
                  } shadow-lg shadow-gray-200/50 border border-gray-300`}
                  onClick={() => setSelectedTime("11:00am")}
                >
                  11:00am
                </button>
                <button
                  type="button"
                  className={`h-[60px] w-[90px] rounded-[16px] ${
                    selectedTime === "12:00pm" ? "bg-pink-200" : "bg-white"
                  } shadow-lg shadow-gray-200/50 border border-gray-300`}
                  onClick={() => setSelectedTime("12:00pm")}
                >
                  12:00pm
                </button>
                <button
                  type="button"
                  className={`h-[60px] w-[90px] rounded-[16px] ${
                    selectedTime === "01:00pm" ? "bg-pink-200" : "bg-white"
                  } shadow-lg shadow-gray-200/50 border border-gray-300`}
                  onClick={() => setSelectedTime("01:00pm")}
                >
                  01:00pm
                </button>
                <button
                  type="button"
                  className={`h-[60px] w-[90px] rounded-[16px] ${
                    selectedTime === "02:00pm" ? "bg-pink-200" : "bg-white"
                  } shadow-lg shadow-gray-200/50 border border-gray-300`}
                  onClick={() => setSelectedTime("02:00pm")}
                >
                  02:00pm
                </button>
              </div>
              <button
                type="submit"
                className="bg-red text-white text-[18px] lgss:w-[40%] border-none rounded-[32px] lgss:px-8 mt-6 lgss:h-[48px] h-[50px] w-full"
              >
                Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsScheduleDonor;
