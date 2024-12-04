import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import { allServiceData } from "@/config/serviceData";
import PrimaryButton from "../shared/PrimaryButton";
import { Playfair_Display } from "next/font/google";
import ServiceCard from "../services/ServiceCard";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

function ServicesSection() {
  return (
    <div className="bg-[#F6F6F6]">
      <SectionLayout>
        <div className="w-full lg:max-w-[80%] mx-auto">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-stone-950 font-bold text-3xl md:text-5xl mb-4 text-center ${playfair.className}`}
            >
              Our Services
            </h2>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className="mb-0 md:mb-4 text-sm text-center md:text-lg text-stone-950 ">
              {`Are you facing criminal charges or grappling with a personal injury in Milwaukee? The legal system can feel like an unforgiving maze, whether you’re standing accused or seeking the justice you rightfully deserve. We understand the weight these challenges can bring—the emotional toll and the financial strain. With unwavering dedication and expert guidance, we're here to support you all the way, every step until justice has its say.
`}
            </p>
          </ScrollMotionEffect>
        </div>

        <div className="mt-8 md:mt-16">
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
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {allServiceData.immigration.slice(0, 3).map((service, index) => (
              <ScrollMotionEffect key={index} effect="fade-up" duration="2000">
                <ServiceCard serversData={service} index={""} />
              </ScrollMotionEffect>
            ))}
          </div>
        </div>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="flex justify-center items-center mt-10">
            <Link
              href="/services"
              className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-none  rounded-lg hover:bg-primary duration-300 border-2 border-black hover:border-primary text-black hover:text-white"
            >
              View All
              <FaArrowRightLong className="ml-2  size-5" />
            </Link>
          </div>
        </ScrollMotionEffect>
      </SectionLayout>
    </div>
  );
}

export default ServicesSection;
