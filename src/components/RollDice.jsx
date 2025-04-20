import React from 'react'
function RollDice(props) {
  const styles = {
    backgroundColor: props.isWon? "#16A34A" : "#6D28D9"
  }
  return (
    <div 
      className="shadow-xl rounded-lg flex items-center justify-center px-6 py-3 cursor-pointer font-semibold gap-2 text-white"
      style={styles}
      onClick={props.isWon? props.restart : props.rollDice}
    >
        <span className="text-white text-xl">
          {props.icon}
        </span>
        <span className="font-medium">{props.value}</span>
    </div>
  )
}

export default RollDice