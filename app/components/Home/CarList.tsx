import React, { useState } from 'react';
import CarCard from './CarCard';
import BookingModal from '../CarBooking/BookingModal';


const CarList = (props:any) => {
  const [selectedCar,setSelectedCar] = useState<any>([])

  return (
    <div  className=' lg:gap-16  mx-auto max-w-screen-xl px-4 py-8 sm:px-10 sm:py-20 lg:px-8 lg:py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1'>
      {props.carList.map((car: any, index: number)=>(
<div key={index} onClick={()=>{(window as any).my_modal_4.showModal();
  setSelectedCar(car)
}} >
    <CarCard car={car}/>
   
</div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" >open modal</button>
<dialog id="my_modal_4" className="modal">
  <BookingModal car={selectedCar}/>
</dialog>
        
    </div>
  );
}

export default CarList;
