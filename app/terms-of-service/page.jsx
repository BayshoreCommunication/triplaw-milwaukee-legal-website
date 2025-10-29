import HeroSection from "@/components/terms-of-service/HeroSection";
import TermsOfService from "@/components/terms-of-service/TermsOfService";
import React from "react";

export const metadata = {
  title: "Terms of Service - Milwaukee Legal Pros",
  description:
    "Explore our Terms of Service to understand the rules, guidelines, and legal agreements managing your use of our website and services.",
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
      <TermsOfService />
    </>
  );
};

export default page;
