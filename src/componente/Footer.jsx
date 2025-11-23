


import React from 'react';

const Footer = () => {
    return (
       
       <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex-col flex">
         <div className="grid lg:grid-cols-5   md:grid-cols-2    gap-5">
  <nav className='col-span-1'>
    <h6 className="text-[17px] pb-3 font-semibold text-gray-50"> CS — Ticket System</h6>
   <p className='text-[#A1A1AA] text-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </nav>

  <nav  className='col-span-1 lg:pl-10'>
    <h6 className="text-[17px] pb-3 font-semibold text-[#FFFFFF]">Company</h6>
    <a className="link link-hover text-[#A1A1AA]">About us</a><br />
    <a className="link link-hover text-[#A1A1AA]">Our Mission</a><br />
    <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
    
  </nav>


  <nav  className='col-span-1'>
    <h6 className="text-[17px] pb-3 font-semibold text-[#FFFFFF]">Services</h6>
    <a className="link link-hover text-[#A1A1AA]">Products & Services</a><br />
    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a><br />
    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
  </nav>

  <nav  className='col-span-1'>
    <h6 className="text-[17px] pb-3 font-semibold text-[#FFFFFF]">Information</h6>
    <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a><br />
    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a><br />
    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
  </nav>

    <nav  className='Social Links '>
    <h6 className="text-[17px] pb-3 font-semibold text-[#FFFFFF]">Social Links</h6>
    <a className="link link-hover text-[#A1A1AA]"><i class="fa-brands fa-x-twitter bg-white rounded-full text-[14px] mr-1"></i>@CS — Ticket System</a><br />

    <a className="link link-hover text-[#A1A1AA]"><i class="fa-brands fa-linkedin-in bg-white rounded-full text-[14px] mr-1  text-black"></i>@CS — Ticket System</a><br />

    <a className="link link-hover text-[#A1A1AA]"><i class="fa-brands fa-facebook-f bg-white rounded-full text-[14px] mr-1 text-black"></i>@CS — Ticket System</a><br />
    <a className="link link-hover  text-[#A1A1AA]"> <i class="fa-solid fa-message bg-white rounded-full text-[14px] mr-1 text-gray-700"></i>support@cst.com</a>
  </nav>
  
  </div>
 
  <div className="text-[#FAFAFA] w-full mx-auto  ">
     <div className="bg-gray-600 w-full  h-[1px]"></div>
    
       <h1 className='text-center pt-3 mx-auto'>
        © 2025 CS — Ticket System. All rights reserved.
    </h1>
  </div>
</footer>



    );
};

export default Footer; 