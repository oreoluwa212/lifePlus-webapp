import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="max-w-md mx-auto bg-[#EEDFDF] shadow-lg shadow-gray-300/50 h-[280px] mds:w-[350px] w-[300px] rounded-md overflow-hidden flex justify-center items-center text-center">
      <div className="p-4">
        {icon && <div className="mb-4 text-4xl text-red flex justify-center">{icon}</div>}
        <h2 className="text-xl text-red font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
