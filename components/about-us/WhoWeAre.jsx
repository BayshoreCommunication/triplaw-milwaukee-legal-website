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
            <div className="flex items-center md:flex-row flex-col-reverse justify-between md:mb-16 mb-6 gap-x-10 gap-y-5">
              <div className="w-[100%] md:max-w-[70%]">
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-6 text-center md:text-left ${playfair.className}`}
                >
                  Who We Are
                </h2>

                <p className="mb-3 text-center md:text-left">
                  {`Hardam Tripathi is an attorney who understands the weight of the human condition. His work spans the worlds of immigration, criminal defense, and personal injury law—not as separate realms, but as interconnected threads of people’s lives. In immigration, he walks with clients through the pathways of business and investor-based options, from Treaty Based Investor Visas (E2), Citizenship by Investment (Golden Visas) for USA Citizens interested in investing in the European Union, and Employment Based (EB-2, 3, 4, 5) Visas focusing on commercial real estate investments, staffing companies, and franchises. When families face barriers, he’s there, guiding them through waivers, adjustments, and the long road to citizenship.`}
                </p>
                <p className="mb-2 text-center md:text-left">
                  {`When it comes to criminal defense, Hardam fights not just to win cases but to restore dignity. He defends his clients with a steadfast resolve, knowing that justice is more than a verdict—it’s the preservation of hope. And in personal injury cases, he stands beside those hurt by the carelessness of others, working to ensure they find both compensation and closure.`}
                </p>
              </div>
              <div className="w-[100%] md:w-[30%] flex text-center justify-center md:justify-end shrink-0">
                <Image
                  src="/assets/about/who-we-are.png"
                  alt="hardam tripathi"
                  width={1000}
                  height={1000}
                  // className="size-[300px] md:size-[400px]"
                />
              </div>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className=" flex items-center flex-col md:flex-row justify-between  gap-x-10 gap-y-5">
              <div className="w-[100%] md:w-[30%] flex text-center justify-center md:justify-start">
                <Image
                  src="/assets/about/our-mission-and-vision.png"
                  alt="hardam tripathi"
                  width={1000}
                  height={1000}
                  // className="size-[300px] md:size-[400px]"
                />
              </div>
              <div className="w-[100%] md:max-w-[70%] shrink-0">
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-6 text-center md:text-left ${playfair.className}`}
                >
                  Our Mission and Vision
                </h2>

                <p className="mb-3 text-center md:text-left">
                  {`At Milwaukee Legal Pros, Hardam Tripathi’s mission is simple yet profound: to stand beside people when they need it most. Whether it’s fighting for immigration rights, defending against criminal charges, or seeking justice for personal injuries, his work is grounded in compassion and a deep respect for the human experience. Hardam believes in more than just legal solutions—he believes in trust, in understanding, and in helping clients find a way forward, no matter how complex the challenge.`}
                </p>
                <p className="mb-2 text-center md:text-left">
                  {`His vision for Milwaukee Legal Pros is equally straightforward. He sees it as a place where justice isn’t just a word, but a practice—a relentless pursuit of fairness and equality. Hardam wants his work to mean something, to give people not just a legal win but a sense of empowerment. In his eyes, the law is not about rules and systems; it’s about people, their stories, and their futures. Through his efforts, he hopes to make the legal world less daunting and more accessible, helping clients move forward with clarity and confidence.`}
                </p>
              </div>
            </div>
          </ScrollMotionEffect>
        </SectionLayout>
      </div>
    </div>
  );
};

export default WhoWeAre;
