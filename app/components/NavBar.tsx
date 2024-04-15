import Image from 'next/image';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-3 px-3 shadow-sm border:-b-[1px]'>
      <Image src='/car.jpg' alt='logo' width={150} height={100}/>
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-blue-500  px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</h2>
        <h2 className='hover:bg-blue-500  px-3 cursor-pointer p-2 rounded-full hover:text-white'>History</h2>
        <h2 className='hover:bg-blue-500  px-3 cursor-pointer p-2 rounded-full hover:text-white' >Contact us</h2>

      </div>
      <UserButton />
      </div>
   
  );
}

export default NavBar;
