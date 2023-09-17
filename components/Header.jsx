import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/app/ThemeSwitcher';

const Header = () => {
  return (
    <header className={`flex justify-between items-center w-full py-2 dark:text-white `}>
      <div className='cursor-pointer z-10'>
        <Link href="/">
          <p className=''>LOGO</p>
        </Link>
      </div>

      <div className="flex items-center justify-center text-2xl font-semibold absolute right-0 w-full">ML Odyssey</div>

      <div className="flex gap-2">
      </div>
    </header>
  );
}

export default Header;
