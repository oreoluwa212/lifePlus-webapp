import React from 'react'
import "../../styles/DropdownModal.css";
import { Link } from "react-router-dom";
import { user } from "../../assets";

const SubmitSchheduleDonor = ({ isOpen, handleClose }) => {

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="btn-div">
          <div className="flex items-start flex-col justify-between gap-1 w-full cursor-pointer">
            <div className="flex justify-between w-full">
              <p>Thank you for being a lifesaver</p>
            </div>
            <div className="flex justify-between w-full">
              <p>Your appointment has been scheduled successfully</p>
            </div>
            <div className="w-full flex bg-red justify-center rounded-[32px]">
              <Link to={"/dashboard"} className="text-gold text-[14px]">
                <button className="w-[100%] text-white font-semibold h-[48px]">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitSchheduleDonor