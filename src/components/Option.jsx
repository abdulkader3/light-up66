import React from 'react'

export const Option = ({icon ,text}) => {
  return (
    <div className="text-[13px] font-work font-medium text-white flex items-center gap-[5px] ">
        {icon} {text}
    </div>
  )
}
