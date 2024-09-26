import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Bitter } from "next/font/google";
import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";

const bitter = Bitter({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <SectionLayout>
      <div className="space-y-14">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
          <div className="flex-1">
            <div className="relative">
              <div className="rounded-xl overflow-hidden ">
                <Image
                  src="/assets/home/about-image.png"
                  alt="about-image"
                  className=""
                  rel="preload"
                  width={620}
                  height={480}
                />
              </div>
              {/* <div className="rounded-xl">
                <Image
                  src="/assets/home/about-image-bg.png"
                  alt="about-image"
                  className=""
                  rel="preload"
                  width={620}
                  height={480}
                />
              </div> */}
            </div>
          </div>
          <div className="flex-1">
            <div className="">
              {/* <h2 className='text-base font-bold text-stone-950'>About</h2>
              <hr class='h-[2px] my-0 bg-stone-950 border-0 w-4'></hr> */}
              <h2
                className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
              >
                About Trip Law
              </h2>

              <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
                At Trip Law we set out to create a unique law firm where
                outstanding immigration representation and a deep commitment to
                humanity go hand in hand. Hardam H. Tripathi was a former legal
                professional in the federal government.
              </p>
              <p className="mb-4 text-lg text-center text-stone-950 md:text-left">
                Trip Law at this moment is the home to some of the most
                experienced lawyers. Trip Law has turned into a leader in the
                field of immigration law. The growth of Trip Law was fueled by
                excellence, integrity, and a hard-earned reputation for quality.
              </p>
              <ul className="flex flex-col gap-4 my-8">
                <li className="flex gap-2">
                  <Image
                    src="/assets/home/tick-box.png"
                    alt="tick-box"
                    className=" "
                    width={28}
                    height={24}
                  ></Image>
                  <p className="text-lg font-semibold">
                    Defining Success by Your Satisfaction
                  </p>
                </li>
                <li className="flex gap-2">
                  <Image
                    src="/assets/home/tick-box.png"
                    alt="tick-box"
                    className=" "
                    width={28}
                    height={24}
                  ></Image>
                  <p className="text-lg font-semibold">
                    Committed bringing client's justice
                  </p>
                </li>
                <li className="flex gap-2">
                  <Image
                    src="/assets/home/tick-box.png"
                    alt="tick-box"
                    className=" "
                    width={28}
                    height={24}
                  ></Image>
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
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
