import AboutSection from "@/components/about-us/AboutSection";
import HeroSection from "@/components/about-us/HeroSection";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import VideoSection from "@/components/about-us/VideoSection";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import CallToAction from "@/components/shared/CallToAction";
// import Clients from "@/components/shared/Clients";

export const metadata = {
  title:
    "Best Immigration Lawyer for Citizenship | Personal Injury & Criminal Defense in Milwaukee",
  description:
    "Learn about Milwaukee Legal Pros, your trusted partner for legal expertise. From the best immigration lawyer for citizenship to personal injury and criminal defense, we deliver exceptional results.",
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
