import AppointmentFrom from "@/components/appointment/AppointmentFrom";
import AppointmentSection from "@/components/appointment/AppointmentSection";
import HeroSection from "@/components/appointment/HeroSection";

export const metadata = {
  title:
    "Consult the Best Immigration Lawyer for USA | Reputable Immigration Law Experts ",
  description:
    "Secure expert legal help with Milwaukee Legal Pros. Schedule your appointment with reputable immigration lawyers focused on U.S. citizenship and visa solutions.",
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
