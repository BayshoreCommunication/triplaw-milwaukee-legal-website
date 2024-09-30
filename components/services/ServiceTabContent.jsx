import { allServiceData } from "@/config/serviceData";
import Link from "next/link";
import React from "react";
import ServiceCard from "./ServiceCard";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const ServiceTabContent = () => {
  return (
    <div>
      <div className="grid items-center justify-between grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        {allServiceData?.personal_injury_law?.map((el, index) => (
          <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
            <Link href={`/services/${el?.slug}`}>
              <ServiceCard key={index} serversData={el} index={index} />
            </Link>
          </ScrollMotionEffect>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabContent;
