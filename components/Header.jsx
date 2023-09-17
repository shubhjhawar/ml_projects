import React, { useState, useContext } from 'react';
import Link from 'next/link';


import { moon_icon, sun } from '@/assets';
import Image from 'next/image';
import { Context } from '@/pages/layout';

const Header = () => {
  
  const [isNight, setIsNight] = useContext(Context);


  return (
    <header className={`flex justify-between items-center w-full py-2 ${isNight ? "text-white"  : 'text-black'}`}>
      <div className='cursor-pointer z-10'>
        <Link href="/">
          <p className=''>LOGO</p>
        </Link>
      </div>


      <div className="flex items-center justify-center text-2xl font-semibold absolute right-0 w-full">ML Odyssey</div>

      <div className="flex gap-2">
        <div>button1</div>
        

        <button
          type="button"
          onClick={() => setIsNight(prev => !prev)}
          className=''
        >
          <div className={`w-12 h-6 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${isNight ? 'bg-white ' : 'bg-gray-300'}`}>
            <div className={`flex gap-2`}>
           

            <div className="flex gap-2">
              <Image
                src={sun}
                alt="icon"
                className={`w-4 h-4`}
              />
              <Image
                src={moon_icon}
                alt="icon"
                className={`w-4 h-4`}
              />
              </div>
            </div>

            <div
              className={`relative bottom-4 w-4 h-4 z-10 rounded-full duration-300 ease-in-out transform ${
                isNight ? 'translate-x-6 bg-slate-950' : 'bg-gray-600'
              }`}
            />
          </div>
        </button>

      </div>
    </header>
  )
}

export default Header