import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {twitter, linkedin, logo, github} from "@/assets";
import { Context } from '@/pages/layout';

const Footer = () => {
  const [isNight, setIsNight] = useContext(Context);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Add smooth scrolling animation
    });
  }
  return (
    <div className="p-5 mt-2">
      <div className="flex justify-between items-center">
        <div
          className={` tracking-wide text-lg hover:scale-105 hover:cursor-pointer ${isNight ? 'text-white' :'text-gray-400' }`}
          onClick={() => scrollToTop()}
          title="Scroll to Top"
        >
          Shubh Jhawar - Data Scientist
        </div>

        <div className={`flex flex-col justify-center items-center tracking-wide text-md hover:scale-105 ${isNight ? 'text-white' :'text-gray-400' } `}>
          <p>Contact Me-</p>
          <a href="mailto:shubjhawar78@gmail.com" className='hover:underline'>
            shubjhawar78@gmail.com
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-3 grayscale ">

        <Link href="https://github.com/shubhjhawar" target="_blank">
          <div className='hover:scale-125 '>
            <Image 
              src={github}
              alt="github"
              title="GitHub"
              className='w-[20px] h-[20px] bg-black object-contain'
            />
          </div>
        </Link>


          <Link href="https://www.linkedin.com/in/shubh-jhawar-069587192/" target="_blank">
           <div className='hover:scale-125 '>
            <Image 
              src={linkedin}
              alt="linkedin"
              title="LinkedIn"
              className='w-[20px] h-[20px] object-contain'
            />
           </div>
          </Link>

          <Link href="https://twitter.com/ShubhJhawar3" target="_blank">
           <div className='hover:scale-125 '>
            <Image 
              src={twitter}
              alt="twitter"
              title="Twitter"
              className='w-[20px] h-[20px] object-contain'
            />
           </div>
          </Link>

          <Link href="https://shubh-jhawar-portfolio.vercel.app/" target="_blank">
           <div className='hover:scale-125 '>
            <Image 
              src={logo}
              alt="logo"
              title="Portfolio"
              className='w-[20px] h-[20px] object-contain'
            />
           </div>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Footer