import React from "react";
import "../../styles/DropdownModal.css"; 
import { Link } from "react-router-dom";
import { user } from "../../assets";

const DropdownModal = ({ isOpen, handleClose, currentUser }) => {
     const handleLogout = () => {
       localStorage.clear();
     };
  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="btn-div">
          <div className="flex items-start flex-col justify-between gap-1 w-full cursor-pointer">
            <div className="flex justify-center items-center w-full">
              <img src={user} alt="" />
            </div>
            <div className="flex justify-between w-full">
              <p>Full name:</p>
              <h1 className="text-[12px] mds:text-[16px] font-semibold text-gold">
                {currentUser.fullName
                  ? currentUser.fullName
                  : currentUser.facilityName}
              </h1>
            </div>
            <div className="flex justify-between w-full">
              <p>Email:</p>
              <h1 className="text-[12px] mds:text-[14px] font-semibold text-gold">
                {currentUser.email}
              </h1>
            </div>
            <div className="flex justify-between w-full">
              <p>Gender:</p>
              <h1 className="text-[12px] mds:text-[14px] font-semibold text-gold">
                {currentUser.gender}
              </h1>
            </div>
            <div className="flex justify-between w-full">
              <p>Blood Donated:</p>
              <h1 className="text-[12px] mds:text-[14px] font-semibold text-gold">
                -
              </h1>
            </div>
            <div className="flex justify-between w-full">
              <p>Current Badge:</p>
              <h1 className="text-[12px] mds:text-[14px] font-semibold text-gold">
                Bronze
              </h1>
            </div>
            <div className="w-full flex bg-red justify-center rounded-[32px]">
              <Link
                to={currentUser.fullName ? "/login" : "/login-provider"}
                className="text-gold text-[14px]"
                onClick={handleLogout}
              >
                <button className="w-[100%] text-white font-semibold h-[48px]">Log Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownModal;
