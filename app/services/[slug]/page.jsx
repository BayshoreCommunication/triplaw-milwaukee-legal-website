import React from "react";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import SideServicesCard from "@/components/services/SideServicesCard";
import PageHeroSection from "@/components/shared/PageHeroSection";
import CardMotion from "@/components/motion/CardMotion";
import Head from "next/head";
import { allServiceData } from "@/config/serviceData";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaPersonFalling } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Playfair_Display } from "next/font/google";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { VscDebugBreakpointData } from "react-icons/vsc";

const playfair = Playfair_Display({ subsets: ["latin"] });

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

const page = async ({ params }) => {
  const servicesDetails = allServiceData?.personal_injury_law?.filter(
    (service) => service.slug === params.slug
  );

  return (
    <>
      <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <style>{css}</style>
      <PageHeroSection subTitle={"Services"} title={"Services"} />
      <SectionLayout>
        <div className="grid items-start gap-12 mb-10 gird-col-1 sm:grid-cols-3">
          {/* ---------- */}
          <div className="col-span-2 flex flex-col gap-3 md:gap-6 lg:gap-10">
            <div>
              <h2 className="font-bold text-xl md:text-4xl text-black">
                Drug Charges
              </h2>
              <p className="text-lg md:text-xl">
                Drug charges in the United States cover a wide range of
                offenses, including the illegal possession, distribution,
                manufacture, and trafficking of restricted drugs. These charges
                can vary greatly, depending on federal and state regulations,
                the sort of drug used, and the quantity in question. These
                charges can arise from possessing equipment used for drug
                manufacturing or consumption. This can lead to fines and
                imprisonment.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <h4 className="font-bold text-lg md:text-2xl text-black mb-2">
                  Who Will Benefit From This Service?
                </h4>
                <p className="text-lg md:text-xl">
                  Anyone involved in a drug-related case should have legal
                  representation to ensure their rights. The following can
                  utilize the service:
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    Individuals charged with possessing illegal substances
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    Those accused of trafficking or distributing drugs
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl ">
                    If any first-time offender wants to mitigate the
                    consequences of their charge by enrolling in treatment
                    programs or community service.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                Problems You Will Face
              </h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    Depending on the severity of the act, this can lead to
                    varying degrees of charges, from misdemeanors to felonies.
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    If minors are involved in drug offenses, it can lead to
                    enhanced penalties
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl ">
                    A drug conviction can severely hinder future employment
                    opportunities and housing facilities
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    Some may face probation or mandatory participation in
                    treatment programs.
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    Drug charges can complicate family law matters, particularly
                    in custody cases.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                How Milwaukee Legal Pros can help you?
              </h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    Our lawyers are expert at negotiating with prosecutors to
                    reduce charges or penalties
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    We also deal effectively with insurance companies to
                    minimize the financial impact.
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl ">
                    We meticulously identify weaknesses in the prosecution's
                    evidence, whether it's the legality of the traffic stop,
                    accuracy of sobriety tests, or procedural errors.
                  </p>
                </div>
                <div className="flex items-start gap-2 leading-3">
                  <VscDebugBreakpointData className="mt-1 text-2xl text-primary shrink-0" />
                  <p className="text-lg md:text-xl">
                    We provide the right legal representation in both DMV
                    hearings and criminal court, fighting to protect your
                    license and limit the long-term consequences of a OWI
                    conviction.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg md:text-xl">
                Anyone facing OWI charges, whether a first-time offender or
                someone with prior convictions can significantly benefit from
                the expertise and advocacy of our qualified attorneys. So,
                contact us today for a consultation.
              </p>
            </div>

            <div className="flex justify-center md:justify-start mt-6">
              <Link
                href="/contact"
                className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-primary text-white rounded-lg hover:bg-[#facc15] duration-300"
              >
                Free Consultancy
                <FaArrowRightLong className="ml-2  size-5" />
              </Link>
            </div>
          </div>
          {/* ---------- */}

          <div className="h-[100%] md:h-[1200px] overflow-y-scroll overflow-x-hidden hidden md:block w-full bg-black p-6 rounded-md">
            <h2 className="font-medium text-4xl text-white border-b-2 border-white pb-4 mb-6">
              Practice Areas
            </h2>
            {allServiceData?.personal_injury_law?.map((el, index) => (
              <SideServicesCard servicesData={el} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
