"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Playfair_Display } from "next/font/google";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import PrimaryButton from "../shared/PrimaryButton";
import CaseStudiesCard from "./CaseStudiesCard";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const playfair = Playfair_Display({ subsets: ["latin"] });

const CaseStudies = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className="mt-5">
      <SectionLayout>
        <h2
          className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 text-center mb-10 ${playfair.className}`}
        >
          Legal Solutions for Better World
        </h2>
        <div className="grid items-center justify-between mb-20 md:grid-cols-3 gap-x-10 gap-y-32">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((el, index) => (
            <CaseStudiesCard key={index} caseData={el} index={index} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default CaseStudies;
