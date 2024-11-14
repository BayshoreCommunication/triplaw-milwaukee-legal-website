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

  const servicesDetaAll = (allServiceData?.personal_injury_law || []).concat(
    allServiceData?.criminal_law || []
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
              {/* ============================= */}
              {/* <div className="col-span-2 flex flex-col gap-3 md:gap-6 lg:gap-8">
                <div>
                  <div className="text-lg md:text-xl mb-6">
                    In Wisconsin, the definition of “murder” falls under the
                    category of first-degree intentional homicide. This is
                    defined as causing the death of another human being or an
                    unborn child with the intent to kill that person or unborn
                    child. It is one of the most serious crimes under Wisconsin
                    law, specifically Wisconsin Statutes 940.01, 940.02, and
                    940.05. It carries penalties that can include life
                    imprisonment or the death penalty. If you are charged with
                    murder, it is important to have a highly skilled criminal
                    defense lawyer to protect your rights and build a strong
                    defense.
                  </div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    This Service Is For
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      Individuals charged with murder in Wisconsin.
                    </li>
                    <li className="text-lg md:text-xl">
                      Those accused of first-degree, second-degree, or
                      third-degree murder.
                    </li>
                    <li className="text-lg md:text-xl">
                      People facing felony murder charges related to other
                      crimes such as arson, robbery, or kidnapping.
                    </li>
                    <li className="text-lg md:text-xl">
                      Anyone needing legal defense for homicide charges,
                      including manslaughter.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    Challenges You Might Face After Being Charged With Murder
                    Case
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      Convictions can lead to life imprisonment or the death
                      penalty.
                    </li>
                    <li className="text-lg md:text-xl">
                      Murder cases involve intricate legal definitions and
                      require a thorough understanding of both state and federal
                      laws.
                    </li>
                    <li className="text-lg md:text-xl">
                      These cases often rely heavily on forensic evidence, which
                      can be complex and require expert analysis.
                    </li>
                    <li className="text-lg md:text-xl">
                      Being charged with murder can severely damage your
                      reputation and impact various aspects of your life,
                      including employment and personal relationships.
                    </li>
                    <li className="text-lg md:text-xl">
                      The stress of facing such serious charges can take a
                      significant toll on your mental and emotional well-being.
                    </li>

                    <li className="text-lg md:text-xl">
                      The prosecution will assign experienced and accomplished
                      detectives and attorneys to ensure a conviction.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    How Milwaukee Legal Experts Help You Overcome Murder Charges
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      We make customized defense plans that challenge the
                      prosecution's case and highlight weaknesses in their
                      evidence.
                    </li>
                    <li className="text-lg md:text-xl">
                      Our thorough investigation covers every detail to build
                      the strongest case possible.
                    </li>
                    <li className="text-lg md:text-xl">
                      We ensure your defense is solid and comprehensive,
                      addressing all legal nuances specific to Wisconsin
                      homicide cases.
                    </li>
                    <li className="text-lg md:text-xl">
                      Our team works with top experts to analyze complex
                      forensic and digital evidence.
                    </li>

                    <li className="text-lg md:text-xl">
                      We scrutinize every aspect of the investigation for
                      constitutional violations, aiming to suppress improperly
                      obtained evidence and protect your rights.
                    </li>

                    <li className="text-lg md:text-xl">
                      We handle your case with the utmost discretion to protect
                      your personal and professional reputation throughout the
                      legal process.
                    </li>

                    <li className="text-lg md:text-xl">
                      Our attorneys can argue reasonable doubt, call key
                      witnesses, and use strategic defenses to give you the best
                      chance of success.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg md:text-xl">
                    Contact us for a free consultation to get the right support
                    based on your unique situation. We are committed to guiding
                    you through the legal process and helping you move forward
                    with your life.
                  </p>
                </div>
              </div> */}

              {/* ============================= */}
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
            {servicesDetaAll?.map((el, index) => (
              <SideServicesCard servicesData={el} key={index} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
