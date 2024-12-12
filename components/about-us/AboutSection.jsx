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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-5">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="flex-1">
              <Image
                src="/assets/about/triplaw.png"
                alt="hardam tripathi"
                width={1000}
                height={600}
                className="w-[500px] h-auto mx-auto"
              />
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="flex-1">
              <h2
                className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-2 text-center md:text-left ${playfair.className}`}
              >
                Hardam Tripathi, Esq.
              </h2>

              <h4 className="text-lg md:text-xl mb-4 text-center md:text-left">
                Your Personal Injury, Immigration & Criminal Attorney
              </h4>
              <p className="mb-2 text-center md:text-left">
                {`Attorney Hardam Tripathi is committed to providing top-notch criminal defense, immigration, and personal injury representation in Milwaukee, Wisconsin. He focuses on criminal law, offering strong defense for clients facing charges like drug offenses, DUI/OWI, domestic violence, theft, assault, and other serious crimes. `}
              </p>
              <p className="mb-2 text-center md:text-left">
                {`He is equally proficient in immigration law, dedicated to Business and Investor-Based Immigration, offering expertise in Treaty-Based Investor Visas (E2), Citizenship by Investment (Golden Visas) tailored for U.S. citizens investing in the European Union, and Employment-Based Visas (EB-2, EB-3, EB-4, EB-5) with a specialization in commercial real estate investments, staffing companies, and franchise ventures.`}
              </p>
              <p className="mb-2 text-center md:text-left">
                {`With a deep understanding of Wisconsin’s criminal code and skilled courtroom advocacy, Tripathi works to protect his client's rights, reduce or dismiss charges, and achieve the best possible outcomes through negotiation or trial.`}
              </p>
              <p className="mb-2 text-center md:text-left">
                {`In addition to criminal defense, Tripathi provides dedicated representation for personal injury victims. He helps clients recover compensation for injuries from car accidents, slip-and-fall incidents, and other types of negligence.`}
              </p>
              <p className="mb-2 text-center md:text-left">
                {`In addition to criminal defense, Tripathi provides dedicated representation for personal injury victims. He helps clients recover compensation for injuries from car accidents, slip-and-fall incidents, and other types of negligence.Before starting his practice, Tripathi worked as a management consultant at a Big Four firm, where he provided risk intelligence and compliance solutions for government and public service clients. This role sharpened his skills in managing complex regulatory systems, which now guide his approach to criminal defense and personal injury cases.`}
              </p>
              <p className="mb-2 text-center md:text-left">
                {`Tripathi also gained experience at small and mid-size Wisconsin law firms, advising clients on regulatory and policy matters. His work with federal and state agencies deepened his understanding of legal regulations and policies. This knowledge, combined with his dedication to client advocacy, helps him create effective legal strategies and guide clients through complex legal challenges.`}
              </p>
            </div>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutSection;
