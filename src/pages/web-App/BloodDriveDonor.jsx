import React, { useEffect, useState } from "react";
import Header from "../../components/web-App/Header";
import SideBar from "../../components/web-App/SideBar";
import { donor1, donor2, map } from "../../assets";
import axios from "axios";

const BloodDriveDonor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bloodDrives, setBloodDrives] = useState([]);
  const [providers, setProviders] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  let ignore = false;

  useEffect(() => {
    const getBloodDrives = async () => {
      try {
        const response = await axios.get(
          "https://lifeplus-api.onrender.com/all-blood-drive"
        );
        if (!ignore) {
          setBloodDrives(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    let ignore = false;
    getBloodDrives();
    return () => {
      ignore = true;
    };
  }, []);

  const FetchDetails = ({ userId }) => {
    useEffect(() => {
      const getProviderDetails = async () => {
        try {
          const response = await axios.post(
            `https://lifeplus-api.onrender.com/provider/get-single?providerId=${userId}`
          );

          if (!ignore) {
            setProviders(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      let ignore = false;
      getProviderDetails();
      return () => {
        ignore = true;
      };
    }, []);
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
          <div className="mt-[50px] lgss:mt-0 text-[34px] text-gold font-semibold px-[5%] mds:px-0">
            <h1>Donations | Track Donatiions</h1>
          </div>
          <div className="px-6 lgss:px-0">
            <img src={map} alt="" />
          </div>
          {bloodDrives &&
            bloodDrives.map((bloodDrive) => {
              return (
                <div
                  key={bloodDrive._id}
                  className="px-6 mt-6 lgss:px-0 h-[200px] w-[80%] flex gap-4"
                >
                  <FetchDetails userId={bloodDrive.userId} />;
                  <img src={donor1} alt="" className="hidden lgss:flex" />
                  <div className="w-[90%] flex justify-between font-semibold py-2">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-[22px] text-gold ">
                        {providers.facilityName}
                      </h1>
                      <p> {providers.address}</p>
                      <a href="#" className="text-red">
                        Locate
                      </a>
                    </div>
                    <div className="flex flex-col w-[30%] gap-4 px-2">
                      <h1>Need For {bloodDrive.title}</h1>
                      <h1>Donor Recieve</h1>
                      <p className="text-red">
                        {bloodDrive.tokenAmount} points
                      </p>
                      <p>Deadline: {bloodDrive.endDate}</p>
                      <button
                        type="submit"
                        className="bg-red text-white text-[16px] border-none rounded-[32px] lgss:px-8 lgss:h-[40px] h-[45px] w-[80%] font-medium"
                      >
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BloodDriveDonor;
