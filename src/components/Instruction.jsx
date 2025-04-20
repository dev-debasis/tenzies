import React from "react";

function Instruction() {
  return (
    <div className="w-[80%] h-[70%] bg-[#F3F4F6] rounded-lg flex justify-center py-4 text-md/7 text-cyan-700 border-1 border-[#6D28D9]">
      <div>
        <h1 className="flex justify-center font-semibold text-[#6D28D9]">Game Instructions:</h1>
        <p>1. Roll the dice to get random numbers</p>
        <p>2. Click a die to "hold" it at its current value</p>
        <p>3. Roll again to change all unheld dice</p>
        <p>4. Continue until all dice show the same number</p>
        <p>5. Try to win in the fewest rolls and shortest time!</p>
      </div>
    </div>
  );
}

export default Instruction;
