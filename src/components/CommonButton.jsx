import React from 'react'

export const CommonButton = ({bg , buttonText}) => {
  return (
    <div>
        <div className={`rounded-[3px] py-[5px] text-[15px] font-semibold font-work text-white px-[12px] ${bg} `}>{buttonText} </div>
    </div>
  )
}
