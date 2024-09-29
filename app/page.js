import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQ from "@/components/shared/FAQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/shared/CallToAction";
import Clients from "@/components/shared/Clients";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import RecentCases from "@/components/home/RecentCases";
import RecentBlogs from "@/components/home/RecentBlogs";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RecentCases />
      <ClientTestimonials />
      <WhyChooseUs />
      <FAQ />
      <Clients />
      <CallToAction />
      <RecentBlogs />
    </main>
  );
}
