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
  const orderCarList = (order:any)=>{
    const sortedData= [...carOrgList].sort((a,b)=>
      order==-1? a.price - b.price : b.price - a.price
    )
  }
  return (
    <div>
      
      <Hero/>
      <SearchInput/>
      <CarsfilterOptions carList= {carOrgList} setBrand={(value:string)=>filterCarList(value)} orderCarList={(value:string)=>orderCarList(value)}/>
      <CarList carList={carList}/>
    </div>
  );
}
