import React from 'react'

const DashboardCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-md mx-auto bg-[#F3E4E4] border-none border-[1px] h-[220px] mds:w-[300px] w-[250px] rounded-md overflow-hidden shadow-md flex justify-center items-center text-center">
      <div className="p-4">
        {icon && <div className="mb-4 text-4xl text-red flex justify-center">{icon}</div>}
        <h2 className="text-xl text-black font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
};
export default DashboardCard