import CardMotion from "@/components/motion/CardMotion";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceTabSection from "@/components/services/ServiceTabSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";

export const metadata = {
  title:
    "Personal Injury & Criminal Defense Attorneys | Immigration Law Experts in Milwaukee |best immigration lawyer milwaukee | Milwaukee Legal Pros",
  description:
    "Milwaukee Legal Pros: Dedicated Personal Injury & Criminal Defense Attorneys and Immigration Law Experts in Milwaukee. Trust the best immigration lawyer in Milwaukee for expert guidance and personalized legal solutions tailored to your needs.",
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
