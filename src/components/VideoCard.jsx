import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const VideoCard = ({title , videos, type, color }) => {
  return (
    <div className="w-[350px] h-[110px] bg-white border-[1px] border-[#E5E5E5] flex items-center gap-[10px] ">
        <div className="w-[110px] h-[90px] ml-[10px] ">
          {videos}
        </div>
        <div className="div">
            <h4 className={`text-[13px] font-work font-medium ${color} underline leading-[20px] tracking-[.4%]`} >{type} </h4>
            <div className="text-[13px] font-medium font-work text-[#555555] flex items-center gap-[6px] "><FaRegClock /> July 02, 2021</div>
            <Link className="text-[15px] text-[#000D39] font-work font-medium leading-6 ">{title} </Link>
        </div>
    </div>
  )
}
