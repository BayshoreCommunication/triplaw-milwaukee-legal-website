import HeroSection from "@/components/privacy-policy/HeroSection";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy - Attorney Hardam Tripathi, Esq.",
  description: "",
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
      <PrivacyPolicy />
    </>
  );
};

export default page;
