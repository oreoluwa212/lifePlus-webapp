import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { google } from "../assets";

const LoginProviderPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      MySwal.fire("Ensure all fields are filled");
    } else {
      try {
        const data = {
          email: email,
          password: password,
        };
        MySwal.fire({
          didOpen: () => {
            MySwal.showLoading();
          },
        });
        let response = await axios.post(
          "https://lifeplus-api.onrender.com/provider/login",
          data
        );
        response = JSON.parse(response.data);
        if (response[0]) {
          MySwal.fire({
            icon: "info",
            text: "welcome back",
            didOpen: () => {
              MySwal.hideLoading();
            },
          });
          localStorage.setItem("user", JSON.stringify(response[1]));
          navigate("/dashboard-provider");
        }
      } catch (error) {
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
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/dashboard-provider");
    }
  }, []);
  return (
    <div className="">
      <NavBar />
      <div className="relative mds:flex mds:flex-row h-[100vh] border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 w-full absolute mds:relative top-0 mt-[20%] overflow-auto flex flex-col justify-end mds:justify-start items-center">
          <div className="w-full flex flex-col items-center mds:gap-8 xs:gap-8">
            <div className="flex flex-col lgss:gap-3 items-center w-4/5">
              <h1 className="text-gold font-bold text-[30px] text-center w-[50%]">
                Login to LifePlus As An Health Care Provider
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black text-gold">
                Enter your details to sign in to your account
              </h3>
            </div>
            <div className="mds:w-[80%] w-[100%] h-full justify-center items-center flex flex-col gap-4 lgss:gap-3">
              <form
                onSubmit={handleSubmit}
                className="mds:w-full mds:px-[5%] w-[90%] h-full justify-between flex flex-col gap-4 lgss:gap-6"
              >
                <input
                  type="email"
                  placeholder="email"
                  className="mdss:bg-transparent px-4 h-[50px] bg-white border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px] w-full"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className=" border-gold bg-white lgss:bg-transparent border-2 rounded-[32px] lgss:pl-8 lgss:pr-2 lgss:h-[48px] h-[50px] pl-4 mds:px-0  flex outline-none  text-[16px] w-full justify-between">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="password"
                    className=" lgss:h-[48px] outline-none bg-transparent text-[16px] w-full"
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
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 px-4 lgss:gap-4 lgss:mt-2">
                    <input type="checkbox" name="" />
                    <p className="mds:text-black text-white">Remember me</p>
                  </div>
                  <div className=" lgss:px-4 mds:text-black text-white">
                    <Link to={"/forgot-password"}>
                      <button>Forgot password?</button>
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-red text-white text-[18px] lgss:w-[100%] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] h-[50px] w-full"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginProviderPage;
