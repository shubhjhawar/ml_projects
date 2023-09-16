import React from 'react';
import Image from 'next/image';
import { moon, astro } from '../assets';

const Banner = () => {
  return (
    <div className="my-5">

      <div className="relative  h-[450px] h-auto">
        <p className="absolute flex flex-wrap text-4xl text-white font-semibold m-3 min-md:w-1/3 max-sm:w-full max-sm:items-center max-sm:justify-center z-10">Some quote here</p>
        <Image 
            src={moon}
            alt="moon"
            className='relative w-full h-[300px] object-cover md:rounded-2xl shadow-2xl'
        />
  
       <div className=' flex flex md:flex-row-reverse max-md:flex-col  w-full h-auto flex-wrap -translate-y-[250px] '>
        <Image 
            src={astro}
            alt="astro"
            className=' w-1/3  scale-x-[-1] max-md:h-[400px] max-md:w-full'
          />
        <div className='flex flex-col justify-end w-2/3 pl-4 text-gray-400 tracking-wide leading-[30px] h-auto max-md:hidden'>
            Description of the website about 200 words - 3/4 lines
            Description of the website about 200 words - 3/4 lines
            Description of the website about 200 words - 3/4 lines
            Description of the website about 200 words - 3/4 lines
            Description of the website about 200 words - 3/4 lines
        </div>
       </div>

      </div>
    </div>
  )
}

export default Banner;
