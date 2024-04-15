import React from 'react';
import { MapPin } from 'lucide-react';


const SearchInput = () => {
  return (
    <div className=' mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-5'>
     <h2 className='text-center text-[20px] text-gray-400 mb-3'>Lets Search what you need</h2>
     <div className='flex justify-center'>
        <div className='bg-gray-50 p-2 rounded-full px-3 gap-5 flex justify-center '>
        <div className='flex items-center '>
            <MapPin className='text-black '/>
            <input type='text' placeholder='Location' className='p-2 outline-none bg-transparent text-black'/>
        </div>
        <div className='flex items-center text-black ' >
            <input type='date' className='p-2 outline-none bg-transparent' />
        </div>
        </div>
        
     </div>
    </div>
  );
}

export default SearchInput;
