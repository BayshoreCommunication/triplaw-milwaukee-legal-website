"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const PrimaryButton = ({ title, radius, style, icon_style, link }) => {
  const router = useRouter();

  return (
    <Link href={`/services/${link}`}>
      <Button
        radius={radius}
        size="lg"
        className={`${style} shadow-lg font-medium text-lg px-10 py-4 mb-2 flex items-center gap-2`}
      >
        {title}
        <FaArrowRightLong className={`${icon_style} ml-2  size-5  `} />
      </Button>
    </Link>
  );
};

export default PrimaryButton;
