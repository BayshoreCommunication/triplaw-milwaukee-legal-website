"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

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

const SideServicesCard = ({ servicesData }) => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.95 }}
      className={``}
    >
      <Link
        href={`/services/${servicesData?.slug}`}
        className="flex items-start w-full py-4 gap-x-3 h-full border-b border-gray-500"
      >
        <Image
          src={`${servicesData?.practiceAreasSidebarImage}`}
          alt="tick-box"
          className="w-[80px] h-auto"
          width={200}
          height={100}
        />
        <div className="h-full">
          <h2
            className={`text-lg tracking-wide line-clamp-2  mt-[-20px]  ${pathname === "/services/" + servicesData?.slug ? "text-primary" : "text-white"}`}
          >
            {servicesData?.title}
          </h2>
          <p
            className={`text-base tracking-wide line-clamp-1  mt-[0px]  ${pathname === "/services/" + servicesData?.slug ? "text-primary" : "text-white"}`}
          >
            {servicesData?.shortDesc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default SideServicesCard;
