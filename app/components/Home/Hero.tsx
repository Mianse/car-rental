import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-16  mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
     <div>
     <h2 className="text-3xl font-bold sm:text-4xl">Premium Car Rentals in Nairobi</h2>

<p className="mt-4 text-gray-600">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
  eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
  quidem quam repellat.
</p>

<a
  href="#"
  className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-green-400"
>
  Explore Cars
</a>
     </div>
     <div>
     <Image src={'/mercedes.jpg'} alt='logo' height={500} width={600} className='w-full object-cover rounded-lg'/>
     </div>
    </div>
  );
}

export default Hero;
