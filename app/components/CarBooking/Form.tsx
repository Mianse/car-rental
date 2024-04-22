
import { getStoreLocation } from '@/services';
import React,{useEffect,useState} from 'react'
import { createBooking } from '@/services';

const Form = ({car}:any) => {
  const [storeLocation,setStoreLocation] = useState<any>()
  const [formValue,setFormValue] = useState({
    location : '',
    pickUpDate: '',
    dropOffDate:'',
    pickUpTime:'',
    dropOffTime:'',
    contactNumber:'',
    userName:'damian',
    carId: '', 
  })
  useEffect(()=>{
    getStoreLocation_()
  },[])
  useEffect(() => {
    if (car) {
      setFormValue(() => ({
        ...formValue,
        carId:car.id,
      }));
    }
  }, [car]);
  
  const getStoreLocation_=async()=>{
    const resp:any = await getStoreLocation()
   
   setStoreLocation(resp?.storeLocations
   )
  }
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async () => {
     // Log the formValue object for debugging
     console.log(formValue)
    const resp = await createBooking(formValue);
    console.log(resp);
};
;

  return (
    <div>
    <div className = 'flex w-full flex-col mb-5'>
      <select className="select w-full max-w-xs"name='location' onChange={handleChange}>
        <option className='text-gray-400' >Pick up Location</option>
       <option disabled selected>Pick up Location</option>
          {storeLocation&&storeLocation.map((loc:any,index:number)=>(
            <option key={index}>{loc?.address}</option>
          ))}
  
    </select>
  </div>

  <div className='flex flec-col gap-5 mb-5'>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Pick up date</label>
      <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs"name='pickUpDate' onChange={handleChange} />
    </div>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Drop off  date</label>
      <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs"name='dropOffDate'  onChange={handleChange} />
    </div>
  </div>
  <div className='flex flec-col gap-5 mb-5'>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Pick up TIME</label>
      <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs"name='pickUpTime' onChange={handleChange} />
    </div>
    <div className='flex flex-col w-full'>
      <label className='text-gray-400'>Drop off  TIME</label>
      <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs"name='dropOffTime' onChange={handleChange} />
    </div>
  </div>
  <div className='flex flex-col w-full'>
  <label className='text-gray-400'>contact Number</label>
      <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"name='contactNumber' onChange={handleChange} />
  </div>
  <div className='modal-action'>
        <button className='btn bg-blue-500 text-white hover:bg-blue-900' onClick={handleSubmit}>save</button>
        {/*if there is a  button it will close the modal */}
        <button className='btn'>close</button>
        </div>
      
    </div>
  );
}

export default Form;

 