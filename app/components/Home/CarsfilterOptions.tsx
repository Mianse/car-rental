import React from 'react';

const CarsfilterOptions = () => {
  return (
    <div className=' flex items-center justify-between mt-10 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 '>
        <div>
            <h2 className='text-[30px] font-bold'>Cars catalog</h2>
            <h2>Explore our cars you might like</h2>
        </div>
        <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Price</option>
  <option>min to max</option>
  <option>max to min</option>
</select>
<select className="select select-bordered w-full md:block max-w-xs hidden">
  <option disabled selected>Brand</option>
  <option>toyota</option>
  <option>bmw</option>
  <option>mercedes</option>
  <option>Honda</option>
  <option>Mazda</option>
  <option>Porshe</option>


</select>
        </div>
    </div>
  );
}

export default CarsfilterOptions;
