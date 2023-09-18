import React, { useContext, useState} from 'react';
import { styles } from '@/styles';

const SubNavBar = ({ isActive, setIsActive }) => {

  return (
    <div className={`rounded-xl shadow-2xl lg:text-4xl text-md font-semibold p-5 gap-2 dark:bg-zinc-500`}>
      <div className='flex flex-wrap center justify-around gap-5'>
        <div
          className={`p-5 ${styles.MainButtonHovered} ${
            isActive === 0
              ? 'border-[1px] border-stone-500 text-black bg-gray-200 dark:bg-slate-700 dark:text-white'
              : 'shadow-custom bg-white'
          }`}
          
        >
          <button type="button" onClick={() => setIsActive(0)}>
            <p className='uppercase'>Classification</p>
          </button>
        </div>

        <div
           className={`p-5 ${styles.MainButtonHovered} ${
            isActive === 1
              ? 'border-[1px] border-stone-500 text-black bg-gray-200 dark:bg-slate-700 dark:text-white'
              : 'shadow-custom bg-white'
          }`}
        >
          <button type="button" onClick={() => setIsActive(1)}>
            <p className='uppercase'>regression</p>
          </button>
        </div>

        <div
           className={`p-5 ${styles.MainButtonHovered} ${
            isActive === 2
              ? 'border-[1px] border-stone-500 text-black bg-gray-200 dark:bg-slate-700 dark:text-white'
              : 'shadow-custom bg-white'
          }`}
        >
          <button type="button" onClick={() => setIsActive(2)}>
            <p className='uppercase'>Miscellaneous</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubNavBar;
