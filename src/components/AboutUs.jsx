import React from 'react'
import video from '../assets/video.mp4'
import screenshot from '../assets/scrnshotone.png'
function AboutUs() {
  return (
    <>
       <main className="about-page us w-full sm:h-screen px-[18px] pt-[45px] sm:px-[0px] sm:py-[0px]   sm:pt-[0px] pb-[35px] sm:pb-[0px]">
     
      <section className="section-two sm:flex sm:justify-center sm:items-center">
      {/* <video src={video} autoPlay loop   muted className="sm:w-[260px] rounded-[16px] object-cover"></video> */}
      <img src={screenshot} alt="" className='sm:w-[370px] screenshot-image' />
      </section>
      <section className="sm:flex section-one sm:flex-col sm:justify-center  ">
          <h1 className="text-gray-400   uppercase sm:text-[21px] text-[18px] sm:text-[19px]  font-medium">Our Purpose</h1>
          <h2 className="sm:text-[37px] sm:font-semibold sm:w-[450px] text-[30px] font-semibold py-[5px] py-[0px]">Empowering Voices</h2>
          <p className="text-gray-600 sm:w-[660px] text-[18px] sm:text-[16px]">She Talks was created to provide a safe, supportive space where women can connect, share experiences, and empower one another. We aimed to build a platform that prioritizes mental well-being, personal growth, and community, fostering an environment where women can uplift each other and strengthen their voices.</p>
      </section>
    </main> 
    </>
  )
}

export default AboutUs