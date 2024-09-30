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
import { Playfair_Display } from "next/font/google";
import PrimaryButton from "@/components/shared/PrimaryButton";

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
      <PageHeroSection
        image={"/assets/hero-img/hero-bg.jpg"}
        title={"Services"}
      />
      <SectionLayout>
        <div className="grid items-start gap-12 mb-10 gird-col-1 sm:grid-cols-3">
          <div className="col-span-2">
            <div className="flex items-center gap-x-3 mb-6">
              <div className="bg-primary p-5 rounded-full">
                <FaPersonFalling className="size-8 text-white" />
              </div>
              <h2
                className={`font-bold text-xl md:text-4xl text-black ${playfair.className}`}
              >
                Cases involving injuries on someone else's property due to
                unsafe conditions.
              </h2>
            </div>
            <p className="mb-2">
              {`If you’ve been injured, whether in an automobile accident or an incident due to someone else’s fault, Florida law provides that you have legal rights and are entitled to be fully compensated for your injury.`}
            </p>
            <p className="mb-2">
              {`It is important that you consult with an attorney as soon as possible after your injury to make sure your rights are protected, and you do not do anything that might jeopardize your case. The attorneys at Carter Injury Law, P.A. stand ready to fight for you if you’ve been injured in a motor vehicle accident, slip and fall, trip and fall, dog bite, or any other incident in which were you were injured due to another’s negligence.`}
            </p>

            <p className="mb-2">
              {`Directly following an injury, you may be contacted by an insurance company. It is important to remember that the insurance company has no duty to look out for your best interests. If you want someone in your corner that has a legal obligation to act in your best interests, you should hire an attorney to deal with the insurance company. When you hire Carter Injury Law, P.A., our attorneys work diligently to maximize your settlement money and ensure the best outcome for your case.`}
            </p>

            <div className="flex justify-center md:justify-start mt-6">
              <PrimaryButton
                title={"Free Consultancy"}
                link={"/about"}
                style={
                  "flex items-center justify-center px-2 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:bg-yellow-400 md:text-lg"
                }
                radius={"sm"}
              />
            </div>
          </div>

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
