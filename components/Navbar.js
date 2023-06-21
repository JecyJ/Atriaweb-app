'use client';

import Link from "next/link";
import { useState } from "react";
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState()

  function handleNav(){
    return setNav(prevNav => !prevNav)
  }


  return (
    <section className='fixed top-8 shadow-xl z-[100] w-full'>
      <div className='flex justify-between items-center md:px-0 max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto bg-transparent'>
        <Link href='/'>
          <h1 className='text-4xl text-[#3c4e3d] font-semibold'>atria</h1>
        </Link>
        <ul className='text-[#3c4e3d] text-base list-disc list-inside hidden md:block'>
        <Link href='/atriainstitute'>
          <li>Atria Institute</li>
        </Link>
        <Link href='/atriaacademy'>
          <li>Atria Academy of Science & Medicine</li>
        </Link>
        <Link href='/atriahealth'>
          <li>Atria Health Collaborative</li>
        </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden text-[#3c4e3d]'>
          <HiOutlineMenuAlt1 size={24} />
        </div>
        <div className={nav ? 'fixed pt-8 md:hidden left-0 top-0 right-0 bottom-0 w-[100%] h-full bg-[#3c4e3d] ease-in-out duration-700' : 'fixed md:hidden bottom-[-100%] h-full bg-[#3c4e3d] ease-in-out duration-700'}>
          <div onClick={handleNav} className='max-w-[520px] m-auto mt-6 flex justify-between items-center'>
            <Link href='/'>
              <h1 className='text-4xl text-white font-semibold'>atria</h1>
            </Link>
            <div onClick={handleNav} className='text-white'>
              <AiOutlineClose size={24} />        
            </div>
          </div>
          <ul className='text-white text-5xl mt-8 max-w-[520px] md:max-w-[1250px] m-auto'>
          <Link href='/atriainstitute'>
            <li onClick={handleNav}>Atria Institute</li>
          </Link>
          <Link href='/atriaacademy'>
            <li onClick={handleNav} className='my-12'>Atria Academy of Science & Medicine</li>
          </Link>
          <Link href='/atriahealth'>
            <li onClick={handleNav}>Atria Health Collaborative</li>
          </Link>
          </ul>
          <ul className='max-w-[520px] md:max-w-[1250px] m-auto text-white mt-24'>
          <Link href='/career'>
            <li onClick={handleNav} className='mb-12'>Career Opportunities</li>
          </Link>
          <Link href='/request'>
            <li onClick={handleNav}>Request Info</li>
          </Link>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar;