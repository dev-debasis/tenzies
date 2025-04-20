import React from 'react'
import { IoMdStopwatch } from "react-icons/io";

function Timer(props) {
  return (
    <div 
      className="shadow-xl rounded-lg flex items-center px-6 py-3 cursor-pointer font-semibold gap-2 border-1 border-[#F3F4F6]"
    >
        <span className="text-blue-500">
        <IoMdStopwatch />
        </span>
        <span className="font-medium">{props.value}</span>
    </div>
  )
}

export default Timer