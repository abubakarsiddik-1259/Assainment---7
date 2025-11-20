

import React from 'react';

const Navbar = () => {
    return (






<div className="navbar shadow-sm bg-[#FFFFFF]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn font-bold btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#000000] mr-4 ">
       <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end lg:w-auto">
    <a className="btn border-0 bg-gradient-to-r from-[#C06CFF] to-[#8F4DFF]">+ New Ticket</a>
  </div>
</div>


    );
};

export default Navbar;