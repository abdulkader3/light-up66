import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const UnderlineText = ({size ,text , textSize, color, textColor, iconColor , divSize }) => {
  return (
    <div className={`${divSize}`}>
        <div className={`flex items-center ${size} font-work font-medium ${color} leading-5 gap-[7px] `}> <span className={` ${iconColor}`}><FaRegClock /></span>  July 02, 2021</div>
        <Link className={`font-work underline h-[70px] font-semibold ${textSize} leading-[35px] ${textColor} `}> {text} </Link>
    </div>
  )
}
