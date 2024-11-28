import AppointmentFrom from "@/components/appointment/AppointmentFrom";
import AppointmentSection from "@/components/appointment/AppointmentSection";
import HeroSection from "@/components/appointment/HeroSection";
import Head from "next/head";

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
