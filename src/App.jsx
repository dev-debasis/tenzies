import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button"
import Dice from "./components/Dice"
import Instruction from "./components/Instruction";
import Stats from "./components/Stats"

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="">
        <h1 className="flex items-center justify-center text-3xl font-bold text-[#C4B5FD]">Tenzies</h1>
        <p className="flex items-center justify-center text-[#A6CFDB] text-lg font-medium font-poppins">Roll until all dice are the same. Click each die to freeze it</p>
        <p className="flex items-center justify-center text-[#A6CFDB] text-lg font-medium">at its current value.</p>
      </section>
      <main className="h-120 mt-10 grid grid-cols-2">
        <div className="grid grid-rows-[0.5fr_2fr_0.5fr]">
          <div className="flex items-center justify-around">
            <Button />
            <Button />
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-5 gap-10 ">
              <Dice />
              <Dice />
              <Dice />
              <Dice />
              <Dice />
              <Dice />
              <Dice />
              <Dice />
              <Dice />
              <Dice />
            </div>
          </div>
          <div className="flex items-center justify-around">
            <Button />
            <Button />
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex items-center justify-center">
            <Instruction />
          </div>
          <div className="flex items-center justify-center">
            <Stats />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
