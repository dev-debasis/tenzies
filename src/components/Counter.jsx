import React from 'react'
import { IoRepeat } from "react-icons/io5";

function Counter(props) {
  return (
    <div 
      className="shadow-xl rounded-lg flex items-center justify-center px-6 py-3 cursor-pointer font-semibold gap-2 border-1 border-[#F3F4F6]"
    >
        <span className="text-blue-500 text-lg">
        <IoRepeat />
        </span>
        <span className="font-medium">{props.value}</span>
    </div>
  )
}

export default Counter