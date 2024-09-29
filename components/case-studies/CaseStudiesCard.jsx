"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CaseStudiesCard = ({ caseData, index }) => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <Link
      href={`/case-studies/${"test"}`}
      key={index}
      className="cursor-pointer"
    >
      <div className="relative w-full h-[500px] ">
        <Image
          src="/assets/case1.jpg"
          alt="Case Studies"
          width={500}
          height={400}
          className="z-0 w-[500px] h-[500px]"
          rel="preload"
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {index === activeItem ? (
            <div className="flex items-center justify-center p-3 rounded-full bg-primary size-16">
              <BsArrowUpRight className="text-white size-6" />
            </div>
          ) : (
            ""
          )}
        </div>

        {index === activeItem ? (
          <div className="absolute -bottom-16 right-0 z-10 p-6 bg-[#000000] rounded-md w-[400px]">
            <div className="flex items-center justify-between mb-2 text-white">
              <p>Car Accident Case</p>
              <p>December 19, 2023</p>
            </div>
            <h2 className="text-2xl font-semibold text-white line-clamp-1">
              A client was rear-ended at a traffic li
            </h2>
          </div>
        ) : (
          <div className="absolute -bottom-16 right-0 z-10 p-6 bg-[#F6F6F6] rounded-md w-[400px]">
            <div className="flex items-center justify-between mb-2">
              <p>Car Accident Case</p>
              <p>December 19, 2023</p>
            </div>
            <h2 className="text-2xl font-semibold line-clamp-1">
              A client was rear-ended at a traffic li
            </h2>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CaseStudiesCard;
