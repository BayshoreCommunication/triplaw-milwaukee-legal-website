import HeroSection from "@/components/legal-information/HeroSection";
import LegalInformation from "@/components/legal-information/LeagalInformation";
import React from "react";

export const metadata = {
  title: "Legal Information - Milwaukee Legal Pros",
  description: "",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <LegalInformation />
    </>
  );
};

export default page;
