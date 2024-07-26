import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col lg:my-20 sm:my-12 xs:my-5 items-center justify-center text-center'>
        <h1 className='lg:text-[90px] sm:text-[70px] xs:text-[50px] font-vulfBold lg:max-w-[1000px] sm:max-w-[700px] xs:max-w-[600px]  text-primary sm:leading-[70px] xs:leading-[60px] lg:leading-[90px]'>The <span className='font-extrabold text-pink'>{"{"}web agency{"}"}</span> for awesome projects</h1>
        <p className='lg:mt-16 xs:p-4 xs:mt-10 sm:mt-12 text-[18px] tracking-wide text-zinc-700  font-vulf'>Really good sh*t shipped by people you're really going to like f*cking with.</p>
    </div>
  )
}

export default Hero