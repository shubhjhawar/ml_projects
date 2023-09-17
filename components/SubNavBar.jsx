import React, { useContext, useState} from 'react';
import { styles } from '@/styles';
import { Context } from '@/pages/layout';

const SubNavBar = ({isActive, setIsActive}) => {

  const [isNight, setIsNight] = useContext(Context);


  return (
    <div className={`rounded-xl shadow-2xl lg:text-4xl text-md font-semibold p-5  gap-2 ${isNight ? "bg-zinc-800" : "bg-gray-100 "}`}>
        <div className='flex flex-wrap center justify-around gap-5' >
           <div className={`${styles.MainButtonHovered}
           ${isActive===0 
            ? 
              isNight 
              ?
                styles.MainButtonPressedNight
              :
                styles.MainButtonPressed
            :
              isNight 
              ?
                styles.MainButtonUnpressedNight
              :
                styles.MainButtonUnpressed
            }`}>
            <button 
              type="button"
              onClick={()=>{setIsActive(0)}}
            >
              <p className='uppercase'>Classification</p>
            </button>
           </div>
  
           <div className={`${styles.MainButtonHovered}
           ${isActive===1 
            ? 
              isNight 
              ?
                styles.MainButtonPressedNight
              :
                styles.MainButtonPressed
            :
              isNight 
              ?
                styles.MainButtonUnpressedNight
              :
                styles.MainButtonUnpressed
            }`}>       
            <button 
              type="button"
              onClick={()=>{setIsActive(1)}}
            >
              <p className='uppercase'>regression</p>
            </button>
           </div>

           <div className={`${styles.MainButtonHovered}
           ${isActive===2
            ? 
              isNight 
              ?
                styles.MainButtonPressedNight
              :
                styles.MainButtonPressed
            :
              isNight 
              ?
                styles.MainButtonUnpressedNight
              :
                styles.MainButtonUnpressed
            }`}>
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