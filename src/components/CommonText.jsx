import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const CommonText = ({title}) => {
  return (
    <>
       <div className="pl-5 pr-6">
            <div className="text-[13px] font-medium font-work text-[#555555] flex items-center gap-[6px] mb-1 "><FaRegClock /> July 02, 2021</div>
            <Link className="text-[15px] text-[#000D39] font-work font-medium leading-6 ">{title} </Link>
        </div>




    </>
  )
}
