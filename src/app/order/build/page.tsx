import React from "react";
import Image from "next/image"
import Selector from "./components/selector";
import ToppingHandler from "./components/toppinghandler";

export default function Builder(){
    return (
        // <div className="flex border-2 border-black">
        //     <div className=" mt-5 ml-5 border-2 w-1/2 border-black">
        //         <Image src="/assets/Original-Crust-Pepperoni.webp" width={488} height={488} alt="pepp" /> 
        //     </div>
        //     <div className=" ml-5 border-2 border-black">
        //         <Selector />
        //     </div>
        // </div>
        <div className="grid grid-flow-col grid-rows-3  border-1 h-screen">
            <div className="col-span-2 border-r-2 border-gray-300 row-span-3">
            <div className=" mt-5 ml-5">
                <Image src="/assets/Original-Crust-Pepperoni.webp" width={488} height={488} alt="pepp" /> 
             </div>
            </div>
            <div className="col-span-2 row-span-1 border-b-2">
                <Selector />
            </div>
            <div className="col-span-2 row-span-2">
                <ToppingHandler />
            </div>

        </div>
    );

}