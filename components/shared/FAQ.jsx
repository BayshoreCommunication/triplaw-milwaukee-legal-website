"use client";
import Image from "next/image";
import React from "react";
import SectionLayout from "./SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Mulish, Bitter } from "next/font/google";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const bitter = Bitter({ subsets: ["latin"] });

const FAQ = () => {
  return (
    <SectionLayout bg="bg-[#F6F6F6] lg:py-12">
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-24 ">
        <div className=" inline-block rounded-lg relative flex-shrink-0">
          <Image
            src="/assets/home/experience-tag.png"
            alt="hardam tripathi"
            width={150}
            height={150}
            className="absolute -top-12 -right-12"
          ></Image>
          <Image
            src="/assets/home/hardam-tripathi-faq.png"
            alt="hardam tripathi"
            width={500}
            height={600}
          ></Image>
        </div>
        <div className="w-[100%]">
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-2 text-start ${bitter.className}`}
          >
            Every Essential Quarry for Our Clients
          </h2>
          <div className="flex-1">
            <div className="w-full pt-8">
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
                    <span className="text-2xl font-medium">
                      What are good questions to ask law firms?
                    </span>
                  }
                  // title="What are good questions to ask law firms?"
                  className="text-lg text-[#4A4A4A] "
                >
                  <p>
                    {" "}
                    Likeness had fruit moved herb you're earth sea dry you're
                    creature own man give It fish cattle they're male creepeth
                    give male
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
                    <span className="text-2xl font-medium">
                      What are your non-academic interests?
                    </span>
                  }
                  className="text-lg text-[#4A4A4A] "
                >
                  <p>
                    {" "}
                    Likeness had fruit moved herb you're earth sea dry you're
                    creature own man give It fish cattle they're male creepeth
                    give male
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
                    <span className="text-2xl font-medium">
                      What is hardest question to ask a lawyer?
                    </span>
                  }
                  className="text-lg text-[#4A4A4A] "
                >
                  <p>
                    {" "}
                    Likeness had fruit moved herb you're earth sea dry you're
                    creature own man give It fish cattle they're male creepeth
                    give male
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FAQ;
