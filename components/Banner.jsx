import React, { useContext } from 'react';
import Image from 'next/image';
import { moon, astro, robot, mlwall} from '../assets';
// import { useTheme } from './ThemeProvider';

const Banner = () => {
  // const [isNight, setIsNight] = useTheme()

  return (
    <div className="my-5">
      <div className="relative min-h-[200px] max-h-[450px]">
        <p className="absolute flex flex-wrap text-4xl text-white font-semibold m-3 min-md:w-1/3 max-sm:w-full max-sm:items-center max-sm:justify-center z-10">
          Turning data into insights!!
        </p>
        <Image
          src={mlwall}
          alt="moon"
          className="relative w-full h-[300px] object-cover md:rounded-2xl shadow-custom object-contain"
        />

        <div className="flex flex md:flex-row-reverse max-md:flex-col w-full flex-wrap -translate-y-[250px]">
          <Image
            src={robot}
            alt="astro"
            className="w-1/3 scale-x-[-1] max-md:h-[400px] max-md:w-full"
          />
          <div className={`flex flex-col justify-end w-2/3 pl-4 tracking-wide leading-[30px] h-auto max-md:hidden dark:text-white text-gray-400 `}>
            Hey guys! Welcome to my Machine Learning portfolio! 
            As a data scientist, I've crafted a collection of projects for you to explore and test firsthand. 
            Explore the world of data-driven innovation that I created for you!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
