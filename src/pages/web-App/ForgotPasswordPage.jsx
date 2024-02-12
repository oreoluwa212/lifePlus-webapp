import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const MySwal = withReactContent(Swal);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      MySwal.fire("Email field cannot be empty");
    } else {
      try {
        const data = {
          email: email,
        };
        setLoading(true);
        let response = await axios.post(
          "https://lifeplus-api.onrender.com/user/forgot-password",
          data
        );
        response = JSON.parse(response.data);
        setLoading(false);

        if (response.ok) {
          MySwal.fire(response.ok);
        }
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "user not found",
        }).then(() => {
          return MySwal.fire(
            <p className="text-red">{JSON.parse(error.response.data).error}</p>
          );
        });
      }
    }
  };

  if (loading) {
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
      <div className="mds:absolute mds:flex mds:flex-row h-[80vh] border-t-2 border-red bg-[#fafafa] w-full">
        <div className="mds:w-full px-[5%] mdss:px-0 mds:relative top-0 mds:h-full  h-full overflow-auto flex flex-col justify-center items-center">
          <div className="flex flex-col shadow-lg shadow-gray-400/50 bg-white lgss:w-[50%] lgss:h-[65%] p-4 mdss:p-0 rounded-[32px] justify-center items-center mds:gap-9 xs:gap-8">
            <div className="flex flex-col mds:gap-4 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Reset Your Password
              </h1>
              <h3 className="lgss:text-[18px] mds:text-black text-gold font-semibold">
                Enter your email address and we will send you a link to reset
                your password
              </h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mds:w-[90%] lgss:w-[60%] w-[100%] justify-between mds:flex mds:flex-col mds:gap-6"
            >
              <div>
                <input
                  type="text"
                  className="h-[48px] mt-5 mds:w-[100%] w-[100%] justify-center items-center bg-transparent border-gold border-2 placeholder:text-gold pl-4 rounded-[32px] text-[1.2rem] outline-none"
                  placeholder="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="h-[48px] mt-6 mds:mt-8 w-[100%] mds:w-[100%] flex justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]"
                >
                  Submit Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
