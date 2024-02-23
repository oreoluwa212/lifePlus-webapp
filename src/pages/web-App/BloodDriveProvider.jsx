import React, { useState } from "react";
import DetailsProviderCard from "../../components/web-App/DetailsProviderCard";
import Header from "../../components/web-App/Header";
import SideBarProvider from "../../components/web-App/SideBarProvider";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BloodDriveProvider = ({currentUser}) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tokenAmount, setTokenAmount] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [tokenAmountError, setTokenAmountError] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    tokenAmount: "",
  });
  const [formErrors, setFormErrors] = useState({});


  const validateForm = () => {
    const errors = {};

    // Validate title
    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }

    // Validate startDate
    if (!formData.startDate.trim()) {
      errors.startDate = "Start Date is required";
    }

    // Validate endDate
    if (!formData.endDate.trim()) {
      errors.endDate = "End Date is required";
    }

    console.log("Points Value:", formData.tokenAmount);
    console.log("Trimmed Points Value:", formData.tokenAmount.trim());
    
    // Validate points
    if (!formData.tokenAmount.trim().length) {
      errors.tokenAmount = "Points Reward is required";
    } else if (isNaN(formData.tokenAmount)) {
      errors.tokenAmount = "Points must be a number";
    }

    setFormErrors(errors);
    console.log("Form Errors:", errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setTitleError(true);
    } else if (!startDate) {
      setStartDateError(true);
    } else if (!endDate) {
      setEndDateError(true);
    } else if (!tokenAmount) {
      setTokenAmountError(true);
    } else {
      try {
        const data = {
          title: title,
          startDate: startDate,
          endDate: endDate,
          tokenAmount: tokenAmount,
          userId: loggedInUser._id
        };
        console.log("Blood Drive Creation Request Data:", data);

        MySwal.fire({
          didOpen: () => {
            MySwal.showLoading();
          },
        });
        let response = await axios.post(
          "https://lifeplus-api.onrender.com/create-blood-drive",
          data
        );
        if (response["status"]===201) {
          MySwal.fire({
            icon: "success",
            text: "Blood Drive Created",
            didOpen: () => {
              MySwal.hideLoading();
            },
          });
          document.getElementById("createDrive").reset()
        } else {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
          }).then(() => {
            return MySwal.fire(<p className="text-red">{response[1]}</p>);
          });
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
          console.error("Status code:", error.response?.status);
        } else {
          console.error("An unexpected error occurred:", error.message);
        }
      }
    }
  };
  return (
    <div className="flex flex-row h-screen w-full">
      <SideBarProvider isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%]">
          {loggedInUser && (
            <Header
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              currentUser={loggedInUser}
            />
          )}{" "}
          <div className="mt-[50px] lgss:mt-0 text-[34px] text-gold font-semibold px-[5%] mds:px-0">
            <h1>Donations | Blood Drive</h1>
          </div>
          {loggedInUser && <DetailsProviderCard loggedInUser={loggedInUser} />}
          <div className="flex justify-center items-center">
            <form
              id="createDrive"
              className="mds:w-[100%] w-[90%] justify-between flex flex-col gap-6 h-[60vh] items-center bg-[#F3E4E4] mds:mt-8 mt-4 mds:py-12 py-4 rounded-[32px]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Title e.g Need for O+ Donors"
                className="bg-transparent border-gold border-2 rounded-[32px] mds:w-[480px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
              />
              {titleError && (
                <small className="text-red">Title is required</small>
              )}
              <input
                type="text"
                name="startDate"
                id="startDate"
                placeholder="Start Date"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                className="bg-transparent border-gold border-2 rounded-[32px] mds:w-[480px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0 outline-none placeholder:text-[18px]"
              />{" "}
              {startDateError && (
                <small className="text-red">Start Date is required</small>
              )}
              <input
                type="text"
                name="endDate"
                id="endDate"
                placeholder="End Date"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none mds:w-[480px] placeholder:text-[18px]"
              />
              {endDateError && (
                <small className="text-red">End Date is required</small>
              )}
              <input
                type="text"
                name="tokenAmount"
                id="tokenAmount"
                placeholder="Points Reward e.g 20LP Tokens"
                onChange={(e) => {
                  setTokenAmount(e.target.value);
                }}
                className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] px-4 mds:px-0  outline-none mds:w-[480px] placeholder:text-[18px]"
              />
              {tokenAmountError && (
                <small className="text-red">Points is required</small>
              )}
              <button
                type="submit"
                className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-[50%]"
              >
                Create Blood Drive
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDriveProvider;
