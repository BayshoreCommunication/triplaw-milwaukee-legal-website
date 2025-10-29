import AngelInvestor from "@/components/angel-investor/AngelInvestor";
import HeroSection from "@/components/angel-investor/HeroSection";

export const metadata = {
  title: "Angel Investor - Attorney Hardam Tripathi, Esq.",
  description:
    "Discover the essentials of angel investors: what they offer, key features, and how the investment process works.",
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
      <AngelInvestor />
    </>
  );
};

export default page;
