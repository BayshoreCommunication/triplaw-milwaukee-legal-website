import React from "react";
import SectionLayout from "../shared/SectionLayout";

import { allServiceData } from "@/config/serviceData";
import PrimaryButton from "../shared/PrimaryButton";
import { Playfair_Display } from "next/font/google";
import ServiceCard from "../services/ServiceCard";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

function ServicesSection() {
  return (
    <div className="bg-[#F6F6F6]">
      <SectionLayout>
        <div className="w-full lg:max-w-[60%] mx-auto">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-stone-950 font-bold text-3xl md:text-5xl mb-4 text-center ${playfair.className}`}
            >
              Our Services
            </h2>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className="mb-4 text-sm text-center md:text-lg text-stone-950 ">
              {`Are you married to a USAn the United States? Obtaining a green card through marriage can be a complex and emotionally charged process. We understand the challenges you face and are dedicated to providing comprehensive legal guidance throughout your journey.`}
            </p>
          </ScrollMotionEffect>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServiceData.personal_injury_law
              .slice(0, 3)
              .map((service, index) => (
                <ScrollMotionEffect
                  key={index}
                  effect="fade-up"
                  duration="2000"
                >
                  <ServiceCard serversData={service} index={index} />
                </ScrollMotionEffect>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {allServiceData.criminal_law.slice(0, 3).map((service, index) => (
              <ScrollMotionEffect key={index} effect="fade-up" duration="2000">
                <ServiceCard serversData={service} index={""} />
              </ScrollMotionEffect>
            ))}
          </div>
        </div>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="flex justify-center items-center mt-10">
            <PrimaryButton
              title={"View All"}
              link={"/case"}
              style={
                "flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-white rounded-lg  hover:bg-primary  md:text-lg md:px-8 me-3 md:me-6 bg-transparent border-2 border-black text-black hover:text-white hover:border-primary w-56"
              }
              radius={"sm"}
            />
          </div>
        </ScrollMotionEffect>
      </SectionLayout>
    </div>
  );
}

export default ServicesSection;
