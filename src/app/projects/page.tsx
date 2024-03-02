import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsPage = () => {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-16">
        <h1 className="text-[#E08AED] font-bold text-6xl">Our Projects</h1>
        <ProjectItem/>
        <ProjectItemReverse/>
    </div>
  )
}

const ProjectItem = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-8'>
        <Image src="https://picsum.photos/1900/1000" 
          alt="" 
          width="0"
          height="0"
          sizes="100vw"
          className="m-auto w-1/2"
          />
        <div className="mt-2">
            <h3 className=" text-[#5AD1D6] font-bold text-xl">Vehicle Counter</h3>
            <p className="text-lg mb-8">We are a group of developers that are interested in developing products utilizing the continuously growing potential of <span style={{'color': "#9DB3E2"}}>artificial intelligence.</span></p>
            <Link href="/projects">
                <button type="button" className="custom">View Project</button>
            </Link>
        </div>
    </div>

  )
}

const ProjectItemReverse = () => {
    return (
      <div className='flex flex-col lg:flex-row-reverse gap-8'>
          <Image src="https://picsum.photos/1900/1000" 
            alt="" 
            width="0"
            height="0"
            sizes="100vw"
            className="m-auto w-1/2"
            />
          <div className="mt-2">
              <h3 className=" text-[#5AD1D6] font-bold text-xl">Vehicle Counter</h3>
              <p className="text-lg mb-8">We are a group of developers that are interested in developing products utilizing the continuously growing potential of <span style={{'color': "#9DB3E2"}}>artificial intelligence.</span></p>
              <Link href="/projects">
                  <button type="button" className="custom">View Project</button>
              </Link>
          </div>
      </div>
  
    )
  }

export default ProjectsPage

