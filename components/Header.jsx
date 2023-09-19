import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { logolight, logodark } from '@/assets';

const Header = () => {
  return (
    <header className={`flex justify-between items-center w-full py-2 dark:text-white `}>
      <div className='flex items-center justify-center px-2 mt-2 cursor-pointer z-10'>
        <Link href="/">
          <Image 
            src={logolight}
            alt="logo"
            className='w-[35px] h-[35px] dark:hidden block'
          />
          <Image 
            src={logodark}
            alt="logo"
            className='w-[35px] h-[35px] dark:block hidden'
          />
        </Link>
      </div>

      <div className="flex items-center justify-center text-2xl font-semibold absolute right-0 w-full">
        <p className='hidden sm:block'>My Machine Learning / Data Science Odyssey</p>
      </div>


    </header>
  );
}

export default Header;
