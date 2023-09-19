import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { styles } from '@/styles';
import { moon } from '@/assets';

const Projects = ({models}) => {

  return (
    <div className={`flex flex-col items-center justify-center w-full`}>
        <div className={` max-sm:text-2xl text-6xl font-bold mt-10 dark:text-white`}>
            {models.title}
        </div>
        <div className={`max-sm:text-lg text-2xl  leading-[20px] tracking-wide mt-2 text-gray-400 dark:text-gray-200`}>
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
                        <div className={`p-2 flex max-sm:flex-col rounded-xl ${index%2 !== 0 ? 'flex-row-reverse bg-gradient-to-l' : 'bg-gradient-to-r'} text-black dark:from-gray-400 dark:to-zinc-600 dark:text-white`}>
                            <div className='flex flex-col max-sm:w-full w-2/3 px-2 items-center justify-center'>
                                <div className='text-2xl font-semibold flex'>
                                {project.title}
                                </div>
                                <div className=" flex flex-wrap items-center justify-start text-xl max-md:hidden ">
                                    {project.description}
                                </div>
                            </div>
                            <Image 
                                src={project.icon}
                                alt="img"
                                className='max-sm:w-full w-1/3 h-[200px] rounded-2xl p-3'
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