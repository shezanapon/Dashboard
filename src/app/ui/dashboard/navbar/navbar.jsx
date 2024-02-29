'use client'
import React from 'react';
import { MdNotifications, MdOutlineChat, MdPublic } from 'react-icons/md';

const Navbar = () => {
    return (
      <div className="flex justify-between items-center w-full h-20 px-4 bg-[#182237] rounded-md">
      <div className="flex-initial w-64 ...">
        <h6 className='capitalize md:uppercase'>Dashboard</h6>
      </div> 
      
      <div className='flex'>
      <div className="flex-1 mr-6 ">
        <input className='rounded-md' type='text'  />
      </div>
        <div className="flex-1 mr-4"><MdOutlineChat size={20}/></div>
        <div className="flex-1 mr-4"><MdNotifications size={20}/></div>
        <div className="flex-1 mr-4"><MdPublic size={20}/></div>
      </div>
    </div>   
    );
};

export default Navbar;