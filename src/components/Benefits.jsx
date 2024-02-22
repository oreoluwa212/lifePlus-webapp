import React from 'react'

const Benefits = ({ title, description, icon }) => {
    return (
        <div className='mt-4 flex items-center justify-center'>
            <div className="h-[140px] lgss:w-[70%] w-[90%] rounded-[16px] bg-red flex">
                <div className="flex justify-between w-full items-center">
                    <div className="flex justify-between gap-4 w-full items-center h-full">
                    {icon && <div className=" bg-white flex justify-center w-[23%] p-6 h-full rounded-l-[16px]"><img src={icon} alt="" /></div>}
                    <div className="flex flex-col w-[70%]">
                    <h2 className="text-[18px] w-full lgss:text-xl uppercase text-left text-white font-bold mb-2">{title}</h2>
                    <p className="text-white text-left w-full">{description}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits