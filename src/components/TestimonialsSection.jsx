import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { user1 } from '../assets'

const TestimonialsSection = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center h-[400px]">
      <div className="flex justify-center items-center h-[166px]">
        <h1 className="text-red text-[36px] font-bold uppercase">Our Testimonials</h1>
      </div>
      {/* <div className="flex flex-col gap-8 lgss:gap-0 lgss:flex-row w-full lgss:justify-around">
      <TestimonialsCard
      title='Tunde Musa'
      description='Very simple easy and quick I have never seen anything like this before'
      img={user1}
      />
      <TestimonialsCard
      title='Tunde Musa'
      description='Very simple easy and quick I have never seen anything like this before'
      img={user1}
      />
      <TestimonialsCard
      title='Tunde Musa'
      description='Very simple easy and quick I have never seen anything like this before'
      img={user1}
      />
      <TestimonialsCard
      title='Tunde Musa'
      description='Very simple easy and quick I have never seen anything like this before'
      img={user1}
      />
      <TestimonialsCard
      title='Tunde Musa'
      description='Very simple easy and quick I have never seen anything like this before'
      img={user1}
      />
      </div> */}
            <div className="w-full">
        <Slider {...settings}>
          <TestimonialsCard
            title="Tunde Musa"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
          <TestimonialsCard
            title="Tunde Musa"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
          <TestimonialsCard
            title="Tunde "
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
          <TestimonialsCard
            title=" Musa"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
          <TestimonialsCard
            title="Tunde Musa"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
          <TestimonialsCard
            title=" Musa"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
        </Slider>
      </div>
    </div>
  )
}

export default TestimonialsSection