import React, { useState, useEffect } from 'react';
import menu from "../assets/menu.svg"; 
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className='relative flex flex-col lg:flex-row lg:items-center xs:justify-center lg:justify-between'>
      <div className='flex items-center justify-between w-full lg:px-10 lg:py-10 xs:py-10'>
        <div className='hidden hover:border-b-2 hover:text-pink transition lg:block font-vulf font-bold mr-20'>Home</div>
        <div className='font-bold hover:border-b-2 hover:text-pink transition font-vulf lg:mr-20'>Work</div>
        <div className='hidden hover:border-b-2 hover:text-pink transition lg:block font-bold font-vulf'>Services</div>
        <div className='flex flex-col leading-[30px] items-center mx-auto'>
          <h1 className='text-[35px] font-vulf text-pink hover:text-zinc-300 transition font-bold'>cortex</h1>
        </div>
        <div className='hidden hover:border-b-2 hover:text-pink transition lg:block font-vulf font-bold'>About</div>
        <div className='hidden hover:border-b-2 hover:text-pink transition lg:block font-vulf font-bold ml-20'>Blog</div>
        <div className='hidden hover:border-b-2 hover:text-pink transition lg:block font-vulf font-bold ml-20'>Contact</div>
        <button 
          className="lg:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src={menu} alt="Menu Icon" className="w-10 h-8" />
        </button>
      </div>
      
      <div 
        className={`fixed top-0 right-0 z-30 w-full h-full bg-dimBlack ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button 
          className="absolute top-3 right-3 p-2"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <img src={close} alt="Close Icon" className="w-10 h-8 mt-10 mr-3" />
        </button>

        <ul className='list-none flex flex-col items-start mt-20 pl-5'>
          <li><img src={logo} className='w-[65px] h-[65px] relative bottom-10' alt="Logo" /></li>
          <li className='cursor-pointer hover:border-b-2 font-bold text-dimWhite text-[25px] mb-4'>Home</li>
          <li className='cursor-pointer hover:border-b-2 font-bold text-dimWhite text-[25px] mb-4'>Services</li>
          <li className='cursor-pointer hover:border-b-2 font-bold text-dimWhite text-[25px] mb-4'>About</li>
          <li className='cursor-pointer hover:border-b-2 font-bold text-dimWhite text-[25px] mb-4'>Blog</li>
          <li className='cursor-pointer hover:border-b-2 font-bold text-dimWhite text-[25px] mb-4'>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
