import AboutSection from "@/components/home/AboutSection";
import DeportationDefense from "@/components/home/DeportationDefense";
import Clients from "@/components/home/Clients";
import HeroSection from "@/components/home/HeroSection";
import HumanitarianImmigration from "@/components/home/HumanitarianImmigration";
import NewsSection from "@/components/home/NewsSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQ from "@/components/shared/FAQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <FAQ />
      <Clients />
      <HumanitarianImmigration />
      <DeportationDefense />
      <ScheduleSection />
      <NewsSection />
      {/* <TestimonialSection /> */}
    </main>
  );
}
