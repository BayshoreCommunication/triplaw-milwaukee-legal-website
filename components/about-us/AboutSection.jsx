import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import { Playfair_Display } from "next/font/google";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <div className="mt-5">
      <SectionLayout>
        <div className=" flex items-start md:flex-row flex-col">
          <div className="flex-1">
            <Image
              src="/assets/about/triplaw.png"
              alt="hardam tripathi"
              width={1000}
              height={600}
              className="w-[500px] h-auto mx-auto"
            />
          </div>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="flex-1">
              <h2
                className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-2 text-start ${playfair.className}`}
              >
                Hardam Tripathi, Esq.
              </h2>

              <h4 className="text-lg md:text-xl mb-4">
                Your Personal Injury & Criminal Attorney
              </h4>
              <p className="mb-2">
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
              <p className="mb-2">
                {`Prior to launching his own law firm, Tripathi served as a management consultant with a Big Four firm, representing clients in matters related to strategic risk intelligence & risk management consulting in the government and public services space. Tripathi has also worked for various other small to mid-size firms in Florida, providing regulatory and policy advice to aid clients effectively navigate Federal and state government programs. Tripathi’s legal education and professional experience with stints at Federal agencies and state government, has served as a catalyst to aid clients understand the regulations, policies, and procedures related to their immigration needs. His knowledge in prior policy application and statutory interpretation, contributes to positive outcomes for clients.`}
              </p>
            </div>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutSection;
