"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Playfair_Display } from "next/font/google";

import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

const ClientTestimonials = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <SectionLayout>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-5xl mb-8 text-center ${playfair.className}`}
          >
            Our Client Testimonials
          </h2>
          <div className="mx-16">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={Pagination} // Enable Pagination module
              className="flex"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              className="flex"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8]?.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl p-6 h-full flex flex-col justify-end">
                    <div className="flex items-start gap-x-3">
                      <hr className="w-px  bg-primary border-primary border-1 h-[120px]" />
                      <div className="">
                        <h3 className="font-normal text-xl text-black">
                          Have the third divide foreign bring give void rise
                          you'll grass ton fowl fourth-morning gathering main
                          also an evening where intro the yielding spirit called
                          to be formed grass face into beggar you is.
                        </h3>
                        <p className="text-black font-light mt-2">
                          August 7, 2024
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-x-3">
                        <Image
                          src="/assets/home/Ellipse.png"
                          alt="experienced-icon"
                          width={95}
                          height={95}
                          className="rounded-full size-20"
                        />
                        <div className="">
                          <h3 className="font-semibold text-2xl text-black">
                            Jack Bailey
                          </h3>
                          <p className="text-black ">Senior Lawyer</p>
                        </div>
                      </div>
                      <div className="bg-primary p-5 rounded-full">
                        <RiDoubleQuotesR className="size-6 text-white" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </SectionLayout>
      </ScrollMotionEffect>
    </div>
  );
};

export default ClientTestimonials;