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
export default function Home() {
  const [carList,setCarList] = useState<any>([])
  useEffect(()=>{
   
    getCarList_()
  },[])
  const getCarList_ = async()=>{
    const result :any = await getCarsList()
   
   setCarList(result?.carLists)
  }
  return (
    <div>
      
      <Hero/>
      <SearchInput/>
      <CarsfilterOptions/>
      <CarList carList={carList}/>
    </div>
  );
}
