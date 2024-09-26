import { px } from "framer-motion";
import PrimaryButton from "./PrimaryButton";
import SectionLayout from "./SectionLayout";
import { Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });

const CallToAction = () => {
  return (
    <section
      className=" w-full"
      style={{
        backgroundImage: "url('/assets/home/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto", // Adjust height as needed
      }}
    >
      <SectionLayout bg="py-10">
        <div className="w-full lg:max-w-[60%] mx-auto">
          <h2
            className={`text-white font-bold text-3xl md:text-5xl mt-5 mb-4 text-center ${bitter.className}`}
          >
            Get The Justice You Deserve
          </h2>

          <p className="mb-4 text-lg text-center text-gray-200 ">
            At Trip Law, you’re family. We offer open lines of communication to
            foster personal relationships and optimize case outcomes for our
            clients. Every client gets the personal cell phone number of the
            attorney.
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
    </section>
  );
};

export default CallToAction;
