import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import '../styles/Faq.css'

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What is LifePlus?",
      answer:
        "LifePlus addresses the critical need for increased blood donation, through a simplified process for donors and administrators using the most user-friendly technology building and designing for a loyal community of engaged blood donors and advocates.",
    },
    {
      question: "Why choose LifePlus",
      answer:
        "LifePlus  addresses the critical need for increased blood donation, through a simplified process for donors and administrators using the most user-friendly technology building and designing for a loyal community of engaged blood donors and advocates.",
    },
    {
      question: "How to get started with LifePlus?",
      answer:
        "As a blood donor/advocate, registration is required, and thereafter, providing vital health information as this is important to the subject. As administrators, medical professionals, community organizations and local NGOs, registration and subscription is required of which notarized documents of practice are needed for validation and inclusion.",
    },
    {
      question: "How to get verified on LifePlus?",
      answer:
        "Blood donors,especially repeat donors are to note the importance of confidentiality and transparency as this is crucial to the health of recipients.",
    },
    {
      question: "Who is Eligible to donate blood?",
      answer:
        "Blood donors,especially repeat donors are to note the importance of confidentiality and transparency as this is crucial to the health of recipients.",
    },
    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  return (
    <div className="flex flex-col justify-center items-center lgss:my-7 my-0">
      <div className="flex justify-center items-center h-[126px] mds:h-[166px]">
        <h1 className="text-red text-center text-[28px] mds:text-[36px] font-extrabold uppercase">
          FAQ
        </h1>
      </div>
      <div className="bg-white shadow-lg shadow-gray-500/50 h-[450px] lgss:h-[320px] w-[90%] lgss:w-[76%]  rounded-[16px] flex justify-center items-center">
        <div className=" mds:w-[55%] h-full flex flex-col justify-between lgss:p-10 p-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col mds:flex-row w-[90%] items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-center items-center cursor-pointer w-full">
                <div
                  className={`w-3 h-3 rounded-[50%] ${
                    activeIndex === index ? "bg-red" : "bg-gold"
                  }`}
                ></div>
                <div className="flex w-full justify-between pl-4 text-[18px] font-semibold">
                  <h1>{faq.question}</h1>
                  <FaAngleRight
                    className={`text-gold ${
                      activeIndex === index ? "text-red" : "text-gold"
                    }`}
                  />
                </div>
              </div>
              <div className=" lgss:hidden h-full flex-col gap-5 px-8 flex">
                {activeIndex !== null && (
                  <>
                    <h3
                      className={`text-[14px] w-full ${
                        activeIndex === index ? "flex" : "hidden"
                      }`}
                    >
                      {faqData[activeIndex].answer}
                    </h3>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className=" w-[45%] h-full flex flex-col gap-5 py-8 hidden mds:flex">
          {activeIndex !== null && (
            <>
              <h1 className=" text-[20px] font-bold ">
                {faqData[activeIndex].question}
              </h1>
              <h3 className="text-[18px] w-[90%]">
                {faqData[activeIndex].answer}
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
