import React, { useEffect } from 'react';
import ScreenShort from '../assets/scrtwo.png';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';

function AboutApp() {
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
    <main className="about-page w-full sm:h-screen px-[18px] pt-[45px] sm:px-[0px] sm:py-[0px]   sm:pt-[0px] pb-[35px] sm:pb-[0px]">
      <section className="sm:flex section-one sm:flex-col sm:justify-center sm:pl-[150px]">
        <h1 className="text-gray-400   uppercase sm:text-[21px] text-[19px]  font-medium">Video</h1>
        <h2 className="sm:text-[37px] sm:font-semibold sm:w-[450px] text-[30px] font-semibold py-[5px] py-[0px]">Enjoy videos with your friends</h2>
        <p className="text-gray-700 sm:w-[460px] text-[18px] sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      </section>
      <section className="section-two sm:flex sm:justify-center sm:items-center">
        <img src={ScreenShort} alt="" className="sm:w-[570px] screenshot" />
        <img src={one} alt="" className="about-one" />
        <img src={two} alt="" className="about-two" />
        <img src={three} alt="" className="about-three" />
        <img src={four} alt="" className="about-four" />
      </section>
    </main>
  );
}

export default AboutApp;
