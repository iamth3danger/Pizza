"use client";
import { Button } from "@/components/ui/button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Image from "next/image";
import ToppingHandler from "./toppinghandler";

enum Selection {
  BASE,
  CHEESE,
  MEATS,
  VEGGIES,
}

export default function Selector() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [isBase, setIsBase] = useState<boolean>(true);
  const [isCheese, setIsCheese] = useState<boolean>(false);
  const [isMeats, setIsMeats] = useState<boolean>(false);
  const [isVeggies, setIsVeggies] = useState<boolean>(false);

  function setItem(item: Selection) {
    switch (item) {
      case Selection.BASE:
        setIsBase(true);
        setIsCheese(false);
        setIsMeats(false);
        setIsVeggies(false);
        break;
      case Selection.CHEESE:
        setIsBase(false);
        setIsCheese(true);
        setIsMeats(false);
        setIsVeggies(false);
        break;
      case Selection.MEATS:
        setIsBase(false);
        setIsCheese(false);
        setIsMeats(true);
        setIsVeggies(false);
        break;
      case Selection.VEGGIES:
        setIsBase(false);
        setIsCheese(false);
        setIsMeats(false);
        setIsVeggies(true);
        break;
    }
  }

  return (
    <div>
      <div className="lg:col-span-2 sm:col-span-1 row-span-1 border-b-2">
        <div className="flex flex-col lg:gap-20 border-b-2">
          <div className=" text-center text-2xl font-bold mb-3 mt-20">
            BUILD YOUR PIZZA
          </div>
          <div className="flex h-10 justify-center mb-5">
            <div
              className={`w-18 font-semibold text-lg flex justify-center ml-2 border-2 ${
                isBase
                  ? "border-yellow-300 + bg-yellow-300 + text-white"
                  : "border-gray-600"
              } rounded-xl bg-white text-black hover:bg-yellow-300 hover:border-yellow-300 hover:text-white`}
              onClick={() => setItem(Selection.BASE)}
            >
              <div className="mt-0.5">BASE</div>
            </div>
            <div
              className={`w-18 font-semibold text-lg flex justify-center ml-2 border-2 ${
                isCheese
                  ? "border-yellow-300 + bg-yellow-300 + text-white"
                  : "border-gray-600"
              } rounded-xl bg-white text-black hover:bg-yellow-300 hover:border-yellow-300 hover:text-white`}
              onClick={() => setItem(Selection.CHEESE)}
            >
              <div className="mt-0.5">CHEESE</div>
            </div>
            <div
              className={`w-18 font-semibold text-lg flex justify-center ml-2 border-2 ${
                isMeats
                  ? "border-yellow-300 + bg-yellow-300 + text-white"
                  : "border-gray-600"
              } rounded-xl bg-white text-black hover:bg-yellow-300 hover:border-yellow-300 hover:text-white`}
              onClick={() => setItem(Selection.MEATS)}
            >
              <div className="mt-0.5">MEATS</div>
            </div>
            <div
              className={`w-18 font-semibold text-lg flex justify-center ml-2 border-2 ${
                isVeggies
                  ? "border-yellow-300 + bg-yellow-300 + text-white"
                  : "border-gray-600"
              } rounded-xl bg-white text-black hover:bg-yellow-300 hover:border-yellow-300 hover:text-white`}
              onClick={() => setItem(Selection.VEGGIES)}
            >
              <div className="mt-0.5">VEGGIES</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 sm:col-span-1 row-span-2 border-2 border-black">
        <ToppingHandler />
      </div>
    </div>
  );
}
