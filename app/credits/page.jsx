import Credits from "@/components/credits/Credits";
import HeroSection from "@/components/credits/HeroSection";

export const metadata = {
  title: "Credits - Attorney Hardam Tripathi, Esq.",
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
      <Credits />
    </>
  );
};

export default page;
