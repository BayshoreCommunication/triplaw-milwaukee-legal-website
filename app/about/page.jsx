import AboutSection from "@/components/about-us/AboutSection";
import HeroSection from "@/components/about-us/HeroSection";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import VideoSection from "@/components/about-us/VideoSection";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import CallToAction from "@/components/shared/CallToAction";
import Clients from "@/components/shared/Clients";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>About Trip Law Immigration Law Firm - Who We Are</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Learn about TripLaw's experienced immigration attorneys, dedication to client success, and commitment to excellence.`}
        />
      </Head>
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
