import AppointmentFrom from "@/components/appointment/AppointmentFrom";
import AppointmentSection from "@/components/appointment/AppointmentSection";
import HeroSection from "@/components/appointment/HeroSection";

export const metadata = {
  title:
    "Criminal justice attorney in Wisconsin | Consult the Best Immigration Lawyer for USA | Reputable Immigration Law Experts  ",
  description:
    "Trusted criminal justice attorneys in Wisconsin, specializing in personal injury, criminal defense, and immigration law. Consult the best immigration lawyer for the USA and work with reputable experts for your legal needs.",
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
      <AppointmentSection />
      <AppointmentFrom />
    </>
  );
};

export default page;
