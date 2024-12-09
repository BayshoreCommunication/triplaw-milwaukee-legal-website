import React from "react";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import SideServicesCard from "@/components/services/SideServicesCard";
import PageHeroSection from "@/components/shared/PageHeroSection";
import { allServiceData } from "@/config/serviceData";
import { FaArrowRightLong } from "react-icons/fa6";
import { Playfair_Display } from "next/font/google";

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

// generate metadata
export async function generateMetadata({ params }) {
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

  if (!servicesDetails) {
    return {
      title: "Service not found",
      description: "No service post available.",
    };
  }

  // let description = servicesDetails[0];
  // console.log("====================================");
  // console.log("Check Service Data", servicesDetails?.practiceAreasSidebarImage);
  // console.log("====================================");
  return {
    title: servicesDetails?.title,
    description: servicesDetails?.shortDesc,
    openGraph: {
      title: servicesDetails?.title,
      description: servicesDetails?.shortDesc,
      images: [
        {
          url: `/image/${servicesDetails?.practiceAreasSidebarImage}`,
          width: 1200,
          height: 600,
          alt: "Og Image",
        },
      ],
      url: `https://www.milwaukeelegalpros.com/${servicesDetails?.slug}`,
      type: "article",
      site_name: "Milwaukee Legal Pros",
    },
  };
}

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
      <style>{css}</style>
      <PageHeroSection subTitle={"Services"} title={servicesDetails?.title} />
      <SectionLayout>
        <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
          {/* ---------- */}
          <div className="col-span-2 flex flex-col gap-3 md:gap-6 lg:gap-10">
            <div className="flex flex-col justify-center md:justify-start ">
              <div className="">{parse(servicesDetails?.description)}</div>
              {/* ======================== */}
              {/* <div className="col-span-2 flex flex-col gap-3 md:gap-6 lg:gap-8">
                <div>
                  <img
                    src="/assets/services/green-card.jpg"
                    alt="green-card"
                    className="w-full  mb-10"
                  />
                  <p className="text-lg md:text-xl mb-6">
                    Obtaining a Green Card is a significant step toward
                    achieving lawful permanent residency in the United States.
                    This process involves various legal requirements, and each
                    stage demands careful attention. We are committed to guiding
                    you through this process with clarity, professionalism, and
                    a strong focus on your goals. Whether you are applying for
                    the first time or facing challenges with your current
                    application, we are here to assist.
                  </p>

                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    Who Is in Need of This Service?
                  </h4>

                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      Individuals seeking lawful permanent residency in the
                      United States.
                    </li>

                    <li className="text-lg md:text-xl">
                      Family members or employers sponsoring a loved one or
                      employee for a Green Card.
                    </li>

                    <li className="text-lg md:text-xl">
                      People who need help with adjustment of status or consular
                      processing.
                    </li>

                    <li className="text-lg md:text-xl">
                      Those facing issues such as visa backlogs,
                      inadmissibility, or application denials.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    Barriers Standing in Your Way
                  </h4>

                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      Uncertainty about eligibility requirements or suitable
                      Green Card categories.
                    </li>

                    <li className="text-lg md:text-xl">
                      Errors or omissions in forms, leading to delays or
                      rejections.
                    </li>

                    <li className="text-lg md:text-xl">
                      Managing requests for additional evidence or interviews
                      with immigration officers.
                    </li>

                    <li className="text-lg md:text-xl">
                      Addressing potential barriers like visa availability or
                      inadmissibility.
                    </li>
                    <li className="text-lg md:text-xl">
                      Misunderstanding the timelines and procedures for
                      adjustment of status or consular processing.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg md:text-2xl text-black mb-4">
                    How Milwaukee Legal Pros Can Guide You Through Green Card
                  </h4>
                  <p className="text-lg md:text-xl mb-6">
                    We understand the challenges you face in obtaining a Green
                    Card. Here is the approach we can take to address your
                    concerns:
                  </p>
                  <ul className="flex flex-col gap-2 list-disc pl-5">
                    <li className="text-lg md:text-xl">
                      We will assess your situation and identify the most
                      suitable Green Card category based on Wisconsin
                      immigration law.
                    </li>
                    <li className="text-lg md:text-xl">
                      We will review and accurately complete your forms to
                      prevent mistakes, ensuring timely processing, and avoiding
                      rejections.
                    </li>
                    <li className="text-lg md:text-xl">
                      We will guide you through any requests for additional
                      evidence and prepare you for interviews with immigration
                      officers.
                    </li>
                    <li className="text-lg md:text-xl">
                      We will address potential barriers like visa backlogs or
                      inadmissibility, exploring all available solutions to move
                      your case forward.
                    </li>
                    <li className="text-lg md:text-xl">
                      We will help you understand the specific timelines and
                      steps for adjusting your status or applying through
                      consular processing.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg md:text-xl">
                    You do not have to go through the Green Card process alone.
                    Schedule a consultation with us today to discuss your case.
                    Let us guide you toward achieving your immigration goals.
                  </p>
                </div>
              </div> */}
              {/* ======================== */}
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
