"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

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

const CaseStudiesSidebar = ({ CaseStudiesData }) => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.95 }}
      href="#"
      className={`border-b-1 border-gray-500`}
    >
      <div className="flex justify-between items-center w-full py-4">
        {/* <h5
          className={`mb-2 text-xl font-bold tracking-wide   ${pathname === "/case-studies/" ? "text-primary" : "text-white"}`}
        >
          This is demo tiel
        </h5> */}
        <MdKeyboardArrowRight
          className={`size-6 ${pathname === "/case-studies/" + "serversData?.slug " ? "text-primary" : "text-white"}`}
        />
      </div>
    </motion.div>
  );
};

export default CaseStudiesSidebar;
