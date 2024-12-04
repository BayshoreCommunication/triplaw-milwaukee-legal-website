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
    ) ||
    allServiceData?.immigration?.find(
      (service) => service.slug === params.slug
    );

  const servicesDetaAll = (allServiceData?.personal_injury_law || [])
    .concat(allServiceData?.criminal_law || [])
    .concat(allServiceData?.immigration || []);

  //console.log(servicesDetails);

  return (
    <>
      <Head>
        <title>{servicesDetails?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <style>{css}</style>
      <PageHeroSection subTitle={"Services"} title={servicesDetails?.title} />
      <SectionLayout>
        <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
          {/* ---------- */}
          <div className="col-span-2 flex flex-col gap-3 md:gap-6 lg:gap-10">
            <div className="flex flex-col justify-center md:justify-start ">
              <div className="">{parse(servicesDetails?.description)}</div>
              {/* <div className="col-span-2 flex flex-col gap-3 md:gap-6 lg:gap-8">
                <div>
                  <img
                    src="/assets/services/immigration/-.jpg"
                    alt="EB-1 Visa"
                    className="w-full  mb-10"
                  />

                  <p className="text-lg md:text-xl mb-6">
                    Do you excel in your field and aspire to share your
                    extraordinary skills and talent with the United States? The
                    EB-1 visa program is designed for individuals at the top of
                    their profession, offering a prestigious pathway to
                    permanent residency. At Trip Law, we’re here to make your
                    EB-1 visa journey straightforward and successful, providing
                    expert guidance every step of the way.
                  </p>

                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    Who Is This Service For
                  </h4>

                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      Individuals with extraordinary abilities in the sciences,
                      arts, education, business, or athletics.
                    </li>

                    <li className="text-lg md:text-xl">
                      Professionals who have achieved national or international
                      recognition for their exceptional contributions.
                    </li>

                    <li className="text-lg md:text-xl">
                      Researchers, professors, or executives meeting the
                      specific eligibility criteria for the EB-1 categories:
                      <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-lg md:text-xl">
                          EB-1A: Individuals with extraordinary ability.
                        </li>
                        <li className="text-lg md:text-xl">
                          EB-1B: Outstanding professors and researchers.
                        </li>
                        <li className="text-lg md:text-xl">
                          EB-1C: Multinational executives or managers.
                        </li>
                      </ul>
                    </li>

                    <li className="text-lg md:text-xl">
                      Those seeking permanent residency in the U.S. to continue
                      their impactful work and enrich the nation.
                    </li>
                    <li className="text-lg md:text-xl">
                      Applicants face challenges in navigating the complex EB-1
                      application process and eligibility requirements.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    Problems You'll Face Without Legal Guidance
                  </h4>

                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      Understanding and meeting the rigorous standards of
                      "extraordinary ability" required for the EB-1 visa.
                    </li>

                    <li className="text-lg md:text-xl">
                      Identifying and presenting compelling evidence to
                      demonstrate sustained contributions and impact.
                    </li>

                    <li className="text-lg md:text-xl">
                      Navigating the nuances of the three distinct EB-1
                      categories and their specific requirements.
                    </li>

                    <li className="text-lg md:text-xl">
                      Compiling and ensuring the accuracy and completeness of
                      supporting documentation.
                    </li>
                    <li className="text-lg md:text-xl">
                      Effectively communicating the significance of your work
                      and the lasting value you bring to the U.S.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    Why Choose Milwaukee Legal Pros
                  </h4>

                  <p className="text-lg md:text-xl mb-4">
                    We recognize the transformative potential of individuals
                    with extraordinary abilities and the value they add to the
                    United States. Here’s how we’ll support your EB-1 visa
                    application:
                  </p>

                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      <strong>Eligibility Assessment: </strong>
                      We’ll review your qualifications and achievements to
                      determine the appropriate EB-1 category for you:
                      <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-lg md:text-xl">
                          EB-1A for individuals with extraordinary ability.
                        </li>
                        <li className="text-lg md:text-xl">
                          EB-1B for distinguished professors and researchers.
                        </li>
                        <li className="text-lg md:text-xl">
                          EB-1C for executives or managers of multinational
                          companies.
                        </li>
                      </ul>
                    </li>
                    <li className="text-lg md:text-xl">
                      <strong>Evidence Compilation: </strong>
                      We’ll help gather and organize documentation showcasing
                      your exceptional contributions, such as awards,
                      publications, or industry leadership.
                    </li>
                    <li className="text-lg md:text-xl">
                      <strong>Immigrant Petition Filing: </strong>
                      We’ll prepare and file the Form I-140 (Immigrant Petition
                      for Alien Worker) to initiate the application process.
                    </li>
                    <li className="text-lg md:text-xl">
                      <strong>Special Opinions: </strong> For EB-1A cases, we’ll
                      secure advisory opinions if necessary to strengthen your
                      application.
                    </li>
                    <li className="text-lg md:text-xl">
                      <strong>Compliance Monitoring: </strong> We’ll keep you
                      informed about any changes in visa regulations, timelines,
                      or legal developments to ensure your application is always
                      on track.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg md:text-xl mb-6">
                    Schedule a consultation today to discuss your EB-1 visa
                    options. Discover how we can help you unlock the fast track
                    to permanent residency and leave a lasting legacy in the
                    United States.
                  </p>
                </div>
              </div> */}

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
