'use client'
import Image from "next/image";
import {
  
  UserButton,
} from "@clerk/nextjs";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import CarsfilterOptions from "./components/Home/CarsfilterOptions";
export default function Home() {
  return (
    <div>
      
      <Hero/>
      <SearchInput/>
      <CarsfilterOptions/>
    </div>
  );
}
