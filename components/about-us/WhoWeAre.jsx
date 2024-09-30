import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import SectionLayout from "../shared/SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

const WhoWeAre = () => {
  return (
    <div>
      <div className="bg-[#F6F6F6]">
        <SectionLayout>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="flex items-center md:flex-row flex-col-reverse justify-between md:mb-16 mb-6">
              <div className="w-[100%] md:w-[70%]">
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-6 text-center md:text-left ${playfair.className}`}
                >
                  Who We Are
                </h2>

                <p className="mb-3 text-center md:text-left">
                  {`   USA Immigration Attorney Hardam Tripathi is a USA Immigration
              and Nationality Law Attorney specializing in Business & Investor
              Based Immigration, specifically in Treaty Based Investor Visas
              (E2), Citizenship by Investment (Golden Visas) for USA Citizens
              interested in investing in the European Union, and Employment
              Based (EB-2, 3, 4, 5) Visas focusing on commercial real estate
              investments, staffing companies, and franchises. Attorney
              Tripathi zealously advocates for his clients with family-based
              immigration matters related to waivers of inadmissibility,
              adjustment of status, citizenship/naturalization, and visa &
              green card services.`}
                </p>
                <p className="mb-2 text-center md:text-left">
                  {`   USA Immigration Attorney Hardam Tripathi is a USA Immigration
              and Nationality Law Attorney specializing in Business & Investor
              Based Immigration, specifically in Treaty Based Investor Visas
              (E2), Citizenship by Investment (Golden Visas) for USA Citizens
              interested in investing in the European Union, and Employment
              Based (EB-2, 3, 4, 5) Visas focusing on commercial real estate
              investments, staffing companies, and franchises. Attorney
              Tripathi zealously advocates for his clients with family-based
              immigration matters related to waivers of inadmissibility,
              adjustment of status, citizenship/naturalization, and visa &
              green card services.`}
                </p>
              </div>
              <div className="w-[100%] md:w-[30%] flex text-center justify-center md:justify-end">
                <Image
                  src="/assets/about/image1.png"
                  alt="hardam tripathi"
                  width={1000}
                  height={1000}
                  className="size-[300px] md:size-[400px]"
                />
              </div>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className=" flex items-center flex-col md:flex-row justify-between">
              <div className="w-[100%] md:w-[30%] flex text-center justify-center md:justify-start">
                <Image
                  src="/assets/about/image1.png"
                  alt="hardam tripathi"
                  width={1000}
                  height={1000}
                  className="size-[300px] md:size-[400px]"
                />
              </div>
              <div className="w-[100%] md:w-[70%]">
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-6 text-center md:text-left ${playfair.className}`}
                >
                  Our Mission and Vision
                </h2>

                <p className="mb-3 text-center md:text-left">
                  {`   USA Immigration Attorney Hardam Tripathi is a USA Immigration
              and Nationality Law Attorney specializing in Business & Investor
              Based Immigration, specifically in Treaty Based Investor Visas
              (E2), Citizenship by Investment (Golden Visas) for USA Citizens
              interested in investing in the European Union, and Employment
              Based (EB-2, 3, 4, 5) Visas focusing on commercial real estate
              investments, staffing companies, and franchises. Attorney
              Tripathi zealously advocates for his clients with family-based
              immigration matters related to waivers of inadmissibility,
              adjustment of status, citizenship/naturalization, and visa &
              green card services.`}
                </p>
                <p className="mb-2 text-center md:text-left">
                  {`   USA Immigration Attorney Hardam Tripathi is a USA Immigration
              and Nationality Law Attorney specializing in Business & Investor
              Based Immigration, specifically in Treaty Based Investor Visas
              (E2), Citizenship by Investment (Golden Visas) for USA Citizens
              interested in investing in the European Union, and Employment
              Based (EB-2, 3, 4, 5) Visas focusing on commercial real estate
              investments, staffing companies, and franchises. Attorney
              Tripathi zealously advocates for his clients with family-based
              immigration matters related to waivers of inadmissibility,
              adjustment of status, citizenship/naturalization, and visa &
              green card services.`}
                </p>
              </div>
            </div>
          </ScrollMotionEffect>
        </SectionLayout>
      </div>
      ;
    </div>
  );
};

export default WhoWeAre;
