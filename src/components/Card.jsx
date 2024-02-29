import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-[#EEDFDF] shadow-lg shadow-gray-300/50 h-[280px] max-w-[300px] w-[100%] rounded-md overflow-hidden flex flex-col justify-center items-center text-center">
      {icon && <div className="mb-4 text-4xl text-red flex justify-center">{icon}</div>}
      <h2 className="text-xl text-red font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
