"use client";
import Image from "next/image";
import React from "react";
import SectionLayout from "./SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Playfair_Display } from "next/font/google";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

const FAQ = () => {
  return (
    <SectionLayout bg="bg-[#F6F6F6] lg:py-12">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-10 ">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <div className=" flex justify-center">
            <Image
              src="/assets/home/hardam-tripathi.png"
              alt="hardam tripathi"
              width={600}
              height={600}
            />
          </div>
        </ScrollMotionEffect>

        <div className="w-full">
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="w-[100%]">
              <h2
                className={`text-stone-950 font-bold text-2xl md:text-4xl mt-1 md:mt-5 mb-1 md:mb-2 text-center md:text-left ${playfair.className}`}
              >
                Every Essential Quarry for Our Clients
              </h2>
              <div className="flex-1">
                <div className="w-full pt-4 md:pt-8">
                  <Accordion defaultExpandedKeys={["1"]} className="w-full">
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <FaMinus color="#D5AD45" className="!rotate-90" />
                        ) : (
                          <FaPlus color="#D5AD45" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          What is your availability for consultations and
                          communication?
                        </span>
                      }
                      // title="What are good questions to ask law firms?"
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        We offer free initial consultations and flexible
                        scheduling, whether in-person or virtual. We’ll respond
                        to your inquiries within 24 hours and keep you updated
                        regularly on the progress of your case.
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <FaMinus color="#D5AD45" className="!rotate-90" />
                        ) : (
                          <FaPlus color="#D5AD45" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          Do you volunteer your time to any legal aid
                          organizations or pro bono work?
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        Yes, we actively give back through pro bono work with
                        legal aid organizations, helping those who can’t afford
                        legal services. It’s all part of our commitment to
                        justice, equality, and supporting our community.
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Accordion 3"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <FaMinus color="#D5AD45" className="!rotate-90" />
                        ) : (
                          <FaPlus color="#D5AD45" />
                        )
                      }
                      title={
                        <span className="text-lg md:text-2xl font-medium">
                          How do you approach client confidentiality?
                        </span>
                      }
                      className="text-lg text-[#4A4A4A] "
                    >
                      <p>
                        We follow strict legal and ethical standards to protect
                        all your case details and communications. Rest assured,
                        your information stays safe and confidential with us.
                      </p>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FAQ;
