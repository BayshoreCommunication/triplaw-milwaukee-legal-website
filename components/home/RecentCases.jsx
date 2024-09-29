import React from "react";
import SectionLayout from "../shared/SectionLayout";

import { allServiceData } from "@/config/serviceData";
import PrimaryButton from "../shared/PrimaryButton";
import { Playfair_Display } from "next/font/google";
import ServiceCard from "../services/ServiceCard";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import CaseStudiesCard from "../case-studies/CaseStudiesCard";

const playfair = Playfair_Display({ subsets: ["latin"] });

const RecentCases = () => {
  return (
    <div>
      <SectionLayout>
        <div className="flex items-center justify-between">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-stone-950 font-bold text-3xl md:text-5xl mb-4 text-center  ${playfair.className}`}
            >
              Recent Cases
            </h2>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <PrimaryButton
              title={"View All"}
              link={"/case"}
              style={
                "flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-white rounded-lg  hover:bg-primary  md:text-lg md:px-8 me-3 md:me-6 bg-transparent border-2 border-black text-black hover:text-white hover:border-primary"
              }
              radius={"sm"}
            />
          </ScrollMotionEffect>
        </div>
        <div className="grid items-center justify-between mb-20 md:grid-cols-3 gap-x-10 gap-y-32 mt-14">
          {[1, 2, 3, 4, 5, 6]?.map((el, index) => (
            <CaseStudiesCard key={index} caseData={el} index={index} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default RecentCases;
