import React from 'react'

const Benefits = ({ title, description, icon }) => {
    return (
        <div className='mt-4'>
            <div className="h-[190px] w-full text-center">
                <div className="p-4">
                    <div className="flex flex-col justify-center items-center">
                    {icon && <div className="mb-4 text-4xl text-gold flex justify-center">{icon}</div>}
                    <h2 className="text-xl text-red font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 w-[65%] text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits