import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Bitter } from "next/font/google";
import CardMotion from "../motion/CardMotion";
import Link from "next/link";

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
          Schedule your appointment with Milwaukee Legal Pros, experts in
          personal injury and criminal defense based in Brookfield, Wisconsin.
          We are dedicated to delivering exceptional legal representation while
          prioritizing justice and personalized client care. Visit us at 675
          North Brookfield Road, Suite 102, Brookfield, Wisconsin 53045, or call
          us at{" "}
          <Link
            href={""}
            className="hover:text-primary font-semibold duration-300 underline"
          >
            +1 (863) 370-2427
          </Link>{" "}
          to get the support you need.
        </p>
      </CardMotion>
    </SectionLayout>
  );
};

export default AppointmentSection;
