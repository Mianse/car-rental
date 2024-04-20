import React, { useEffect } from 'react';
import { useState } from 'react';

const CarsfilterOptions = ({carList,setBrand,orderCarList}:any) => {
    const [carBrandList, setCarBrandList] = useState<any>([])
    const BrandSet = new Set();

    const updateCarList = () => {
        if (carList) {
            filterCarList();
        }
    };

    const filterCarList = () => {
        carList.forEach((element:any) => {
            BrandSet.add(element.carBrand)
        });
        console.log(BrandSet)
        setCarBrandList(Array.from(BrandSet));
    };

    useEffect(() => {
        updateCarList();
    }, [carList]);

    return (
        <div className='flex items-center justify-between mt-10 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 '>
            <div>
                <h2 className='text-[30px] font-bold'>Cars catalog</h2>
                <h2>Explore our cars you might like</h2>
            </div>
            <div className='flex gap-5'>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Price</option>
                    <option>min to max</option>

                    <option>max to min</option>
                </select>
                <select className="select select-bordered w-full md:block max-w-xs hidden" onChange={(e)=>setBrand(e.target.value)}>
                    <option disabled selected>Brand</option>
                    {carBrandList&&carBrandList.map((brand: string, index: number) => (
                        <option key={index}>{brand}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CarsfilterOptions;
