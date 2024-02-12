import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
useNavigate;
const CreateNewPassword = () => {
  const location = useLocation();
  let userId = "";
  if (location.search) {
    userId = location.search.slice(1);
  }
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      MySwal.fire("Ensure all fields are filled");
    } else {
      try {
        const data = {
          password: password,
          confirmPassword: confirmPassword,
        };
        setLoading(true);
        let response = await axios.post(
          `https://lifeplus-api.onrender.com/user/reset-password/${userId}`,
          data
        );
        response = JSON.parse(response.data);

        setLoading(false);
        if (response.success) {
          MySwal.fire(response.success);
          navigate("/login");
        }
      } catch (error) {
        setLoading(false);
        MySwal.fire({
          icon: "error",
          title: "Oops...",
        }).then(() => {
          return MySwal.fire(
            <p className="text-red">{JSON.parse(error.response.data).error}</p>
          );
        });
      }
    }
  };

  if (loading) {
    setLoading(false);
    MySwal.fire({
      didOpen: () => {
        MySwal.showLoading();
      },
    });
    setLoading(false);
  }
  return (
    <div className="">
      <NavBar />
      <div className="mds:absolute relative flex flex-row h-[80vh] border-t-2 border-red bg-[#fafafa] w-full">
        <div className="w-full absolute mds:relative h-full overflow-auto flex flex-col mt-[10%] mds:mt-0 lgss:justify-center items-center">
          <div className=" flex flex-col shadow-lg shadow-gray-400/50 bg-white lgss:w-[50%] w-[80%] lgss:h-[75%] h-[350px] rounded-[32px] px-[5%] mdss:px-0  mds:justify-center mds:items-center mds:gap-9 xs:gap-8">
            <div className="flex flex-col pt-4 mds:pt-0 mds:gap-4 items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Create a New Password
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mds:w-[90%] lgss:w-[60%] w-[100%] justify-between flex flex-col lgssgap-6 gap-3 "
            >
              <div className="">
                <label htmlFor="NewPassword" className="font-semibold">
                  New Password
                </label>
                <input
                  type="password"
                  name="NewPassword"
                  onChange={(e) => {
                    setPasword(e.target.value);
                  }}
                  className="h-[48px] mds:w-[100%] w-[100%] justify-center items-center bg-transparent border-gold border-2 placeholder:text-gold pl-4 rounded-[32px] text-[1.2rem] outline-none"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="">
                <label htmlFor="ConfirmPassword" className="font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="ConfirmPassword"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="h-[48px] mds:w-[100%] w-[100%] justify-center items-center bg-transparent border-gold border-2 placeholder:text-gold pl-4 rounded-[32px] text-[1.2rem] outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="submit"
                className="h-[48px] lgss:mt-6 mt-4 mds:mt-0 w-[100%] mds:w-[100%] flex justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]"
              >
                Create New Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
