"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CaseStudiesCard = ({ caseData, index }) => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <Link
      href={`/case-studies/${"testpage"}`}
      key={index}
      className="cursor-pointer group "
    >
      <div className=" w-full h-[500px] ">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/assets/case1.jpg"
            alt="Case Studies"
            width={500}
            height={400}
            className="z-0 w-[500px] h-[500px]"
            rel="preload"
          />
          {/* Black overlay effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-out z-10"></div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex items-center justify-center p-3 rounded-full bg-primary size-16 opacity-0 group-hover:opacity-100 duration-300">
            <BsArrowUpRight className="text-white size-6" />
          </div>
        </div>

        <div className=" absolute bottom-0 md:-bottom-16 md:right-0 z-10  p-3 md:p-6 bg-[#F6F6F6] group-hover:bg-[#000000] duration-300 rounded-md w-full md:w-[400px]">
          <div className="flex items-center justify-between mb-2 group-hover:text-white duration-300">
            <p className=" text-sm md:text-base">Car Accident Case</p>
            <p className=" text-sm md:text-base">December 19, 2023</p>
          </div>
          <h2 className="text-2xl font-semibold line-clamp-1 group-hover:text-white duration-300">
            A client was rear-ended at a traffic li
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudiesCard;
