import Image from "next/image";
import SectionLayout from "../shared/SectionLayout";
import { Playfair_Display } from "next/font/google";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

const FeatureBlock = ({ title, description, imgSrc, reverse = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "xl:flex-row-reverse" : ""
      } gap-5 items-center`}
    >
      <div className="inline-block rounded overflow-hidden flex-shrink-0">
        <Image
          src={imgSrc}
          alt={`${title} icon`}
          width={95}
          height={95}
          className="size-20"
        />
      </div>
      <div className="text-center md:text-start xl:text-end">
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <SectionLayout bg="bg-white lg:py-8">
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-bold text-3xl md:text-5xl mb-8 text-center ${playfair.className}`}
        >
          Why Choose Us
        </h2>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 mt-3 lg:mt-12">
          <div className="order-1 xl:order-2">
            <Image
              src="/assets/home/scale.png"
              alt="Why Choose Us"
              width={400}
              height={600}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-y-10 lg:gap-8 order-2 xl:order-1">
            <FeatureBlock
              title="Expert Legal Advice"
              description="Legal guidance, ensuring informed decisions and understanding of complex legal issues."
              imgSrc="/assets/home/experienced-icon.png"
              reverse
            />
            <FeatureBlock
              title="Efficient Case Handling"
              description="Handles your legal matters efficiently, leading to quicker and more effective resolutions."
              imgSrc="/assets/home/experienced-icon.png"
              reverse
            />
            <FeatureBlock
              title="Cost-Effective"
              description="Offers flexible fee structures, providing cost-effective legal solutions compared to larger firms."
              imgSrc="/assets/home/experienced-icon.png"
              reverse
            />
            <FeatureBlock
              title="Accessible and Responsive"
              description="More accessible and responsive, addressing your concerns and questions promptly and effectively."
              imgSrc="/assets/home/experienced-icon.png"
              reverse
            />
          </div>

          {/* Bottom Column */}
          <div className="flex flex-col gap-5 lg:gap-8 order-3 xl:order-3">
            <FeatureBlock
              title="Personalized Attention"
              description="Offers dedicated focus on your case, understanding unique circumstances and goals."
              imgSrc="/assets/home/experienced-icon.png"
            />
            <FeatureBlock
              title="Confidentiality and Trust"
              description="Ensures sensitive information is managed with the highest level of confidentiality and trust."
              imgSrc="/assets/home/experienced-icon.png"
            />
            <FeatureBlock
              title="Proactive Legal Planning"
              description="Helps with proactive planning like estate planning and contract reviews to prevent future legal issues."
              imgSrc="/assets/home/experienced-icon.png"
            />
            <FeatureBlock
              title="Comprehensive Legal Services"
              description="Provides a wide range of legal services, from litigation to negotiation, for complete support."
              imgSrc="/assets/home/experienced-icon.png"
            />
          </div>
        </div>
      </ScrollMotionEffect>
    </SectionLayout>
  );
};

export default WhyChooseUs;
