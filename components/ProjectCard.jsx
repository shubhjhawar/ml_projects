import Link from 'next/link';
import React, { useContext } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({details}) => {
    console.log(details)

    const backgroundStyle = {
        backgroundImage: `url(${details?.icon.src})`,
        backgroundSize: 'contain', // You can adjust this based on your design preferences
        backgroundPosition: 'center', // You can adjust this based on your design preferences
    };

  return (
    <div className="mt-5 w-full min-h-screen rounded-3xl shadow-2xl dark:text-white dark:bg-gradient-to-b dark:from-gray-500 dark:to-black">
        <div className='flex flex-col items-center justify-center p-10'>
            <div className="text-5xl font-bold mb-5 hover:underline tracking-wide flex gap-2">
                {details?.title}
                
                {details?.code && (
                    <a href={details?.code} target="_blank" rel="noopener noreferrer" title='github-link'>
                        <FaExternalLinkAlt className='w-5 h-5' />
                    </a>
                )}

            </div>
            <div className="flex max-md:flex-col max-md:items-center w-full justify-around text-gray-600 tracking-wide leading-[35px] dark:text-white ">
                <div className='max-md:w-full w-1/2 px-2 my-2 max-md:ml-0 ml-5 hover:scale-105'>
                    <p className="justify-center items-center flex text-black  text-3xl dark:text-white border-b-[3px] border-black dark:border-white ">Description</p>
                    <p className='text-lg dark:text-gray-300 text-black my-2 p-2'>{details?.description}</p>
                </div>
                
                <div className='max-md:w-full w-1/2 px-2 my-2 max-md:ml-0 ml-5 hover:scale-105'>
                    <p className="justify-center items-center flex text-black  text-3xl dark:text-white border-b-[3px] border-black dark:border-white ">Working</p>
                    <p className='text-lg dark:text-gray-300 text-black my-2 p-2'>how does this work</p>
                </div>
            </div>


            <div className="rounded-2xl shadow-2xl w-full h-screen relative">
                <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-black opacity-50" style={backgroundStyle}></div> {/* Add the dark overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    the actual project
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard