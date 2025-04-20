import React from "react";
import { GoTrophy } from "react-icons/go";
function Stats(props) {
  return <div className="w-[80%] h-[60%] shadow-xl rounded-lg px-5 py-7 border-2 border-[#F3F4F6]">
    <div className="flex items-center gap-2 mb-4"> 
      <div className="text-[#EAB308] font-black text-xl">
        <GoTrophy />
      </div>
      <div>
        <h1 className="font-bold text-lg">Personal Bests</h1>
      </div>
    </div>

    <div className="flex items-center gap-45">
      <div>
        <p className="text-[#6B7290] text-sm">Best Time</p>
        <h1 className="font-semibold">37:30</h1>
      </div>
      <div>
        <p className="text-[#6B7290] text-sm">Best Rolls</p>
        <h1 className="font-semibold">8</h1>
      </div>
    </div>
  </div>;
}

export default Stats;
