import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
// import HomeBackground from '../assets/homebg.png'

function Main() {
  const fullText = "She Talk: Your space to grow, heal and shine."; 
  const initialText = "She Talk: Your"; 
  const [displayedText, setDisplayedText] = useState(initialText); 

  // Animation for the second paragraph
  const fullText2 = "At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."; 
  const initialText2 = "At the heart of Slack are channels:"; 
  const [displayedText2, setDisplayedText2] = useState(initialText2); 

  useEffect(() => {
    // First text animation (for "She Talk: Your")
    let index = initialText.length;  
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));  
        index++;
      } else {
        clearInterval(interval);  
      }
    }, 100);  
    return () => clearInterval(interval);  
  }, []);

  useEffect(() => {
    // Second text animation (for "At the heart of Slack...") with increased speed
    let index2 = initialText2.length;  
    const interval2 = setInterval(() => {
      if (index2 < fullText2.length) {
        setDisplayedText2(fullText2.substring(0, index2 + 1));  
        index2++;
      } else {
        clearInterval(interval2);  
      }
    }, 25);  // Reduced the interval to 50ms for faster animation
    return () => clearInterval(interval2);  
  }, []);

  return (
    <>
      <main className='w-full home-page h-screen sm:grid sm:grid-cols-2 px-[25px] sm:px-[0px]'>
        <div className='left-section flex flex-col pt-[230px] sm:pt-[230px] sm:pl-[80px] pt-[140px] sm:justify-start sm:items-baseline items-center justify-center sm:gap-[0px] gap-[10px]'>
          <h1 className='head sm:text-[39px] font-semibold sm:w-[590px] text-[26px] sm:text-left text-center sm:h-[140px] h-[80px]'>{displayedText}</h1>
          <p className='sm:text-[22px] sm:font-medium sm:text-left text-center text-[18px]'>
            A safe space for women to connect, share, and thrive together.
          </p>
          <p className='sub-title sm:text-[18px] sm:w-[550px] my-[15px] h-[106px] sm:h-[123px] sm:text-left text-center text-[15px] text-gray-800'>
            {/* {displayedText2} */}
            At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
          </p>
          <div>
            <button className='px-[16px] py-[11px] cursor-pointer mr-[10px] rounded-[6px] app-store-button'>
              <FontAwesomeIcon icon={faApple} className='text-[20px] mr-[8px]' />App Store
            </button>
            <button className='px-[16px] py-[11px] cursor-pointer googleplay-button rounded-[6px]' >
              <FontAwesomeIcon icon={faGooglePlay} className='text-[18px] mr-[4px]' /> Google Play
            </button>
          </div>
        </div>
        <div className='main-right-section sm:block hidden sm:flex sm:justify-center sm:items-center'>
           {/* <img src={HomeBackground} alt="" className='sm:w-[400px] rounded-[50%]' /> */}
        </div>
      </main>
    </>
  );
}

export default Main;
