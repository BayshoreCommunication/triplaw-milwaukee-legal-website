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
  const servicesDetails =
    allServiceData?.personal_injury_law?.find(
      (service) => service.slug === params.slug
    ) ||
    allServiceData?.criminal_law?.find(
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
            <div className="flex flex-col justify-center md:justify-start mt-6">
              <div className="">{parse(servicesDetails?.description)}</div>
              <div className="flex justify-center mt-12">
                <Link
                  href="/contact"
                  className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-primary text-white rounded-lg hover:bg-[#facc15] duration-300 w-64"
                >
                  Free Consultancy
                  <FaArrowRightLong className="ml-2  size-5" />
                </Link>
              </div>
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
