import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import { allServiceData } from "@/config/serviceData";
import PrimaryButton from "../shared/PrimaryButton";
import { Playfair_Display } from "next/font/google";
import ServiceCard from "../services/ServiceCard";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import CaseStudiesCard from "../case-studies/CaseStudiesCard";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

const RecentCases = () => {
  return (
    <div>
      <SectionLayout>
        <div className="flex items-center justify-center md:justify-between">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-stone-950 font-bold text-3xl md:text-5xl mb-0 md:mb-4 text-center md:text-left  ${playfair.className}`}
            >
              Recent Cases
            </h2>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="hidden md:block">
              <Link
                href="/case-studies"
                className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-none  rounded-lg hover:bg-primary duration-300 border-2 border-black hover:border-primary text-black hover:text-white"
              >
                Vew All
                <FaArrowRightLong className="ml-2  size-5" />
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
        <div className="grid items-center justify-between mb-8 md:mb-20 md:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-32 mt-8 md:mt-14">
          {[1, 2, 3, 4, 5, 6]?.map((el, index) => (
            <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
              <CaseStudiesCard key={index} caseData={el} index={index} />
            </ScrollMotionEffect>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default RecentCases;
