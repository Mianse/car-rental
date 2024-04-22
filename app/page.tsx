'use client'
import Image from "next/image";
import {
  
  UserButton,
} from "@clerk/nextjs";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import CarsfilterOptions from "./components/Home/CarsfilterOptions";
import { getCarsList } from "@/services";
import { useState, useEffect } from "react";
import CarList from "./components/Home/CarList";
import ToastMsg from "./components/Home/ToastMsg";
export default function Home() {
  const [carList,setCarList] = useState<any>([])
  const [carOrgList,setCarOrgList] = useState<any>([])
  useEffect(()=>{
   
    getCarList_()
  },[])
  const getCarList_ = async()=>{
    const result :any = await getCarsList()
   
   setCarList(result?.carLists)
   setCarOrgList(result?.carLists)
  }
  const filterCarList =(brand:string)=>{
      const filterList =carOrgList.filter((item:any)=>
      item.carBrand==brand
      )
      setCarList(filterList)
  }
  const orderCarList = (order: any) => {
    const sortedData = [...carOrgList].sort((a, b) => {
      if (order == -1) {
        return a.price - b.price; // Ascending order
      } else {
        return b.price - a.price; // Descending order
      }
    });
    setCarList(sortedData);
  };
  return (
    <div>
      
      <Hero/>
      <SearchInput/>
      <CarsfilterOptions carList={carOrgList}  orderCarList={(value:string)=>orderCarList(value)} setBrand={(value:string)=>filterCarList(value)}/>
      <CarList carList={carList}/>
      <ToastMsg/>
    </div>
  );
}
