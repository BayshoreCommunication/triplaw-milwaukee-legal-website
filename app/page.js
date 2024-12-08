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

export const metadata = {
  title:
    "Florida Immigration Lawyer Firm || USA Immigration Attorney Hardam Tripathi, Esq.",
  description:
    "Florida Immigration Law Services Call our local Immigration office for your Green Card, Naturalization or Investor Visa.",
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

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <RecentCases /> */}
      {/* <ClientTestimonials /> */}
      <WhyChooseUs />
      <FAQ />
      {/* <Clients /> */}
      <CallToAction />
      <RecentBlogs />
    </main>
  );
}
