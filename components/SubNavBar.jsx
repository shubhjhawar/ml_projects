import React, { useContext, useState} from 'react';
import { styles } from '@/styles';
import { GiStarShuriken } from 'react-icons/gi';
import { MdTrendingUp, MdCategory } from 'react-icons/md';

const SubNavBar = ({ isActive, setIsActive }) => {

  return (
    <div className={`rounded-xl shadow-2xl lg:text-3xl text-md font-semibold p-5 gap-2 dark:bg-zinc-500 dark:bg-opacity-50`}>
      <div className='flex flex-wrap center justify-around gap-5'>
        <div
          className={`p-5 ${styles.MainButtonHovered} ${
            isActive === 0
              ? 'border-[1px] border-stone-500 text-black bg-gray-200 dark:bg-slate-700 dark:text-white'
              : 'shadow-custom bg-white'
          }`}
          
        >
          <button type="button" onClick={() => setIsActive(0)} className="flex gap-2 items-center justify-center">
            <MdCategory className='max-md:w-8 max-md:h-8' />
            <p className='uppercase block max-md:hidden'>Classification</p>
          </button>
        </div>

        <div
           className={`p-5 ${styles.MainButtonHovered} ${
            isActive === 1
              ? 'border-[1px] border-stone-500 text-black bg-gray-200 dark:bg-slate-700 dark:text-white'
              : 'shadow-custom bg-white'
          }`}
        >
          <button type="button" onClick={() => setIsActive(1)} className="flex gap-2 items-center justify-center">
            <MdTrendingUp className='max-md:w-8 max-md:h-8' />
            <p className='uppercase block max-md:hidden'>regression</p>
          </button>
        </div>

        <div
           className={`p-5 ${styles.MainButtonHovered} ${
            isActive === 2
              ? 'border-[1px] border-stone-500 text-black bg-gray-200 dark:bg-slate-700 dark:text-white'
              : 'shadow-custom bg-white'
          }`}
        >
          <button type="button" onClick={() => setIsActive(2)} className='flex gap-2 items-center justify-center'>
            <GiStarShuriken className='max-md:w-8 max-md:h-8' />
            <p className='uppercase block max-md:hidden'>Miscellaneous</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubNavBar;
