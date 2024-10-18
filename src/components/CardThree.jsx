import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const CardThree = ({image , color , title ,time}) => {
  return (
    <div className="w-[346px] h-[130px] flex  gap-5 ">
        <div className="w-[130px] h-[100px] overflow-hidden ">{image} </div>
        <div className="div">
        <div className={`text-[15px] font-semibold font-work ${color} leading-5 underline`}>Covid-19</div>
        <div className="text-[13px] font-medium font-work text-[#555555] flex items-center gap-[6px] mb-1 mt-[11px] "><FaRegClock /> {time} </div>
        <Link className="text-[15px] text-[#000D39] font-work font-medium leading-6 ">{title} </Link>
        </div>
    </div>
  )
}
