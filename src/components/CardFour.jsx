import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const CardFour = ({title ,image ,bg ,buttonText}) => {
  return (
    <>
        <div className="w-[370px] h-[370px] relative ">
            {image}
           <div className="pl-5 absolute bottom-2">
             <div className="text-[13px] font-medium font-work text-[#ffff] flex items-center gap-[6px] mb-1 "><FaRegClock /> July 02, 2021</div>
             <div className="w-[300px] ">
              <Link className="text-[15px] text-[#fff] font-work font-medium leading-6 ">{title} </Link>
             </div>
          </div>
          <div className={`rounded-[3px] absolute bottom-[80px] left-5 py-[5px] mb-[19px] text-[15px] font-semibold font-work text-white px-[12px] ${bg} `}>{buttonText} </div>

        </div>
    </>
  )
}
