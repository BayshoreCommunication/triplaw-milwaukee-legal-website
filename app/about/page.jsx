import AboutSection from "@/components/about-us/AboutSection";
import HeroSection from "@/components/about-us/HeroSection";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import VideoSection from "@/components/about-us/VideoSection";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import CallToAction from "@/components/shared/CallToAction";

export const metadata = {
  title:
    "Best Immigration Lawyer for Citizenship | Personal Injury & Criminal Defense in Milwaukee | Milwaukee Legal Pros",
  description:
    " Milwaukee Legal Pros: Your trusted legal team for Personal Injury, Criminal Defense, and Immigration Law in Milwaukee. Work with the best immigration lawyer for citizenship to navigate your path to success.",
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
      <AboutSection />
      {/* <VideoSection /> */}
      {/* <Clients /> */}
      <WhoWeAre />
      <CallToAction />
    </>
  );
};

export default page;
