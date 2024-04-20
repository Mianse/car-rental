import React from 'react';

const Form = () => {
  return (
    <div>
    <div className = 'flex w-full flex-col mb-5'>
      <select className="select w-full max-w-xs">
        <label className='text-gray-400'>Pick up Location</label>
       <option disabled selected>Pick up Location</option>
          <option>Homer</option>
        <option>Marge</option>
  
    </select>
  </div>

  <div className='flex flec-col gap-5 mb-5'>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Pick up date</label>
      <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Drop off  date</label>
      <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
  </div>
  <div className='flex flec-col gap-5 mb-5'>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Pick up TIME</label>
      <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Drop off  TIME</label>
      <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
  </div>
  <div className='flex flex-col w-full'>
  <label className='text-gray-400'>contact Number</label>
      <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div>
      
    </div>
  );
}

export default Form;
