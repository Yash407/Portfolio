/* Contact.js */
import React from 'react';
import contact from '../assets/Contact.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact dark:bg-slate-100 bg-slate-900 py-5 px-14 h-max'>
      <h1 className='text-center text-4xl mb-2 font-semibold text-orange-600'>Contact <span className='text-white dark:text-black'>Me</span></h1>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 p-14'>
          <img className='shadow-lg' src={contact} alt="" />
        </div>
        <div className='text-white dark:text-black p-12 w-full md:w-1/2'>
          <h1 className='text-3xl font-bold underline mb-5'>Get In Touch</h1>
          <div className='flex flex-col md:flex-row  gap-5 mb-5' >
            <a className='bg-red-600 text-white rounded-md h-10 w-full md:w-auto flex justify-center items-center text-md px-4 font-semibold ' href="mailto:yashpalynr@gmail.com"><FontAwesomeIcon className='mr-2 text-xl' icon={faEnvelope}/>Email</a>
            <a className='text-xl' href="mailto:yashpalynr@gmail.com"> yashpalynr@gmail.com</a>
          </div>
          <div className='flex flex-col md:flex-row gap-5 mb-5'>
            <a className='bg-blue-500 text-white rounded-md h-10 w-full md:w-auto flex justify-center items-center text-md px-4 font-semibold' href="mailto:yashpalynr@gmail.com"><FontAwesomeIcon className='mr-2 text-xl' icon={faLinkedin}/>Linkdin</a>
            <a className='text-xl' href="mailto:yashpalynr@gmail.com">Yashpal .</a>
          </div>
          <div className='flex flex-col md:flex-row gap-5 mb-5'>
            <a className='bg-black text-white  rounded-md h-10 w-full md:w-auto flex justify-center items-center text-md px-4 font-semibold' href="mailto:yashpalynr@gmail.com"><FontAwesomeIcon className='mr-2 text-xl' icon={faGithub}/>Github</a>
            <a className='text-xl' href="mailto:yashpalynr@gmail.com">Yash 407</a>
          </div>
          <div className='flex flex-col md:flex-row gap-5 mb-5'>
            <a className='bg-green-600 text-white rounded-md h-10 w-full md:w-auto flex justify-center items-center text-md px-4 font-semibold' href="mailto:yashpalynr@gmail.com"><FontAwesomeIcon className='mr-2 text-xl' icon={faPhone}/>Phone</a>
            <a className='text-xl' href="mailto:yashpalynr@gmail.com">+919518490775</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
