import React from 'react'

const TestimonialsCard = ({ title, description, img }) => {
  return (
    <div className='bg-white shadow-lg shadow-gray-500/50 h-[280px] max-w-[350px] w-[90%] rounded-[16px] flex flex-col justify-center items-center gap-2'>
      <img src={img} alt="testimonial" className="w-20 h-20 rounded-full" />
      <h2 className="text-xl text-red font-bold">{title}</h2>
      <p className="text-gray-700 w-[80%] mds:w-full text-center">{description}</p>
    </div>
  )
}

export default TestimonialsCard