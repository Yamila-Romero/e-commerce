"use client";

import Image from "next/image";
import { IconChevronRight, IconArrowRight } from "@/assets/icons";
import { useState } from "react";

const images = ["/relojes-rolex-.png", "/reloj.png", "/gshock.png"];

export default function HomeCarrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePreviosClick() {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  }
  function handleNextClick() {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  }
  return (
    <div className="w-full bg-gray-400">
      <div className="w-full h-[366px] relative flex items-center justify-center">
        {images.map((image, idx) => {
          return (
            <Image
              key={image + idx}
              src={image}
              alt={image}
              fill
              objectFit="cover"
              className={`transition-all ease-in-out duration-500 ${
                currentIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}

        <div className="w-full p-16 absolute flex justify-between">
          <button
            className="bg-white shadow-black hover:shadow-xl flex justify-center items-center w-10 h-10 rounded-full"
            onClick={() => handlePreviosClick()}
          >
            <IconChevronRight className="text-gray-700 rotate-180 mr-0.5 hover:text-gray-400" />
          </button>
          <button
            className="bg-white shadow-black hover:shadow-xl flex justify-center items-center w-10 h-10 rounded-full"
            onClick={() => handleNextClick()}
          >
            <IconChevronRight className="text-gray-700 ml-0.5 hover:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
