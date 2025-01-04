import React from 'react'
import react from "../assets/react.svg"
import tail from "../assets/tail.svg"
import mongo from "../assets/mongo.svg"
import word from "../assets/word.svg"
import insta from "../assets/insta.svg"
import git from "../assets/git.svg"
import discord from "../assets/discord.svg"
import link from "../assets/link.svg"
import logo from "../assets/logo.svg"
import "../App.css"


const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <div className='lg:pt-20 xs:p-10 lg:px-36 '>
        <div className='flex flex-col items-start justify-start'>
            <p className='text-[20px] font-vulf text-zinc-400'>Ready to plan a project?</p>
            <h1 className='lg:text-[80px] sm:text-[60px] xs:text-[35px] hover:text-gray-400 font-vulfMed text-dimWhite duration-300 transition'>Let's get started<span className='arrowani'> &#8594;</span></h1>    
        </div>    
        <div className='grid lg:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 items-start gap-10 lg:px-10 xs:px-5 xs:pt-12 lg:pt-20 lg:pb-20 justify-between'>
        <ul>
                <li className='font-vulfMono mb-6 text-zinc-400 text-[17px]'>PROJECTS</li>
                <li className=' text-dimWhite hover:underline text-[17px] py-3 font-vulfMed'>Garbanzo</li>
                <li className=' text-dimWhite hover:underline text-[17px] py-3 font-vulfMed'>Workify</li>
                <li className=' text-dimWhite mb-12 hover:underline text-[17px] py-3 font-vulfMed'>Fullstack<br></br> Academy</li>
            </ul>
            <ul>
                <li className='font-vulfMono mb-6 text-zinc-400 text-[17px]'>COMPANY</li>
                <li className=' text-dimWhite hover:underline text-[17px] py-3 font-vulfMed'>About</li>
                <li className=' text-dimWhite hover:underline text-[17px] py-3 font-vulfMed'>Serivces</li>
                <li className=' text-dimWhite hover:underline text-[17px] py-3 font-vulfMed'>Guides</li>
                <li className=' text-dimWhite hover:underline text-[17px] py-3 font-vulfMed'>Blogs</li>
            </ul>
            <ul>
               
                <li className='font-vulfMono mb-6 text-zinc-400 text-[17px]'>GUIDES</li>
                <a href="https://react.dev/">
                <div className='flex flex-row items-center'>
                <img src={react} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>React JS</li>
                </div>
                </a>
                <a href="https://tailwindcss.con">
                <div className='flex flex-row items-center'>
                <img src={tail} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>Tailwind CSS</li>
                </div>
                </a>
                <a href="https://www.mongodb.com/">
                <div className='flex flex-row items-center'>
                <img src={mongo} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>MongoDB</li>
                </div>
                </a>
                <a href="https://wordpress.com/">
                <div className='flex flex-row items-center'>
                <img src={word} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>Wordpress</li>
                </div>
                </a>
            </ul>
            <ul>
                <li className='font-vulfMono mb-6 text-zinc-400 text-[17px]'>SOCIAL</li>
                <a href="https://www.instagram.com/msphartiyal">
                <div className='flex flex-row items-center'>
                <img src={insta} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>Instagram</li>
                </div>
                </a>
                <a href="https://www.linkedin.com/in/manishphartiyal/">
                <div className='flex flex-row items-center'>
                <img src={link} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>Linkedin</li>
                </div>
                </a>
                <a href="http://rayx81194.github.io/">
                <div className='flex flex-row items-center'>
                <img src={git} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>Github</li>
                </div>
                </a>
                <a href="https://discord.com/   ">
                <div className='flex flex-row items-center'>
                <img src={discord} className='w-[23px] h-[33px]' />
                <li className=' text-dimWhite hover:underline text-[17px] py-3 p-2 font-vulfMed'>Discord</li>
                </div>
                </a>
            </ul>
        </div>
        <div className='grid sm:grid-cols-5 xs:grid-rows-1 items-center sm:gap-5 lg:gap-5 xs:gap-2 justify-center pt-10 pb-2 px-40'>
            <img src={logo} className='w-[60px] h-[60px] sm:hidden blocc mb-4' />
            <h1 className='font-vulfBold text-dimWhite text-[13px]'>Cortex © {year}</h1>
            <h1 className='font-vulfBold hover:underline text-dimWhite text-[13px]'>Privacy</h1>
            <img src={logo} className='w-[60px] sm:block hidden h-[60px]' />
            <h1 className='font-vulfBold hover:underline text-dimWhite text-[13px]'>Accessibilty</h1>
            <h1 className='font-vulfBold hover:underline text-dimWhite text-[13px]'>Terms and Conditions</h1>
        </div>

    </div>
  )
}

export default Footer