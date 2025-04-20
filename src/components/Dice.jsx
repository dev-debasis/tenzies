import React from 'react'

function Dice(props) {
  const styles = {
    backgroundColor: props.isHold? "#7C3AED" : "white",
    color: props.isHold? "white" : "black"
  }

  return (
    <div 
      className='bg-white text-[#6D28D9] shadow-xl rounded-lg flex items-center px-6 py-3 cursor-pointer font-semibold gap-2 border-1 border-[#F3F4F6]'
      style={styles}
      onClick={() => props.toggle(props.id)}
    >
    {props.value}
    </div>
  )
}

export default Dice