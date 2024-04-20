import React, { useState ,useEffect} from 'react';
import Image from 'next/image';
import { PiSteeringWheel } from 'react-icons/pi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { FaGasPump } from 'react-icons/fa';

const CarCard = (props:any) => {
    const [car,setCar] = useState<any>()
    const fallbackImageUrl = '/fallback-image.jpg'; 
    useEffect(()=>{
        if(props?.car){
          setCar(props.car);
        }
    },[props.car])
  return car&&(
    <div className='rounded-md group bg-gray-100  hover:bg-white hover: border-[1px] cursor-pointer hover:border-blue-500'>
      <h2 className='text-[20px] font-medium mb-2'>{car.name}</h2>
      <h2 className='text-[30px] font-bold mb-2 text-black'>
        <span className='text-[12px] font-light'>Ksh</span>
        {car.price}
        <span className='text-[12px] font-light' >/day</span>

      </h2>
      <Image src={car.image?.url} alt={car.name} width={200} height={200} className='object-contain  w-[1000px] h-[400px]' />
      <div className='flex items-center justify-between'>
        <div className='text-center text-gray-500'>
            <PiSteeringWheel className='text-[22px] mb-2 w-full'/>
            <h2 className='font-light text-[14px] line-clamp-5'>{car.carType} </h2>
        </div>

        <div className='text-center text-gray-500'>
            <MdAirlineSeatReclineNormal className='text-[22px] mb-2 w-full'/>
        <h2 className='font-light text-[14px] line-clamp-5'>{car.seat} Seats</h2>
        </div>
        <div className='text-center text-gray-500'>
            <FaGasPump className='text-[22px] mb-2 w-full'/>
        <h2 className='font-light text-[14px] line-clamp-5'>{car.carAvg} KMPH</h2>
        </div>
        
      </div>
      <button
 
  className="  mt-8  items-center rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white hover:visible transition hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400"
>
  Rent Car
</button>
    </div>
  );
}

export default CarCard;
