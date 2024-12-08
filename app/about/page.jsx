import AboutSection from "@/components/about-us/AboutSection";
import HeroSection from "@/components/about-us/HeroSection";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import VideoSection from "@/components/about-us/VideoSection";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import CallToAction from "@/components/shared/CallToAction";
import Clients from "@/components/shared/Clients";
import FAQ from "@/components/shared/FAQ";

export const metadata = {
  title: "About Trip Law Immigration Law Firm - Who We Are",
  description:
    "Learn about TripLaw's experienced immigration attorneys, dedication to client success, and commitment to excellence.",
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
      <VideoSection />
      <Clients />
      <WhoWeAre />
      <CallToAction />
    </>
  );
};

export default page;
