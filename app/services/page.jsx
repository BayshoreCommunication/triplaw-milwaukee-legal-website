import CardMotion from "@/components/motion/CardMotion";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceTabSection from "@/components/services/ServiceTabSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import { servicesData } from "@/config/data";
import Link from "next/link";

export const metadata = {
  title:
    "Personal Injury & Criminal Defense Attorneys | Immigration Law Experts in Milwaukee",
  description:
    "Explore Milwaukee Legal Pros' expert legal services, including Criminal Defense, Immigration, and Personal Injury. Our skilled attorneys are committed to achieving the best outcomes for your case. Learn more about our services today!",
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
