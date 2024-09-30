import React from "react";
import SectionLayout from "../shared/SectionLayout";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <SectionLayout>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="flex  items-center justify-center">
              <div className="overflow-hidden rounded-xl ">
                <div className="relative">
                  <Image
                    src="/assets/home/about-img.png"
                    alt="about-image"
                    rel="preload"
                    width={620}
                    height={480}
                    className="w-[600px] h-auto "
                  />
                  <div className="absolute flex items-center justify-center p-4 transform rounded-md -bottom-3 md:bottom-0 gap-x-2 left-1/4">
                    <div className="p-2 rounded-full md:p-4 bg-opacity-80 bg-stone-800">
                      <IoCallOutline className="text-white size-4 md:size-6" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-white white md:text-sm">
                        We are available - 24/7
                      </p>
                      <h2 className="text-lg font-bold text-white md:text-2xl">
                        (863)-599-6735
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>
          <div className="flex-1">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div className="">
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-5xl mb-8 text-center md:text-left ${playfair.className}`}
                >
                  About Trip Law
                </h2>

                <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
                  At Trip Law we set out to create a unique law firm where
                  outstanding immigration representation and a deep commitment
                  to humanity go hand in hand. Hardam H. Tripathi was a former
                  legal professional in the federal government.
                </p>
                <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
                  Trip Law at this moment is the home to some of the most
                  experienced lawyers. Trip Law has turned into a leader in the
                  field of immigration law. The growth of Trip Law was fueled by
                  excellence, integrity, and a hard-earned reputation for
                  quality.
                </p>
                <ul className="flex flex-col gap-4 my-8">
                  <li className="flex gap-2">
                    <div className="size-8">
                      <Image
                        src="/assets/home/tick-box.png"
                        alt="tick-box"
                        className=""
                        width={28}
                        height={24}
                      />
                    </div>
                    <p className="text-lg font-semibold">
                      Defining Success by Your Satisfaction
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <div className="size-8">
                      <Image
                        src="/assets/home/tick-box.png"
                        alt="tick-box"
                        className=""
                        width={28}
                        height={24}
                      />
                    </div>
                    <p className="text-lg font-semibold">
                      Committed bringing client's justice
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <div className="size-8">
                      <Image
                        src="/assets/home/tick-box.png"
                        alt="tick-box"
                        className=""
                        width={28}
                        height={24}
                      />
                    </div>
                    <p className="text-lg font-semibold">
                      Proven Results, Exceptional Representation
                    </p>
                  </li>
                </ul>
                <div className="flex justify-center mt-8 md:justify-start">
                  <PrimaryButton
                    title={"READ MORE"}
                    link={"/about"}
                    style={
                      "flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-yellow-400 md:text-lg md:px-8 me-3 md:me-6 "
                    }
                    radius={"sm"}
                  />
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
