import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import PrimaryButton from "./PrimaryButton";
import SectionLayout from "./SectionLayout";
import { Playfair_Display } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";

const playfair = Playfair_Display({ subsets: ["latin"] });

const CallToAction = () => {
  return (
    <section
      className=" w-full"
      style={{
        backgroundImage: "url('/assets/home/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <SectionLayout bg="py-10">
          <div className="w-full lg:max-w-[60%] mx-auto">
            <h2
              className={`text-white font-bold text-3xl md:text-5xl mt-5 mb-6 text-center ${playfair.className}`}
            >
              Get The Justice You Deserve
            </h2>

            <p className="mb-4 text-lg text-center text-gray-200 font-light ">
              Milwaukee Legal Pros is here to fight for you with expertise,
              compassion, and dedication. Your case gets our full attention, and
              we’re committed to protecting your rights every step of the way.
              Let’s talk—schedule a consultation today.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="flex justify-center m-6">
              <Link
                href="/appointment"
                className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-primary text-white rounded-lg hover:bg-[#facc15] duration-300"
              >
                Free Consultation
                <FaArrowRightLong className="ml-2  size-5" />
              </Link>
            </div>
          </div>
        </SectionLayout>
      </ScrollMotionEffect>
    </section>
  );
};

export default CallToAction;
