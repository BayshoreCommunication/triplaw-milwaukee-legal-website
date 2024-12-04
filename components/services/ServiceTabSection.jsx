"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { servicesData } from "@/config/data";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import CardMotion from "../motion/CardMotion";
import ServiceTabContent from "./ServiceTabContent";
import SectionLayout from "../shared/SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

const ServiceTabSection = () => {
  const [activeTab, setActiveTab] = useState("personal-injury-law-services");

  const tabsItem = [
    {
      key: "personal-injury-law-services",
      title: "Personal Injury Law Services",
    },
    {
      key: "criminal-law-services",
      title: "Criminal Law Services",
    },
    {
      key: "immigration-services",
      title: "Immigration Services",
    },
  ];

  return (
    <SectionLayout>
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-bold text-3xl md:text-5xl text-center mb-10 ${playfair.className}`}
        >
          Legal Solutions for Better World
        </h2>
      </ScrollMotionEffect>

      <div className="">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="flex border-b border-gray-300 w-[350px] md:w-[600px] lg:w-[1024px] mx-auto justify-center">
            {tabsItem.map((tab, index) => (
              <div key={tab?.key} className="relative flex-1 text-center">
                <button
                  className={`py-2 px-1 md:px-4 text-base md:text-xl w-full ${
                    activeTab === tab?.key
                      ? "text-primary font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab?.key)}
                >
                  {tab?.title}
                </button>
                {activeTab === tab?.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollMotionEffect>

        <motion.div
          className="mt-14"
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceTabContent activeTab={activeTab} />
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default ServiceTabSection;
