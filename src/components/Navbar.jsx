import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  return (
    <div className='flex items-center justify-between h-20 px-20 py-10'>
        <div className='flex gap-2'>
            <img src="/favicon.png" alt="nav-logo" width="30px"/>
            <h1 className='text-3xl font-bold text-[#C4B5FD]'>Tenzies</h1>
        </div>
        <div className='bg-[#1F2937] h-10 w-10 flex items-center justify-center rounded-full'>
        <FontAwesomeIcon icon={faMoon} className='text-2xl text-[#FACC15]'/>
        </div>
    </div>
  )
}

export default Navbar
