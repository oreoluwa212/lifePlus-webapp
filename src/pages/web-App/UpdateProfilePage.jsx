import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Demo from "../../components/Demo";
import NavBar from "../../components/NavBar";

const UpdateProfilePage = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [genoType, setGenoType] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      gender.length === 0 &&
      weight.length === 0 &&
      genoType.length === 0 &&
      address.length === 0 &&
      phoneNumber.length === 0 &&
      role.length === 0
    ) {
      MySwal.fire({
        icon: "error",
        title: "Oopss..",
        text: "One or more filled is not filled",
      });
    } else {
      try {
        const data = {
          email: currentUser.email,
          password: currentUser.password,
          gender: gender,
          weight: weight,
          bloodGroup: bloodGroup,
          genoType: genoType,
          address: address,
          phoneNumber: phoneNumber,
          avatar: avatar,
          role: role,
        };
        setLoading(true);
        let response = await axios.post(
          "https://lifeplus-api.onrender.com/user/update",
          data
        );
        setLoading(false);
        response = JSON.parse(response.data);
        if (response[0]) {
          localStorage.setItem("user", JSON.stringify(response[2]));
          MySwal.fire(response[1]);
          navigate("/dashboard", { state: { user: response[2] } });
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
    MySwal.fire({
      didOpen: () => {
        MySwal.showLoading();
      },
    });
    setLoading(false);
  }
  const loggedInUser = localStorage.getItem("user");
  useEffect(() => {
    if (!loggedInUser) {
      MySwal.fire("you dont have access to view this page");
      navigate("/login");
    }
  }, []);
  const location = useLocation();
  let currentUser = {};
  if (location.state) {
    currentUser = location.state.user;
  }

  return (
    <div className="">
      <NavBar currentUser={currentUser} />
      <div className="mds:flex relative mds:absolute flex mds:flex-row h-[83vh] mds:overflow-y-hidden border-t-2 border-red w-full">
        <Demo />
        <div className=" mds:w-3/5 mds:relative  mds:h-full overflow-auto mds:flex mds:flex-col mds:justify-center mds:items-center absolute top-0 left-0 ">
          <div className="lgss:w-full lgss:flex flex-col lgss:justify-center lgss:items-center lgss:gap-16 ">
            <div className="lgss:flex lgss:flex-col lgss:gap-6 lgss:items-center">
              <h1 className="text-gold font-bold text-[30px]">
                Update your LifePlus Profile
              </h1>
            </div>
            <div className="mds:w-[60%] w-[100%] justify-between lgss:flex lgss:flex-col lgss:gap-6">
              <form onSubmit={handleSubmit}>
                <div className="lgss:grid lgss:grid-cols-2 lgss:gap-4">
                  <input
                    type="text"
                    defaultValue={currentUser.fullName}
                    placeholder="full name"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                  />
                  <input
                    type="email"
                    defaultValue={currentUser.email}
                    disabled
                    placeholder="email"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                  />
                  <input
                    type="text"
                    placeholder="gender (F or M)"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />

                  <input
                    type="text"
                    placeholder="weight in kilogram"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="bloodgroup e.g o+"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                    onChange={(e) => {
                      setBloodGroup(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="genotype e.g AA"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                    onChange={(e) => {
                      setGenoType(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="address"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <input
                    type="phone"
                    placeholder="phone number"
                    className="bg-transparent border-gold border-2 rounded-[32px] lgss:px-8 lgss:h-[48px] outline-none placeholder:text-[18px]"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="lgss:p-4 flex gap-4 lgss:items-center">
                  <label htmlFor="role" className="text-[18px]">
                    Select User Type
                  </label>
                  <select
                    name="role"
                    className="bg-gold lgss:px-[40px] lgss:py-3 lgss:rounded-[32px] outline-none text-white lgss:text-[18px]"
                    required
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  >
                    <option value={"Donor"}>Blood Donor</option>
                    <option value={"health-care-admin"}>
                      Health care Provider
                    </option>
                    <option value={"bd-admin"}>Blood bank Admin</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-red text-white text-[18px] border-none rounded-[32px] lgss:px-8 lgss:h-[48px] w-[100%]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
