import React from 'react';
import CarCard from './CarCard';

const CarList = (props:any) => {
  return (
    <div  className=' lg:gap-16  mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1'>
      {props.carList.map((car: any, index: number)=>(
<div >
    <CarCard car={car}/>
   
</div>
      ))}
    </div>
  );
}

export default CarList;
