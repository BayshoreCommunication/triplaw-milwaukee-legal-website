import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Bitter } from "next/font/google";
import CardMotion from "../motion/CardMotion";

const bitter = Bitter({ subsets: ["latin"] });

const AppointmentSection = () => {
  return (
    <SectionLayout bg="bg-white">
      <CardMotion
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.1,
          },
        }}
        initial={{
          opacity: 0,
          x: -100,
        }}
      >
        <h2
          className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center ${bitter.className}`}
        >
          Appointment
        </h2>
      </CardMotion>
      <CardMotion
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.1,
          },
        }}
        initial={{
          opacity: 0,
          x: 100,
        }}
      >
        <p className="text-lg text-stone-950 text-center">
          Book your appointment with Trip Law, a leading Immigration Law Firm in
          Lakeland, Florida. Led by Attorney Hardam Tripathi, our team provides
          expert legal representation nationwide and internationally. Contact us
          at 675 North Brookfield Road, Suite 102, Brookfield, Wisconsin 53045,
          or call{" "}
          {`+1
          (863) 370-2427`}{" "}
          for personalized assistance.
        </p>
      </CardMotion>
    </SectionLayout>
  );
};

export default AppointmentSection;
