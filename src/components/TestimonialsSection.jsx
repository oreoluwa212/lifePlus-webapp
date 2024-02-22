import React , { useRef }from 'react'
import TestimonialsCard from './TestimonialsCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { user1, user2, user3 } from '../assets'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2.3,
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
        breakpoint: 790,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 528,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className="flex justify-center items-center h-[166px]">
        <h1 className="text-red text-[36px] font-bold uppercase">
          Our Testimonials
        </h1>
      </div>

      <div className="w-[70%] relative h-full pb-4">
        <Slider ref={sliderRef} {...settings}>
          <TestimonialsCard
            title="Tunde Musa"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user1}
          />
          <TestimonialsCard
            title="Emeka Bamidele"
            description="Very simple easy and quick I have never seen anything like this before"
            img={user3}
          />
          <TestimonialsCard
            title="Jenny Elizabeth "
            description="Very simple easy and quick I have never seen anything like this before"
            img={user2}
          />
        </Slider>

        <button
          type="button"
          className="absolute top-1/2 mds:left-[-10%] left-[-15%] transform -translate-y-1/2 text-2xl text-red border-2 border-red w-10 h-10 rounded-[50%] focus:outline-none flex justify-center items-center"
          onClick={goToPrev}
        >
          {<FaArrowLeft />}
        </button>
        <button
          type="button"
          className="absolute top-1/2 mds:right-[-10%] right-[-15%] transform -translate-y-1/2  text-2xl text-red border-2 border-red w-10 h-10 rounded-[50%] focus:outline-none flex justify-center items-center"
          onClick={goToNext}
        >
          {<FaArrowRight />}
        </button>
      </div>
    </div>
  );
};


export default TestimonialsSection