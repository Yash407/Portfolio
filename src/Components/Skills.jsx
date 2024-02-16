/* Skills.js */
import React from 'react';
import htmllogo from '../assets/htmllogo-removebg.png';
import csslogo from '../assets/csslogo-removebg.png';
import jslogo from '../assets/JavaScript-logo.png';
import reactlogo from '../assets/React-icon.png';
import tailwind from '../assets/tailwindcss-.png';
import bootstrap from '../assets/Bootstrap_logo.svg.png';

const Skills = () => {
  return (
    <div className='skills bg-slate-900 dark:bg-slate-100 py-6 h-max'>
      <h1 className='text-center text-4xl mb-2 font-semibold text-white dark:text-black'>My <span className='text-orange-600'>Technical</span> Skills</h1>
      <div className='p-6 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        <div className='text-center'>
          <img className='w-36 h-36 mx-auto mb-2' src={htmllogo} alt="" />
          <span className='text-white dark:text-black'>HTML</span>
        </div>
        <div className='text-center'>
          <img className='w-36 h-36 mx-auto mb-2' src={csslogo} alt="" />
          <span className='text-white dark:text-black'>CSS</span>
        </div>
        <div className='text-center'>
          <img className='w-36 h-36 mx-auto mb-2' src={jslogo} alt="" />
          <span className='text-white dark:text-black'>JAVASCRIPT</span>
        </div>
        <div className='text-center'>
          <img className='w-36 h-36 mx-auto mb-2' src={reactlogo} alt="" />
          <span className='text-white dark:text-black'>REACT JS</span>
        </div>
        <div className='text-center'>
          <img className='w-36 h-36 mx-auto mb-2' src={tailwind} alt="" />
          <span className='text-white dark:text-black'>TAILWIND CSS</span>
        </div>
        <div className='text-center'>
          <img className='w-36 h-36 mx-auto mb-2' src={bootstrap} alt="" />
          <span className='text-white dark:text-black'>BOOOTSTRAP</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
