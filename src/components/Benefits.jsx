import React from 'react'

const Benefits = ({ title, description, icon }) => {
    return (
        <div className='mt-4 flex items-center justify-center'>
            <div className="h-[140px] lgss:w-[80%] w-[90%] rounded-[16px] bg-red flex">
                <div className="flex justify-between w-full items-center">
                    <div className="flex justify-between gap-4 w-full items-center h-full">
                    {icon && <div className=" bg-white flex justify-center items-center w-[25%] p-7 h-full rounded-l-[16px]"><img src={icon} alt="" className="h-[70%]" /></div>}
                    <div className="flex flex-col w-[70%]">
                    <h2 className="text-[16px] w-full lgss:text-[18px] uppercase text-left text-white font-bold mb-2">{title}</h2>
                    <p className="text-white text-left w-full leading-5">{description}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits