// Link not used here; remove NextUI import
import SideServicesCard from "@/components/services/SideServicesCard";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import { allServiceData } from "@/config/serviceData";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { FaPersonFalling } from "react-icons/fa6";

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
      {/* Metadata for App Router should be provided via export const metadata in this file if needed */}
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
                className={`font-bold text-3xl md:text-5xl text-black ${playfair.className}`}
              >
                A client slipped on an unmarked wet floor in a grocery store,
                leading to a fractured hip.
              </h2>
            </div>
            <p className="mb-2">
              {`The firm proved the store’s negligence in maintaining a safe environment, leading to a $200,000 settlement for the client’s medical bills and rehabilitation costs.`}
            </p>

            <Image
              src="/assets/image.jpg"
              alt="tick-box"
              className="py-4"
              width={1200}
              height={1000}
            />
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
