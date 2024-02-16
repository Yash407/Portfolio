/* Aboutpage.js */
import React from 'react';
import webdev from '../assets/webdevelopment.gif';

const Aboutpage = () => {
  return (
    <div className='about bg-slate-800 dark:bg-white py-5 px-5 h-max'>
      <h1 className='text-center text-4xl pt-4 font-semibold text-orange-600'>About <span className='text-white dark:text-black'>Me</span></h1>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/2 p-5'>
          <img src={webdev} alt="" />
        </div>
        <div className='w-full md:w-1/2 py-10 px-6 text-white dark:text-black leading-7 tracking-wider text-xl text-justify'>
          <ul className='list-disc'>
            <li>Hello, My name is Yashpal and I enjoy creating things that live on the internet.</li>
            <li>I have a keen interest in learning new things and solving problems.</li>
            <li>Confident, hardworking and highly ambitious Frontend web developer with good knowledge of advanced JavaScript, HTML, CSS, ReactJS, Tailwind CSS</li>
            <li>I am looking forward to working in an environment where I can enhance my skills further.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
