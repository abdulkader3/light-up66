import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const CardFive = ({image ,bg, buttonText , title , time , buttonSize}) => {
  return (
    <div className="w-[741px] h-[230px] flex items-center gap-[30px] ">
        <div className="w-[320px] h-[230px] "> {image}</div>
        <div className="flex flex-col gap-3">
            <div className={`rounded-[3px] py-[5px] px-3 ${buttonSize} text-[15px] font-semibold font-work text-white ${bg} `}>{buttonText} </div>
            <div className="text-[13px] font-medium font-work text-[#555555] flex items-center gap-[6px] mb-1 "><FaRegClock /> {time}</div>
            <Link className="text-[19px] text-[#000D39] w-[354px] font-work font-semibold leading-7 ">{title} </Link>
            <p className="text-[15px] font-normal w-[379px] leading-7 font-work text-[#5555] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
    </div>
  )
}
