import Career from "@/components/career/Career";
import HeroSection from "@/components/career/HeroSection";
import React from "react";

export const metadata = {
  title: "Career - Attorney Hardam Tripathi, Esq.",
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
      <Career />
    </>
  );
};

export default page;
