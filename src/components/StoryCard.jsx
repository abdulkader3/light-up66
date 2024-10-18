import React from 'react'

export const StoryCard = ({news}) => {
  return (
    <div>
        <div className="w-[370px] h-[130px] bg-white hover:shadow-2xl flex justify-center items-center ">{news} </div>
    </div>
  )
}
