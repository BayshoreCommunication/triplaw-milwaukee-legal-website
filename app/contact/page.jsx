import ContactSection from "@/components/contact-us/ContactSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import HeroSection from "@/components/contact-us/HeroSection";

export const metadata = {
  title:
    "Contact the Best Immigration, Criminal Defense & Personal Injury Lawyers in Milwaukee | top criminal defense attorneys in wisconsin | affordable criminal defense attorney milwaukee | Milwaukee Legal Pros",
  description:
    "Contact Milwaukee Legal Pros – Your trusted team of immigration, criminal defense, and personal injury lawyers in Milwaukee. Work with top criminal defense attorneys in Wisconsin and find an affordable criminal defense attorney in Milwaukee for expert legal representation tailored to your needs. Milwaukee legal pros",
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
    <>
      <HeroSection />
      <ContactSection />
    </>
  );
};

export default page;
