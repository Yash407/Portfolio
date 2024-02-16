/* Projects.js */
import React from 'react';
import homepage from '../assets/E commerce Home.jpg';

const Projects = () => {
  return (
    <div className='projects dark:bg-white bg-slate-800 text-white dark:text-black py-5 px-5 h-max'>
      <h1 className='text-center text-4xl mb-2 font-semibold text-orange-600'>My <span className='text-white dark:text-black'>Projects</span></h1>
      <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
        <div className='p-8 w-full md:w-1/2 h-max'>
          <img src={homepage} alt="" />
        </div>
        <div className='p-6 w-full md:w-1/2'>
          <h1 className='text-orange-600 text-4xl text-center font-extrabold mb-2 tracking-wider'>Shoppee</h1>
          <h1 className='text-2xl text-center mb-4'>( A Shopping Site )</h1>
          <p className='text-xl'>Shoppee is an e-commerce platform to buy clothes of different categories for Men, Women, and Children.</p>
          <p className='text-xl'><span className='text-orange-600'>Techstacks:</span> React, CSS</p>
        </div>
        </div>
      <a className='bg-orange-600 text-black font-semibold px-5 py-2 rounded-lg ml-56 ' href="">Github</a>
      <a className='bg-orange-600 text-black font-semibold px-5 py-2 rounded-lg ml-12' href="">Live</a>

    </div>
  );
}

export default Projects;
