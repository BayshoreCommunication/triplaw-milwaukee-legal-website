import CaseStudies from "@/components/case-studies/CaseStudies";
import HeroSection from "@/components/case-studies/HeroSection";
import React from "react";

export const metadata = {
  title: "What Immigration Services Does TripLaw Offer",
  description:
    "Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation.",
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
    <div>
      <HeroSection />
      <CaseStudies />
    </div>
  );
};

export default page;
