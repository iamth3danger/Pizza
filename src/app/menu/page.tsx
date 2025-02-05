import React from "react";
import SliceCard from "../componenets/SliceCard";

export default function Menu(){
    const items = ['Ultimate Pepperoni Pizza', 'a', 'a', 'a', 'a', 'a', 'a'];

    return (
        <div className="grid grid-cols-3">
            {items.map((item, index) => (
                <SliceCard name={item}/> 

            ))}
        </div>
    );
}