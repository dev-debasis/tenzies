import React from "react";
import Navbar from "./components/Navbar";
import Dice from "./components/Dice"
import Instruction from "./components/Instruction";
import Stats from "./components/Stats"
import Timer from "./components/Timer"
import Counter from "./components/Counter"
import RollDice from "./components/RollDice";
import Reset from "./components/Reset";
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import { GiRollingDices } from "react-icons/gi";
import { BiRefresh } from "react-icons/bi";


function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  const [dices, setDices] = useState(generateAllNewDice())
  const [rollCount, setRollCount] = useState(0)
  const [isWon, setIsWon] = useState(false)
  useEffect(() => {
    const allHold = dices.every(diceObj => diceObj.isHold === true)
    const allValueSame = dices.every(diceObj => dices[0].value === diceObj.value)
    if(allHold && allValueSame){
      setIsWon(true)
    }
  }, [dices])
  const diceElements = dices.map(diceObj => {
    return <Dice 
      key={diceObj.id}
      id={diceObj.id}
      value={diceObj.value}
      toggle={toggleHold}
      isHold={diceObj.isHold}
    />
  })

  function toggleTheme(){
    setDarkTheme(prevTheme => !prevTheme)
  }

  function generateNewDice(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHold: false
    }
  }

  function generateAllNewDice(){
    return new Array(10)
    .fill(0)
    .map(val => generateNewDice())
  }
  function toggleHold(id){
    setDices(prevValue => 
      prevValue.map(diceObj => 
        diceObj.id === id ? {...diceObj, isHold: !diceObj.isHold} : diceObj
      )
    )
  }
  function rollDice(){
    setRollCount(prevCount => prevCount + 1)
    setDices(prevValue => 
      prevValue.map(diceObj => 
        diceObj.isHold? diceObj : generateNewDice()
      )
    )
  }
  function resetDices(){
    setDices(generateAllNewDice)
    setRollCount(0)
    setIsWon(false)
  }


  return (
    <div>
      {isWon &&  <Confetti />}
      <header>
        <Navbar 
          darkTheme={darkTheme}
          toggle={toggleTheme}
        />
      </header>

      <section className="">
        <h1 className="flex items-center justify-center text-3xl font-bold text-[#6D28D9] dark:text-[#C4B5FD]">Tenzies</h1>
        <p className="flex items-center justify-center text-[#4B5563] dark:text-[#D1D5DB] text-lg font-medium font-poppins">Roll until all dice are the same. Click each die to freeze it</p>
        <p className="flex items-center justify-center text-[#4B5563] dark:text-[#D1D5DB] text-lg font-medium">at its current value.</p>
      </section>

      <main className="h-120 mt-10 grid grid-cols-2">
        <div className="grid grid-rows-[0.5fr_2fr_0.5fr]">
          <div className="flex items-center justify-around">
            <Timer value="00:00"/>
            <Counter value={rollCount}/>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-5 gap-10 ">
              {diceElements}
            </div>
          </div>
          <div className="flex items-center justify-around">
            <Reset 
              reset={resetDices}
            />
            <RollDice 
              value={isWon? "Restart": "Roll"}
              icon={isWon? <BiRefresh /> : <GiRollingDices />}
              rollDice={rollDice}
              restart={resetDices}
              isWon={isWon}
            />
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex items-center justify-center">
          <Stats />
          </div>
          <div className="flex items-center justify-center">
            <Instruction />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
