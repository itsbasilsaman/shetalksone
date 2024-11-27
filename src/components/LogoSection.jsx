import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { SiSamsung } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
import { SiMahindra } from "react-icons/si";
import { SiCognizant } from "react-icons/si";
import { SiZoho } from "react-icons/si";

function LogoSection() {
  return (
    <section className='logo-section w-full sm:h-[240px] py-[10px] bg-gray-200'>
       <h1 className='text-center text-gray-400 uppercase py-[12px] sm:text-[21px] sm:pt-[35px] '>As Seen on</h1>
       <div className='w-full h-auto flex sm:justify-center -semibold text-[55px] sm:text-[70px] sm:flex-row flex-col   sm:gap-[98px] sm:pt-[30px]  logos'>
     <div className='flex gap-[98px] justify-center'>
         <SiSamsung  />
         <SiInfosys />
     </div>
      <div className='flex gap-[98px] justify-center'>
         <SiCognizant />
          <SiMahindra/>
      </div >
       <div className='flex justify-center items-center'>
         <SiZoho />
       </div>
      
       </div>
    </section>
  )
}

export default LogoSection