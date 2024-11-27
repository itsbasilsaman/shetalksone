import React from 'react'
import Homebg from '../assets/home-bg.png'
import HomeImg from '../assets/hometitle.png'

function DisplayImage() {
  return (
    <div>
      <div className='right-section  sm:block hidden'>
          <img src={Homebg} alt="Home Image" />
          <img src={HomeImg} alt="Home Title" className='home-logo-image rounded-[6px]' />    
       </div>
    </div>
  )
}

export default DisplayImage