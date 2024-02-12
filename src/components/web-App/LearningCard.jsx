import React from 'react'
import { learning } from '../../assets'

const LearningCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-md mx-auto cursor-pointer border-none border-[1px] h-[250px] mds:w-[300px] w-[350px] rounded-[32px] overflow-hidden shadow-md flex justify-start items-end pb-6 bg-cover text-center" style={{ backgroundImage: `url(${learning})`}}>
      <div className="pl-6 flex flex-col justify-start">
      <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
      <button className='bg-transparent w-[200px] text-white rounded-[32px] h-[48px] border-2 border-gold'>Read More</button>
      </div>
    </div>
  );
};
export default LearningCard