import ContactSection from "@/components/contact-us/ContactSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import HeroSection from "@/components/contact-us/HeroSection";

export const metadata = {
  title:
    "Contact the Best Immigration, Criminal Defense & Personal Injury Lawyers in Milwaukee",
  description:
    "Get in touch with the trusted team at Milwaukee Legal Pros for expert legal assistance in immigration, criminal defense, and personal injury cases. Schedule a consultation today to discuss your legal needs with our experienced attorneys who are committed to providing personalized legal support in Milwaukee, Wisconsin.",
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
