import React from "react";
import Image from "next/image"
import Selector from "./components/selector";
import ToppingHandler from "./components/toppinghandler";

export default function Builder(){
    return (

        <div className="grid lg:grid-flow-col sm:grid-cols-1 lg:grid-rows-3  border h-screen">
            <div className="lg:col-span-2 sm:col-span-1 border-r-2 border-gray-300 lg:row-span-3">
            <div className=" mt-5 ml-5">
                <Image src="/assets/Original-Crust-Pepperoni.webp" width={488} height={488} alt="pepp" /> 
             </div>
            </div>
            <Selector />

        </div>
    );

}