import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { styles } from '@/styles';
import { moon } from '@/assets';

const Projects = ({models}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='text-6xl font-bold mt-10'>
            {models.title}
        </div>
        <div className='text-2xl text-gray-400 leading-[20px] tracking-wide mt-2'>
            {models.desc}
        </div>
        {/* conatiner start */}
            <div>
                {models.projects.map((project, index) => (
                <Link   
                    href={`/projects/${project.title}`} 
                    key={index}
                >
                    <div className={`transition-transform transform hover:scale-105 ease-in ${styles.projectsContainer}`} >
                        <div className={`flex ${index !==0 && 'flex-row-reverse'}`}>
                        <div className='flex flex-col w-2/3 px-2 items-center justify-center'>
                                <div className='text-2xl font-semibold flex'>
                                {project.title}
                                </div>
                                <div className=" flex flex-wrap items-center justify-start text-xl max-md:hidden text-gray-400">
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