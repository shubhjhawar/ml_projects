import { Context } from '@/pages/layout';
import React, { useContext } from 'react'

const ProjectCard = ({details}) => {
  const [isNight, setIsNight] = useContext(Context);

  return (
    <div className="mt-5 w-full min-h-screen border-[1px] rounded-lg shadow-2xl">
        <div className='flex flex-col items-center justify-center p-10'>
            <div className="text-4xl font-bold mb-5 hover:underline tracking-wide ">
                {details?.title}
            </div>
            <div className="flex w-full justify-around text-xl text-gray-600 tracking-wide leading-[35px]">
                <div>
                    <p className="text-black underline text-2xl">Description</p>
                    <p>{details?.description}</p>
                </div>
                
                <div>explaination or something (how does it work) </div>
            </div>

            <div className="">
                an image as abackground maybe 
            </div>

            <div className="border-[5px]  w-full h-screen">
                the actual project
            </div>
        </div>
    </div>
  )
}

export default ProjectCard