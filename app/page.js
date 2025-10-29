import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQ from "@/components/shared/FAQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/shared/CallToAction";
import RecentBlogs from "@/components/home/RecentBlogs";

export const metadata = {
  title:
    "Criminal justice attorney in Wisconsin | Personal Injury Lawyer in  Brookfield, Wisconsin  | Milwaukee Legal Pros top criminal defense attorneys in wisconsin",
  description:
    " Milwaukee Legal Pros: Your trusted Criminal Justice Attorney in Wisconsin and Personal Injury Lawyer in Brookfield, Wisconsin. With a reputation as one of the top criminal defense attorneys in Wisconsin, we provide expert legal representation to protect your rights and secure your future. Milwaukee Legal Pros",
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
