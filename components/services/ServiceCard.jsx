"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../shared/PrimaryButton";
import parse from "html-react-parser";
import Link from "next/link";

const ServiceCard = ({ serversData, index }) => {
  return (
    <div className="relative flex flex-col items-center max-w-sm gap-6 p-6 border border-gray-200 rounded-md shadow overflow-hidden group">
      {/* Smooth background effect from bottom to top */}
      <div className="absolute inset-0 z-0 bg-black transform scale-y-0 origin-bottom transition-transform duration-700 ease-out group-hover:scale-y-100"></div>

      {/* Card content stays on top of the effect */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="p-6 mt-6 rounded-full bg-primary">
          <Image
            src={serversData.icon}
            alt="Picture of the author"
            width={100}
            height={100}
            className="size-12"
          />
        </div>
        <div className="mt-4 mb-6">
          <h5
            className={`mb-2 font-bold tracking-wide text-center text-md md:text-md lg:text-lg xl:text-lg 2xl:text-2xl transition-colors  text-black group-hover:text-white`}
          >
            {serversData?.title}
          </h5>
          <p
            className={`font-normal text-center line-clamp-2 transition-colors text-black group-hover:text-white`}
          >
            {serversData?.shortDesc}
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href={`/services/${serversData?.slug}`}
              className="flex items-center justify-center px-2 py-2 mb-2 text-sm font-normal text-primary rounded-lg border-2 border-primary hover:bg-primary md:text-lg md:px-8 me-3 md:me-6 bg-transparent hover:text-white shadow-none group-hover:border-white group-hover:text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Colored bottom strip */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-black rounded-b-md"></div>
    </div>
  );
};

export default ServiceCard;
