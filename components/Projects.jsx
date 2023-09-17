import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { styles } from '@/styles';
import { moon } from '@/assets';
import { Context } from '@/pages/layout';

const Projects = ({models}) => {
  const [isNight, setIsNight] = useContext(Context);

  return (
    <div className={`flex flex-col items-center justify-center w-full`}>
        <div className={`text-6xl font-bold mt-10 ${isNight && "text-white"}`}>
            {models.title}
        </div>
        <div className={`text-2xl  leading-[20px] tracking-wide mt-2 ${isNight ? "text-gray-200" : "text-gray-400"} `}>
            {models.desc}
        </div>
        {/* conatiner start */}
            <div>
                {models.projects.map((project, index) => (
                <Link   
                    href={`/projects/${project.title}`} 
                    key={index}
                >
                    <div className={`transition-transform transform hover:scale-105 ease-in ${styles.projectsContainer} `} >
                        <div className={`p-2 flex rounded-xl ${index !==0 ? 'flex-row-reverse bg-gradient-to-l' : 'bg-gradient-to-r'} ${isNight && " from-gray-400 to-zinc-600"} ${isNight ? "text-white" : "text-black"} `}>
                        <div className='flex flex-col w-2/3 px-2 items-center justify-center'>
                                <div className='text-2xl font-semibold flex'>
                                {project.title}
                                </div>
                                <div className=" flex flex-wrap items-center justify-start text-xl max-md:hidden ">
                                    {project.description}
                                </div>
                        </div>
                            <Image 
                                src={moon}
                                alt="img"
                                className='w-1/3 rounded-2xl'
                            />
                        </div>
                    </div>
                </Link>
                ))}
            </div>
       
       {/* conatiner end */}

    </div>
  )
}

export default Projects