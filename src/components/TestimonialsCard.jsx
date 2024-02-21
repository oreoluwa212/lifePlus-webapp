import React from 'react'

const TestimonialsCard = ({ title, description, img }) => {
  return (
    <div className='bg-white shadow-lg shadow-gray-500/50 h-[260px] w-[350px] rounded-[16px] flex flex-col justify-center items-center'>
      <div className="p-4">
        <img src={img} alt="testimonial" className="w-20 h-20 rounded-full" />
      </div>
        <h2 className="text-xl text-red font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
  )
}

export default TestimonialsCard