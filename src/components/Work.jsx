import React from 'react'
import one from '../assets/one.avif'
import two from '../assets/two.avif'
import three from '../assets/three.avif'
import four from '../assets/four.avif'
import Button from "./Button"

const Work = () => {
  return (
    <div className='lg:px-40 xs:px-20 mb-20'>
        <div className='grid sm:grid-cols-2 gap-x-20 gap-y-12'>
            <div className='text-center'>
            <img src={one}/>
            <h1 className='font-vulfMed text-dimWhite hover:underline text-[30px] mt-3'>The Comprehensible Classroom</h1>
            <p className='font-vulf text-zinc-400  text-[15px] mt-1'>Equipping teachers to support language acquisition</p>
            </div>

            <div className='text-center'>
            <img src={two}/>
            <h1 className='font-vulfMed text-dimWhite hover:underline text-[30px] mt-3'>Garbanzo</h1>
            <p className='font-vulf text-zinc-400  text-[15px] mt-1'>Learn Spanish through stories</p>
            </div>
            
            <div className='text-center'>
            <img src={three}/>
            <h1 className='font-vulfMed text-dimWhite hover:underline text-[30px] mt-3'>Workify</h1>
            <p className='font-vulf text-zinc-400  text-[15px] mt-1'>Build the business you've always wanted</p>
            </div>

            <div className='text-center'>
            <img src={four}/>
            <h1 className='font-vulfMed text-dimWhite hover:underline text-[30px] mt-3'>FullStack Academy</h1>
            <p className='font-vulf text-zinc-400  text-[15px] mt-1'>Preparing students to succeed in tech</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-12'>
        <Button>SEE ALL PROJECTS</Button>
        </div>
    </div>
  )
}

export default Work