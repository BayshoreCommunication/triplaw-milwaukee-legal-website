import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQ from "@/components/shared/FAQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/shared/CallToAction";
import RecentBlogs from "@/components/home/RecentBlogs";

export const metadata = {
  title:
    "Top-Rated Criminal Defense, Immigration, and Personal Injury Lawyers in Milwaukee",
  description:
    "Milwaukee Legal Pros specializes in Criminal Defense, Immigration, and Personal Injury cases. Trust our experienced attorneys to protect your rights and provide the representation you deserve. Contact us today for a consultation!",
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
