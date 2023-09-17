import React, {useState, useEffect, useContext} from 'react'

import { SubNavBar, Projects } from './';
import { classificationModels, regressionModels, deepLearningModels } from '@/constants';
import { Context } from '@/pages/layout';


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
      setModels(deepLearningModels);
    }
  }, [isActive])

  const [isNight, setIsNight] = useContext(Context);

  

  return (
    <div className={`shadow-2xl gap-2 p-2 pb-10 rounded-2xl ${isNight && "bg-gradient-to-r from-zinc-700 to-gray-400 via-gray-600"}`}>
        <SubNavBar isActive={isActive} setIsActive={setIsActive} />
        <div className='flex flex-col  w-full h-auto p-2 '>
          <Projects models={models} />
        </div>
    </div>
  )
}

export default Body