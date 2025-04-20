import React from 'react'

function Reset(props) {
  return (
    <div 
      className="shadow-xl rounded-lg flex items-center px-6 py-3 cursor-pointer font-semibold gap-2 border-2 border-[#6D28D9]"
      onClick={props.reset}
    >
    <span className="font-medium">Reset</span>
    </div>
  )
}

export default Reset
