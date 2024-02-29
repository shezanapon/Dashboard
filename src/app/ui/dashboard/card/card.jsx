import React from 'react';
import { MdPublic } from 'react-icons/md';

const Card = () => {
    return (
        <div className='flex m-5 '>
            <div>
               <div className='flex mr-8 p-4 rounded-md w-64 bg-[#182237]'>
               <MdPublic/>
               Total Users 
               </div>
            </div>
            <div className='flex mr-8 p-4 rounded-md w-64 bg-[#182237]'>
            <MdPublic/>
               Stock  
            </div>
            <div className='flex p-4 rounded-md w-64 bg-[#182237]'>
            <MdPublic/>
               Revenue 
            </div>
        </div>
    );
};

export default Card;