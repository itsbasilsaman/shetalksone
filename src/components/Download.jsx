import React from 'react'

function Download() {
  return (
    <>
      <section className='getapp-section flex items-center justify-center flex-col text-white gap-[10px] sm:gap-[20px] h-[180px] sm:h-[300px] px-[20px] sm:px[0px]'>
             <h1 className='sm:text-[38px] text-[21px] text-center  sm:font-semibold'>See all that you can accomplish with Slack</h1>
             <button className='sm:text-[18px] bg-white font-medium px-[10px] py-[6px] sm:px-[12px] sm:py-[8px] rounded-[6px] hover:bg-transparent' onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.shetalks'}>Download Now</button>
        </section>
    </>
  )
}

export default Download