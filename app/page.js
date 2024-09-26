import AboutSection from "@/components/home/AboutSection";
import DeportationDefense from "@/components/home/DeportationDefense";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQ from "@/components/shared/FAQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/shared/CallToAction";
import Clients from "@/components/shared/Clients";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <FAQ />
      <Clients />
      <CallToAction />
      <DeportationDefense />
      <ScheduleSection />
      <NewsSection />
      {/* <TestimonialSection /> */}
    </main>
  );
}
