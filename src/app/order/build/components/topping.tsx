"use client";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { useState } from "react";

interface ToppingProps {
    image: string;
    name: string;
    key: number;
}

enum Side {
  LEFT,
  RIGHT,
  BOTH,
}

enum Normality {
  NORMAL,
  EXTRA,
}

export default function Topping(props: ToppingProps) {
  const [checked, setChecked] = useState(false);
  const [leftHalf, setLeftHalf] = useState(false);
  const [rightHalf, setRightHalf] = useState(false);
  const [both, setBoth] = useState(true);
  const [normal, setNormal] = useState(true);
  const [extra, setExtra] = useState(false);

  function setSide(side: Side) {
    switch (side) {
      case Side.LEFT:
        setLeftHalf(true);
        setRightHalf(false);
        setBoth(false);
        break;
      case Side.RIGHT:
        setLeftHalf(false);
        setRightHalf(true);
        setBoth(false);
        break;
      case Side.BOTH:
        setLeftHalf(false);
        setRightHalf(false);
        setBoth(true);
        break;
    }
  }

  function setNormalExtra(normal: Normality) {
    switch (normal) {
      case Normality.NORMAL:
        setNormal(true);
        setExtra(false);
        break;
      case Normality.EXTRA:
        setNormal(false);
        setExtra(true);
        break;
    }

  }

  return (
    <div className="">
      
      <div className={`flex h-24 ${checked ? '' : 'border-b-2'}  `}>
        <div className="mr-5 flex justify-center items-center">
          <Checkbox color="success" size="large" onChange={() => setChecked(!checked)} />
        </div>
        <div>
          <div className=" h-10 w-10 lg:h-20 lg:w-20 mr-7 lg:mr-5 ">
            <div className="absolute h-16 w-16 lg:h-20 lg:w-20 mt-2 lg:mt-1  ">
            <Image
            src={`/assets/${props.image}`}
            fill={true}
            alt="pepp"
          />
            </div>
          
          </div>
          
        </div>
        <div className="flex justify-center items-center">
        <div className="ml-4 text-gray-500">
          {props.name}
        </div>
        </div>
        
      </div>
      
      { checked &&
      <div className="flex  gap-3 justify-between border-b-2">
        <div className="flex gap-3 ml-2 mb-4" >
          <div className={`w-9 h-9 border-2 ${leftHalf ? 'border-green-700' : 'border-gray-400'}  rounded-full `} onClick={() => setSide(Side.LEFT)}>
            <div className="w-4 h-8  overflow-hidden">
              <div className={`w-8 h-8 border-2 border-white ${leftHalf ? 'bg-green-700' : 'bg-gray-400'} rounded-full`} />
            </div>
          </div>
          <div className={`w-9 h-9 border-2 ${both ? 'border-green-700' : 'border-gray-400'}  rounded-full `} onClick={() => setSide(Side.BOTH)}>
            <div className={`w-8 h-8 border-2 border-white ${both ? 'bg-green-700' : 'bg-gray-400'} rounded-full `}></div>
          </div>
          <div className={`w-9 h-9 border-2 ${rightHalf ? 'border-green-700' : 'border-gray-400'}  rounded-full `} onClick={() => setSide(Side.RIGHT)}>
            <div className="relative left-4  w-4 h-8 overflow-hidden">
              <div className={`relative right-4 w-8 h-8 border-2 border-white ${rightHalf ? 'bg-green-700' : 'bg-gray-400'} rounded-full`} />
            </div>
          </div>
        </div>
        <div className="flex"></div>
        <div className="flex gap-3 mr-2">
          <div className={`w-20 h-8 mt-0.5 flex border-2 ${normal ? 'border-black' : 'border-gray-400'} hover:border-gray-500 rounded-lg`} onClick={() => setNormalExtra(Normality.NORMAL)}>
            <div className="items-center ml-3">Normal</div>
          </div>
          <div className={`w-20 h-8 mt-0.5 mr-5 flex border-2 ${extra ? 'border-black' : 'border-gray-400'}  hover:border-gray-500 rounded-lg`} onClick={() => setNormalExtra(Normality.EXTRA)}>
            <div className="items-center ml-5">Extra</div>
          </div>
        </div>
      </div>
}
    </div>
       
  );
}
