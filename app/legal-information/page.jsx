import HeroSection from "@/components/legal-information/HeroSection";
import LegalInformation from "@/components/legal-information/LeagalInformation";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <LegalInformation />
    </>
  );
};

export default page;
