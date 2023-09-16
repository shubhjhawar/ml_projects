import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isDay, setIsDay] = useState(true);

  // Function to toggle day/night mode
  const toggleDayNight = () => {
    setIsDay(!isDay);
    // You can add logic here to update your theme or apply dark mode styles
  };
  return (
    <header className="flex justify-between items-center w-full py-2">
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
          onClick={() => setIsDay(prevDay => !prevDay)}
        >
          <div className={`w-12 h-6 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${isDay ? 'bg-blue-500' : 'bg-gray-300'}`}>
            <div
              className={`w-4 h-4  rounded-full duration-300 ease-in-out transform ${
                isDay ? 'translate-x-6 bg-yellow-500' : 'bg-gray-600'
              }`}
            ></div>
          </div>
        </button>

      </div>
    </header>
  )
}

export default Header