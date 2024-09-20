import React from 'react'
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <div className="mt-[4rem] ml-[4rem]">
            <h1 className="text-2xl font-bold">Welcome to  <span className='text-purple-500'>Projects</span> Page</h1>
          </div>
        </div>
        <section className='m-[2rem] bg-slate-500'>
          <div className="pro1"></div>
          <div className="pro2"></div>
          <div className="pro3"></div>
        </section>
      </div>
    </>

  )
}

export default Projects;