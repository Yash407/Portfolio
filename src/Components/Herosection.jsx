import React from 'react';
import hand_icon from '../assets/hand_icon.png';
import banner_image from '../assets/banner_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Herosection = () => {
  return (
    <div className="herosection bg-slate-900 dark:bg-slate-100 flex justify-between px-5">
      <div className='w-full h-full flex items-center'>
        <div className='text-white dark:text-black h-96 w-full flex flex-col justify-center ml-5 md:ml-40'>
          <h3 className='text-3xl tracking-widest font-semibold'>Hello<span><img className='h-10 inline-block' src={hand_icon} alt="" /></span></h3>
          <h3 className='mt-2 tracking-widest text-3xl font-semibold'>My Name is</h3>
          <h1 className='mt-2 tracking-wider text-5xl font-bold'>Yashpal</h1>
          <h2 className='mt-3 mb-4 tracking-widest text-2xl font-semibold'>I am a <span className='text-orange-600'>FrontEnd Developer</span></h2>
          <div className='mb-4 w-max flex justify-evenly gap-2 text-black'>
            <a className='bg-orange-600 rounded-full h-10 w-10 flex justify-center items-center hover:scale-125 hover:bg-blue-600  hover:text-white hover:shadow-md shadow-inner hover:shadow-blue-400 duration-200' href="https://linkedin.com/in/yashpal-aba001181" target='_blank'><FontAwesomeIcon className='h-6' icon={faLinkedin}/></a>
            <a className='bg-orange-600 rounded-full h-10 w-10 flex justify-center items-center hover:scale-125 hover:bg-white hover:shadow-md shadow-inner hover:shadow-white duration-75' href="https://github.com/Yash407" target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
            <a className='bg-orange-600 rounded-full h-10 w-10 flex justify-center items-center hover:scale-125 hover:bg-white hover:text-orange-600 hover:shadow-md shadow-inner hover:shadow-orange-600 duration-75' href="mailto:yashpalynr@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
            <a className='bg-orange-600 rounded-full h-10 w-10 flex justify-center items-center hover:scale-125 hover:bg-white hover:text-green-500 hover:shadow-md shadow-inner hover:shadow-green-600 duration-75' href="tel:+919518490775"><FontAwesomeIcon icon={faPhone}/></a>
          </div>
          <a className='w-40 p-2 h-12 pt-3 text-black text-center rounded-full font-semibold bg-orange-500 hover:scale-110 duration-100 hover:bg-white hover:text-orange-600' href="">Download CV <FontAwesomeIcon className='ml-1' icon={faArrowDown}/></a>
        </div>
      </div>
      <div className='w-full flex justify-center items-center md:w-1/2'>
        <img className='rounded-full shadow-xl h-96' src={banner_image} alt="" />
      </div>
    </div>
  );
}

export default Herosection;
