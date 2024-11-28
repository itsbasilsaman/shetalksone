import React, { useEffect } from 'react';
import ScreenShort from '../assets/scrtwo.png';
import photoOne from '../assets/11.png'
import photoTwo from '../assets/12.png'
import photoThree from '../assets/13.png'

function AboutAppTwo() {
  useEffect(() => {
    const images = document.querySelectorAll('.about-one, .about-two, .about-three, .about-four');
    const screenshot = document.querySelector('.screenshot');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0) scale(1)'; // Move to original position and scale up
            entry.target.style.opacity = '1'; // Make visible
          } else {
            // Reset images to be off-screen and small
            if (entry.target.classList.contains('about-one') || entry.target.classList.contains('about-two')) {
              entry.target.style.transform = 'translateX(100%) scale(0.8)'; // Start from the right and scale smaller
            } else if (entry.target.classList.contains('about-three') || entry.target.classList.contains('about-four')) {
              entry.target.style.transform = 'translateX(-100%) scale(0.8)'; // Start from the left and scale smaller
            }
            entry.target.style.opacity = '0'; // Make hidden when out of view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      }
    );

    images.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <main className="about-page section-two w-full sm:h-screen px-[18px] pt-[45px] sm:px-[0px] sm:py-[0px]   sm:pt-[0px] pb-[35px] sm:pb-[0px]">
      <section className="section-two two sm:flex sm:justify-center sm:items-center">
        <img src={ScreenShort} alt="" className="sm:w-[570px] screenshot" />
        <img src={photoOne} alt="" className="about-one section-two" />
        <img src={photoTwo} alt="" className="about-two section-two" />
        <img src={photoThree} alt="" className="about-three section-two" />
        
      </section>
      <section className="sm:flex section-one two sm:flex-col sm:justify-center sm:pl-[150px]">
        <h1 className="text-gray-400   uppercase sm:text-[21px] text-[19px]  font-medium">Chat</h1>
        <h2 className="sm:text-[37px] sm:font-semibold sm:w-[450px] text-[30px] font-semibold py-[5px] py-[0px]">Chat the way you want</h2>
        <p className="text-gray-700 sm:w-[460px] text-[18px] sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      </section>
    </main> 
    </>
  )
}

export default AboutAppTwo