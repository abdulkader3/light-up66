import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const VideoCompoTwo = ({videoLinks , text , time}) => {
  return (
    <div className="w-[390px] h-[80px] hover:scale-110 hover:bg-[#fff] hover:bg-opacity-20 transition-all flex items-center gap-[13px] ">
        <div className="w-[80px] h-[80px] ">{videoLinks} </div>
        <div className="div">
            <Link className="text-[17px] font-work font-semibold text-white ">{text} </Link>
            <div className="text-[13px] font-medium font-work text-[#fff] flex items-center gap-[6px] mb-1 "><FaRegClock /> {time}</div>
        </div>
    </div>
  )
}
