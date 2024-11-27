import React from 'react'
import logo from '../assets/PINK LOGO.png'
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className='w-full sm:h-[100px] sm:text-red-600 sm:px-[60px] px-[19px]  h-[70px]'>
         <div className='flex items-center '>
          <img src={logo} alt="Logo" className='logo' />
         </div>
         <div className='sm:hidden text-[27px] flex items-center justify-end cursor-pointer'>
           <FaBars />
         </div>
       
         <div className='sm:flex sm:items-center sm:gap-[30px] sm:justify-end sm:pr-[65px] header-items hidden'>
          <p className='cursor-pointer header-content'>Home</p>
          <p className='cursor-pointer header-content'>About</p>
          <button className='header-button px-[16px] py-[11px] cursor-pointer rounded-[6px]'>Book a Consultation</button>
         </div>
          
    </header>
  )
}

export default Header