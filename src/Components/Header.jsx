// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [menuVisible, setMenuVisible] = useState(false); // Add state for menu visibility

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={`h-20 main flex justify-between items-center px-16 bg-black dark:bg-slate-200  rounded-b-sm fixed w-full z-50`}>
      <div>
        <Link to='herosection' className='text-3xl font-bold text-orange-600  cursor-pointer'>
          <a className='text-white dark:text-black'>Yash</a>pal
        </Link>
      </div>
      <div className='space-x-3 navlinks'>
        <Link to='herosection' spy={true} smooth={true} offset={0} duration={500} className='hover:text-orange-600 text-stone-100 text-xl cursor-pointer dark:text-black'>Home</Link>
        <Link to='about' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-orange-600 text-stone-100 text-xl cursor-pointer dark:text-black'>About</Link>
        <Link to='skills' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-orange-600 text-stone-100 text-xl cursor-pointer dark:text-black'>Skill</Link>
        <Link to='projects' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-orange-600 text-stone-100 text-xl cursor-pointer dark:text-black'>Projects</Link>
        <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-orange-600 text-stone-100 text-xl cursor-pointer dark:text-black'>Contact</Link>
      </div>
      <div> 
        <button onClick={themeSwitch} className='px-4 py-2 shadow rounded-md text-2xl text-white dark:text-black'>
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </button>
        <a onClick={toggleMenu} className='px-4 py-2 shadow rounded-md text-2xl text-white dark:text-black menubar ' href="#">
          <FontAwesomeIcon icon={faBars}/>
        </a>
        {menuVisible && ( // Conditionally render the menu
          <div className='absolute flex flex-col bg-slate-200 justify-center px-5 py-2 text-xl rounded-md'>
            <Link to='herosection' className='p-2' spy={true} smooth={true} offset={0} duration={500} href="#">Home</Link>
            <Link to='about' className='p-2' href=''>About</Link>
            <Link to='skills' className='p-2' spy={true} smooth={true} offset={0} duration={500} href="#">Skill</Link>
            <Link to='projects' className='p-2' spy={true} smooth={true} offset={0} duration={500} href="#">Project</Link>
            <Link to='contact' className='p-2' spy={true} smooth={true} offset={0} duration={500} href="#">Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
