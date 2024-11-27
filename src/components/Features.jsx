import React from 'react'

function Features() {
  return (
    <>
       <div className='w-full sm:h-screen about-app'>  
        <h1 className='text-center sm:text-[26px] sm:font-medium my-[45px]'>Our Features</h1>
       <section className='our-features w-full h-[80vh] sm:flex'>
           <div className='box-one sm:w-[610px] sm:h-[285px]'>

           </div>
           <div className='box-two sm:w-[610px] sm:h-[320px] flex justify-center items-center sm:text-[25px] flex-col text-center sm:font-medium text-white'>
             <h1>Watch this quick video to see how basecamp works</h1>
             <button className='sm:text-[17px]  box-btn '>Watch "How basecamp works"</button>
           </div>
           <div className='box-three sm:w-[610px] sm:h-[285px]'>
           </div>
       </section>
     </div> 
    </>
  )
}

export default Features