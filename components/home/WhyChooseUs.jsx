import Image from "next/image";
import SectionLayout from "../shared/SectionLayout";
import { Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });

const WhyChooseUs = () => {
  return (
    <SectionLayout bg="bg-white lg:py-12">
      <h2
        className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-2 text-center ${bitter.className}`}
      >
        Why Choose Us
      </h2>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12 mt-3 lg:mt-12">
        <div className="order-1 xl:order-2">
          <Image
            src="/assets/home/scale.png"
            alt="Why Choose Us"
            width={400}
            height={600}
          ></Image>
        </div>
        <div className="flex flex-col gap-5 lg:gap-8 order-2 xl:order-1">
          <div className="flex flex-col md:flex-row xl:flex-row-reverse gap-5 items-center">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center  md:text-start xl:text-end">
              <h4 className="text-2xl font-semibold mb-2">
                Expert Legal Advice
              </h4>
              <p className="text-lg text-gray-600">
                legal guidance, ensuring informed decisions and understanding of
                complex legal issues.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-row-reverse gap-5 items-center">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0 ">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start xl:text-end">
              <h4 className="text-2xl font-semibold mb-2">
                Efficient Case Handling
              </h4>
              <p className="text-lg text-gray-600">
                Handles your legal matters efficiently, leading to quicker and
                more effective resolutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-row-reverse gap-5 items-center">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start xl:text-end">
              <h4 className="text-2xl font-semibold mb-2">Cost-Effective</h4>
              <p className="text-lg text-gray-600">
                Offers flexible fee structures, providing cost-effective legal
                solutions compared to larger firms.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-row-reverse gap-5 items-center">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start xl:text-end">
              <h4 className="text-2xl font-semibold mb-2">
                Accessible and Responsive
              </h4>
              <p className="text-lg text-gray-600">
                More accessible and responsive, addressing your concerns and
                questions promptly and effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-8 order-3 xl:order-3">
          <div className="flex flex-col md:flex-row gap-5 items-center h-auto">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start">
              <h4 className="text-2xl font-semibold mb-2">
                Personalized Attention
              </h4>
              <p className="text-lg text-gray-600">
                Offers dedicated focus on your case, understanding unique
                circumstances and goals for
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center h-auto">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start">
              <h4 className="text-2xl font-semibold mb-2">
                Confidentiality and Trust
              </h4>
              <p className="text-lg text-gray-600">
                Ensures sensitive information is managed with the highest level
                of confidentiality and trust.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center h-auto">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start">
              <h4 className="text-2xl font-semibold mb-2">
                Proactive Legal Planning{" "}
              </h4>
              <p className="text-lg text-gray-600">
                Helps with proactive planning like estate planning and contract
                reviews to prevent future legal
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center h-auto">
            <div className="inline-blog rounded overflow-hidden flex-shrink-0">
              <Image
                src="/assets/home/experienced-icon.png"
                alt="experienced-icon"
                width={95}
                height={95}
              ></Image>
            </div>
            <div className="text-center md:text-start">
              <h4 className="text-2xl font-semibold mb-2">
                Comprehensive Legal Services
              </h4>
              <p className="text-lg text-gray-600">
                Provides a wide range of legal services, from litigation to
                negotiation, for complete support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default WhyChooseUs;
