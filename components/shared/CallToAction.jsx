import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import PrimaryButton from "./PrimaryButton";
import SectionLayout from "./SectionLayout";
import { Playfair_Display } from "next/font/google";

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
      <ScrollMotionEffect effect="fade-up" duration="2000" >
        <SectionLayout bg="py-10">
          <div className="w-full lg:max-w-[60%] mx-auto">
            <h2
              className={`text-white font-bold text-3xl md:text-5xl mt-5 mb-6 text-center ${playfair.className}`}
            >
              Get The Justice You Deserve
            </h2>

            <p className="mb-4 text-lg text-center text-gray-200 font-light ">
              At Trip Law, you’re family. We offer open lines of communication
              to foster personal relationships and optimize case outcomes for
              our clients. Every client gets the personal cell phone number of
              the attorney.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <PrimaryButton
              title={"Free Consultancy"}
              link={"/about"}
              style={
                "flex items-center justify-center px-2 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:bg-yellow-400 md:text-lg"
              }
              radius={"sm"}
            />
          </div>
        </SectionLayout>
      </ScrollMotionEffect>
    </section>
  );
};

export default CallToAction;
