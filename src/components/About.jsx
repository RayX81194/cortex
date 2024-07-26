import React from 'react'
import "../App.css";
import Button from "./Button"

const About = () => {
  return (
    <div className='p-20 lg:px-36 sm:px-20 xs:px-10'>
        <div className=''>
            <p className='font-vulfMono tracking-wider text-dimWhite'>WHAT TO EXPECT</p>
            <hr className='w-full my-5 h-1 bg-white  '></hr>
            <h1 className='mt-12 font-vulfMed lg:text-[100px] sm:text-[80px] xs:text-[42px] lg:leading-[100px] sm:leading-[90px] xs:leading-[50px] text-dimWhite'>Stress<span className='text-zinc-700 font-medium'>full</span> less<br></br>web development</h1>
        </div>


        <div className='flex lg:flex-row sm:flex-row xs:flex-col gap-10 mt-10'>
            <p className='text-[22px] text-dimWhite font-vulf'>
            Grounded in our mission to Be Nice, Do Good, Cortex is uniquely positioned to help you find sustainable growth through a blend of technical expertise and business acumen.
            </p>
            <p className='text-[22px] text-dimWhite font-vulf'>
            But ultimately, it’s about service over services. As we collaboratively fight for good in this world, we believe the best work happens together. We focus on making together work better.
            </p>
        </div>

        <div className='btn mt-10'>
            <Button>SEE OUR SERVICES</Button>
        </div>
    </div>
  )
}

export default About