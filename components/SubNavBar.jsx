import React, { useState} from 'react';
import { styles } from '@/styles';

const SubNavBar = ({isActive, setIsActive}) => {



  return (
    <div className="rounded-xl shadow-2xl lg:text-4xl text-md font-semibold p-5 bg-gray-100 text-gray-500 gap-2">
        <div className='flex flex-wrap center justify-around gap-5' >
           <div className={`${styles.MainButtonHovered}  ${isActive===0 ? styles.MainButtonPressed : styles.MainButtonUnpressed}`}>
            <button 
              type="button"
              onClick={()=>{setIsActive(0)}}
            >
              <p className='uppercase'>Classification</p>
            </button>
           </div>
  
           <div className={`uppercase ${styles.MainButtonHovered}  ${isActive===1 ? styles.MainButtonPressed : styles.MainButtonUnpressed}`}>
            <button 
              type="button"
              onClick={()=>{setIsActive(1)}}
            >
              <p className='uppercase'>regression</p>
            </button>
           </div>

           <div className={`${styles.MainButtonHovered}  ${isActive===2 ? styles.MainButtonPressed : styles.MainButtonUnpressed}`}>
            <button 
              type="button"
              onClick={()=>{setIsActive(2)}}
            >
              <p className='uppercase'>deep learning</p>
            </button>
           </div>
 
        </div>
    </div>
  )
}

export default SubNavBar