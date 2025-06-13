import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

import { mainContext } from '../Context/Maincontext';



const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { Nav, setNav } = useContext(mainContext);

  return (
    <>
      {/* Top Nav Bar */}
      <div className="w-full flex  items-center justify-between text-black px-6 py-4">
        <div className="flex items-center gap-3">
          <img
        
            className="h-10"
          />
          <div>
            <h1 className="text-xl font-serif font-medium leading-4">LNCT</h1>
            <p className="text-xs font-light tracking-wide">UNIVERSITY</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button className="flex items-center gap-2">
            <FiSearch size={18} /> Search
          </button>
          <button onClick={() => setMenuOpen(true)} className="flex items-center gap-2">
            <RxHamburgerMenu size={20} /> Menu
          </button>
        </div>
      </div>

      {/* Fullscreen Dropdown Menu with Smooth Transition */}
      <div
        className={`fixed inset-0 bg-black text-white z-50 transform transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-start p-6">
          <img
            src="https://www.harvard.edu/wp-content/uploads/2020/12/Harvard_shield_wreath.svg"
            alt="Harvard Logo"
            className="h-10"
          />
          <button onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white flex gap-2 text-3xl items-center">
            Close <IoClose size={54} />
          </button>
        </div>

        <div className="flex h-full">
          {/* Left Menu Items */}
          <div className="w-1/4 pl-12 pt-8 space-y-6 text-3xl font-light">
            {Nav.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveMenu(index)}
                className={`cursor-pointer tracking-wide transition-all pb-5 w-2/3 duration-300 ease-in-out ${
                  activeMenu === index ? 'text-white border-b border-white' : 'text-gray-400'
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
 <div className='line h-full w-[2px] bg-amber-50'></div>
          {/* Submenu Panel */}
          <div className="w-3/4 p-12 transition-all duration-500 ease-in-out">
            {activeMenu !== null && (
              <div
                className="transition-all duration-500 ease-in-out opacity-100 translate-x-0"
                key={activeMenu}
              >
                <h2 className="text-4xl font-semibold mb-2 flex items-center gap-1">
                  {Nav[activeMenu].title} <span className="text-3xl">→</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 max-w-md">
                  {Nav[activeMenu].description}
                </p>
                <ul className="space-y-4 font-[400] tracking-wider text-white/70  text-xl">
                  {Nav[activeMenu].links.map((link, i) => (
                    <li key={i}>
                      <a href={link.path} className="hover:underline hover:opacity-100">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-black px-12 py-4 border-t border-gray-700 text-sm flex flex-wrap gap-6 text-white font-semibold">
          <span>Important links →</span>
          <span>National-conference</span>
          <span>Nirf 2025</span>
          <span>Hostel-allotment</span>
          <span>csr</span>
          <span>icmmci-2022</span>
          <a href="https://admissions.lnct.ac.in/">
          <span className="text-sm ">ADMITION 2025-2026</span> 
          </a>
          <a href="https://lnct.ac.in/vc.pdf">
          <span className="text-sm ">Voice of lnct</span> 
          </a>
          <a href="http://lnctbhopal.in/">
            <span className="text-sm ">Lnct Bhopal</span> 
          </a>
          <a href="https://lncpbhopal.in/">
            <span className="text-sm ">lncp Bhopal</span> 
          </a>
          <a href="https://lnct.ac.in/wp-content/uploads/2021/04/Lakshmi-Narain-College-of-Technology-ISTE-Certificate.pdf">
            <span className="text-sm ">Tie Ups</span> 
          </a>
          <span>Emergency</span>
        </div>
      </div>
    </>
  );
}

export default Nav