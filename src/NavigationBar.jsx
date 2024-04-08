import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className='px-8 flex justify-between items-center h-24 mx-auto text-[#3F4122]'>
      <h1 className='w-full text-3xl font-bold text-[#013A20]'><Link to="/" onClick={closeNav}>Cropmind</Link></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'> <Link to="/" onClick={closeNav}>Home</Link></li>
        <li className='p-4'><Link to="/about" onClick={closeNav}>About</Link></li>
        <li className='p-4'><Link to="/contact" onClick={closeNav}>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#013A20] m-8'><Link to="/" onClick={closeNav}>Cropmind</Link></h1>
        <ul>
          <li className='p-4 border-y border-gray-600'><Link to="/" onClick={closeNav}>Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/about" onClick={closeNav}>About</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/contact" onClick={closeNav}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
