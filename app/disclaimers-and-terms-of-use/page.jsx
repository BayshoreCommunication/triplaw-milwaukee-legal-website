import DisclaimersTermsOfUse from "@/components/disclaimers-and-terms-of-use/privacy-policy/DisclaimersTermsOfUse";
import HeroSection from "@/components/disclaimers-and-terms-of-use/privacy-policy/HeroSection";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Disclaimers - Milwaukee Legal Pros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <HeroSection />
      <DisclaimersTermsOfUse />
    </>
  );
};

export default page;
