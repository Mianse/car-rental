import React from 'react';
import CarCard from '../Home/CarCard';
import Form from '../CarBooking/Form'

const BookingModal = ({car}:any) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <div className='border-b-[1px] pb-2'>
            <h3 className='text-[30px] text-gray-400 font-light'>Rent a car!</h3>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div>
                car info
                <CarCard car={car}/>
            </div>
            <div>
                <Form car={car}/>
            </div>
        </div>
        
      </form>
  );
}

export default BookingModal;
