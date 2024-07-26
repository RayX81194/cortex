import React from 'react'
import org1 from '../assets/org1.svg'
import org2 from '../assets/org2.svg'
import org3 from '../assets/org3.svg'
import org4 from '../assets/org4.svg'
import org5 from '../assets/org5.svg'
import org6 from '../assets/org6.svg'
import org7 from '../assets/org7.svg'

const Trust = () => {
  return (
    <div className='items-center lg:px-20 py-10 sm:px-5 xs:px-5 pb-20 justify-center'>
    <div className='text-center'>
        <h1 className='text-[60px] lg:block hidden tracking-wide font-vulfBold'>Trusted by Organisations</h1>
        <h1 className='xs:text-[40px] sm:text-[50px] lg:hidden block tracking-wide font-vulfBold leading-[45px] sm:leading-[60px]'>Trusted by<br></br> Organisations</h1>   
        <p className='lg:text-[30px] xs:text-[25px] font-vulfMed'>with<span className='text-pink font-vulfBold'> big hearts </span>since 2010</p>
    </div>
    <div className='items-center sm:pl-28 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 justify-center mt-10'>
            <img src={org1} className='sm:w-[230px] sm:h-[90px] xs:w-[150px] xs:h-[60px] p-2 m-5'/>
            <img src={org2} className='sm:w-[230px] sm:h-[90px] xs:w-[150px] xs:h-[60px] p-2 m-5'/>
            <img src={org3} className='sm:w-[230px] sm:h-[90px] xs:w-[150px] xs:h-[60px] p-2 m-5'/>
            <img src={org4} className='sm:w-[230px] sm:h-[90px] xs:w-[150px] xs:h-[60px] p-2 m-5'/>
            <img src={org5} className='sm:w-[230px] sm:h-[90px] xs:w-[150px] xs:h-[60px] p-2 m-5'/>
            <img src={org6} className='sm:w-[230px] sm:h-[90px] xs:w-[150px] xs:h-[60px] p-2 m-5'/>
        </div>
    </div>
  )
}

export default Trust