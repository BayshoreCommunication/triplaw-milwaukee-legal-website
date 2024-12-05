import React from "react";
import SectionLayout from "../shared/SectionLayout";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { FaArrowRightLong } from "react-icons/fa6";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";
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
                  <div className="absolute flex items-center justify-center p-4 transform rounded-md -bottom-3 md:bottom-0 gap-x-2 left-[20%]">
                    <div className="p-2 rounded-full md:p-4 bg-opacity-80 bg-stone-800">
                      <IoCallOutline className="text-white size-4 md:size-6" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-white white md:text-sm">
                        We are available - 24/7
                      </p>
                      <Link
                        href={"tel:+18635996735"}
                        className="text-base font-bold text-white md:text-2xl"
                      >
                        +1 (863) 599-6735
                      </Link>
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
                  About Milwaukee Legal Pros
                </h2>

                <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
                  At Milwaukee Legal Pros, we provide exceptional criminal
                  defense, immigration, and personal injury representation with
                  a steadfast commitment to justice and client care. Founded by
                  Hardam H. Tripathi, a former federal legal professional, our
                  firm blends skill, experience, and client-centered advocacy.
                </p>
                <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
                  Home to some of Wisconsin's top attorneys, Milwaukee Legal
                  Pros is a leader in criminal and personal injury law, known
                  for excellence, integrity, and relentless pursuit of justice.
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
                      Your Success Is Our Priority
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
                      Delivering Results with Unmatched Representation
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
                      Justice Won’t Wait, Neither Will We
                    </p>
                  </li>
                </ul>
                <div className="flex justify-center mt-8 md:justify-start">
                  {/* <PrimaryButton
                    title={"READ MORE"}
                    link={"/about"}
                    style={
                      "flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-yellow-400 md:text-lg md:px-8 me-3 md:me-6 "
                    }
                    radius={"sm"}
                  /> */}
                  <Link
                    href="/about"
                    className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-primary text-white rounded-lg hover:bg-[#facc15] duration-300"
                  >
                    READ MORE
                    <FaArrowRightLong className="ml-2  size-5" />
                  </Link>
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
