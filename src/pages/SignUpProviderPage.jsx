import React from "react";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { google } from "../assets";


const SignUpProviderPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [facilityName, setfacilityName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(false);
  const [facilityNameError, setFacilityNameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [addressError, setaddressError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);


  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!facilityName) {
      setFacilityNameError(true);
    } else if (!email) {
      setemailError(true);
    } else if (!password) {
      setpasswordError(true);
    } else if (!address) {
      setaddressError(true);
    } else {
      try {
        const data = {
          facilityName: facilityName,
          email: email,
          password: password,
          address: address,
        };
        MySwal.fire({
          didOpen: () => {
            MySwal.showLoading();
          },
        });
        let response = await axios.post(
          "https://lifeplus-api.onrender.com/provider/signup",
          data
        );

        response = JSON.parse(response.data);
        if (response[0]) {
          MySwal.fire({
            icon: "info",
            text: "Profile Created",
            didOpen: () => {
              MySwal.hideLoading();
            },
          });
          navigate("/dashboard-provider", { state: { user: response } });
          localStorage.setItem("user", JSON.stringify(response));
        } else {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
          }).then(() => {
            return MySwal.fire(<p className="text-red">{response[1]}</p>);
          });
        }
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
        }).then(() => {
          return MySwal.fire(
            <p className="text-red">{JSON.parse(error.response.data)[1]}</p>
          );
        });
      }
    }
  };

  return (
    <>
      <NavBar />
      <section className="relative h-[95vh] w-full mds:flex mds:flex-row border-t-2 border-red">
        <Demo />
        <div className="mds:w-3/5 w-full absolute top-14 mds:relative mds:top-0 overflow-hidden flex flex-col justify-center items-center gap-10 text-center px-5">
          <span className="flex flex-col mds:gap-4 items-center">
            <h1 className="text-gold text-center font-bold text-[30px]">
              Sign Up for LifePlus as a HealthCare Prrovider
            </h1>
            <h3 className="lgss:text-[18px] mds:text-black lgss:w-[40%] lgss:text-center text-gold">
              Enter your details to sign up or sign in to your account
            </h3>
          </span>
          <div className="md:w-[70%] w-[90%] justify-between flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="w-[100%] justify-between flex flex-col gap-4"
            >
              <input
                type="text"
                name="facilityName"
                placeholder="Name of HealthCare Facility"
                className="border-gold bg-white bg-transparent border-2 rounded-[32px] h-[48px] px-4 flex w-full justify-between outline-none text-[16px]"
                onChange={(e) => {
                  setfacilityName(e.target.value);
                }}
              />
              {facilityNameError && (
                <small className="text-red">facility name is required</small>
              )}
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="border-gold bg-white bg-transparent border-2 rounded-[32px] h-[48px] px-4 flex w-full justify-between outline-none text-[16px]"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              {addressError && (
                <small className="text-red">address is required</small>
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Institution Email Address"
                className="border-gold bg-white bg-transparent border-2 rounded-[32px] h-[48px] px-4 flex w-full justify-between outline-none text-[16px]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailError && (
                <small className="text-red">email is required</small>
              )}
              <div className="border-gold bg-white bg-transparent border-2 rounded-[32px] h-[48px] px-4 flex outline-none  text-[16px] w-full justify-between">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className="h-[100%] outline-none bg-transparent text-[16px] w-full"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                {isPasswordVisible ? (
                  <IoMdEye
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer text-xl relative top-4 text-gold right-4"
                  />
                ) : (
                  <IoMdEyeOff
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer text-xl relative top-4 text-gold right-4"
                  />
                )}
              </div>
              {passwordError && (
                <small className="text-red">password is required</small>
              )}

              <div className="flex gap-4 items-center justify-center">
                <input type="checkbox" name="aggree" id="aggree" required />
                <p className="text-white mds:text-black text-[12px]">
                  I agree to LifePlus Terms, conditions and the privacy policy
                </p>
              </div>
              <button
                type="submit"
                className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 h-[48px] w-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpProviderPage;
