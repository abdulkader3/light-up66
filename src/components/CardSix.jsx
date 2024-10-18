import React from 'react'
import { Link } from 'react-router-dom'

export const CardSix = ({img , bg, title, numbers }) => {
  return (
    <div className="w-[370px] h-[80px] relative ">
        {img}
        <Link className=" absolute top-[50%] left-5 translate-y-[-50%] text-[25px] text-white font-work font-semibold leading-[35px] ">{title} </Link>
        <div className={`w-[30px] flex justify-center items-center text-[25px] font-work font-semibold leading-[30px] absolute top-[50%] right-5 translate-y-[-50%] h-[30px] rounded-full text-white ${bg} `}> {numbers} </div>
    </div>
  )
}
