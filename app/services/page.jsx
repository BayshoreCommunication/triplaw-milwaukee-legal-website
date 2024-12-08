import CardMotion from "@/components/motion/CardMotion";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceTabSection from "@/components/services/ServiceTabSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import { servicesData } from "@/config/data";
import Link from "next/link";

export const metadata = {
  title: "What Immigration Services Does TripLaw Offer",
  description:
    "Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation.",
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
    <div>
      <PageHeroSection subTitle={"Services"} title={"Services"} />
      <SectionLayout bg="bg-white">
        <ServiceTabSection />
      </SectionLayout>
    </div>
  );
};

export default page;
