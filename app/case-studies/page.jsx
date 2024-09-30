import CaseStudies from "@/components/case-studies/CaseStudies";
import HeroSection from "@/components/case-studies/HeroSection";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        <title>What Immigration Services Does TripLaw Offer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation.`}
        />
      </Head>
      <HeroSection />
      <CaseStudies />
    </div>
  );
};

export default page;
