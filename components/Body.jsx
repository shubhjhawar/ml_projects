import React, {useState, useEffect, useContext} from 'react'

import { SubNavBar, Projects } from './';
import { classificationModels, regressionModels, MiscModels } from '@/constants';
// import { useTheme } from './ThemeProvider';


const Body = () => {
  const [isActive, setIsActive] = useState(0);
  const [models, setModels] = useState(classificationModels)
  
  useEffect(() => {
    if(isActive==0)
    {
      setModels(classificationModels);
    }
    else if(isActive==1)
    {
      setModels(regressionModels);
    }
    else if(isActive==2)
    {
      setModels(MiscModels);
    }
  }, [isActive])

  // const [isNight, setIsNight] = useTheme()


  

  return (
    <div className={`shadow-2xl gap-2 p-2 pb-10 rounded-2xl dark:bg-gradient-to-r dark:from-zinc-700 dark:to-gray-400 dark:via-gray-600 `}>
        <div className=' p-2 text-xl text-gray-400 dark:text-white mb-5 leading-[30px] tracking-tight'>
          <p className='py-2'>
          In my data science journey, I did everything from data cleaning, data visualisation, hyper parameter tuning etc but here I have classified all my projects in 3 broad categories.
          </p>
          <p className='py-2'>
          Feel free to move from one category and find cool projects.
          </p>
          <p className="py-2">
          Click on the tile to get the details of a particular project and go test it out yourself.
          </p>
        </div>

        <div className="sticky top-0 z-10 backdrop-blur-md" >
          <SubNavBar isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className='flex flex-col w-full h-auto p-2 z-1'>
          <Projects models={models} />
        </div>
    </div>
  )
}

export default Body