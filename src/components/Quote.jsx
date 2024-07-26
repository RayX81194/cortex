import React from 'react'

const Quote = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center'>
        <h2 className='text-zinc-400 lg:font-vulfBold xs:font-medium xs:text-[15px] lg:text-[20px]'>FROM FULLSTACK ACADEMY</h2>
        <p className='text-[#E8E9EB] font-light xs:text-[22px] italic lg:text-[40px] mb-10 lg:max-w-[1000px] xs:max-w-[370px] sm:max-w-[700px] mt-10'>"We needed a Craft CMS developer to build a scalable platform that would support our future growth. We've been thrilled with Zaengle's work, which has driven performance gains in conversion and engagement while increasing content creation ease and efficiency."</p>
        <h2 className='text-dimWhite font-vulfBold xs:text-[15px] lg:text-[20px]'>BRAD HESS</h2>
        <h2 className='text-zinc-400 font-vulf xs:text-[15px] mb-16 italic lg:text-[20px]'>DIRECTOR OF PERFORMANCE MARKETING</h2>
    </div>
  )
}

export default Quote