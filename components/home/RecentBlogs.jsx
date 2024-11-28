import React from "react";
import SectionLayout from "../shared/SectionLayout";
import parse from "html-react-parser";
import { allServiceData } from "@/config/serviceData";
import PrimaryButton from "../shared/PrimaryButton";
import { Playfair_Display } from "next/font/google";
import ServiceCard from "../services/ServiceCard";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import CaseStudiesCard from "../case-studies/CaseStudiesCard";
import GetAllPostData from "@/lib/GetAllPostData";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const playfair = Playfair_Display({ subsets: ["latin"] });

const RecentBlogs = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="mb-6">
      <SectionLayout>
        <div className="flex items-center justify-center md:justify-between">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-stone-950 font-bold text-3xl md:text-5xl mb-4 text-center  ${playfair.className}`}
            >
              Our Latest Blog
            </h2>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="hidden md:block">
              <Link
                href="/blog"
                className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-none  rounded-lg hover:bg-primary duration-300 border-2 border-black hover:border-primary text-black hover:text-white"
              >
                Vew All
                <FaArrowRightLong className="ml-2  size-5" />
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true && no <= 2)
            ?.map((blogs, index) => (
              <ScrollMotionEffect key={index} effect="fade-up" duration="2000">
                <div className="relative flex flex-col items-center justify-between max-w-sm gap-6 p-6 border border-gray-200 rounded-md shadow overflow-hidden group h-full">
                  {/* Smooth background effect from bottom to top */}
                  <div className="absolute inset-0 z-0 bg-black transform scale-y-0 origin-bottom transition-transform duration-700 ease-out group-hover:scale-y-100"></div>

                  {/* Card content stays on top of the effect */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="">
                      <Image
                        width={1000}
                        height={300}
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                        className="w-full h-auto bg-center bg-cover"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-3">
                        {/* <p className=" group-hover:text-white duration-300">
                          Blog
                        </p> */}
                        <p className=" group-hover:text-white duration-300">
                          {postDate(blogs?.createdAt)}
                        </p>
                      </div>
                      <h5
                        className={`mb-2 font-bold tracking-wide text-center text-md md:text-md lg:text-lg xl:text-lg 2xl:text-2xl transition-colors  text-black group-hover:text-white`}
                      >
                        {blogs?.title}
                      </h5>
                      <p
                        className={`font-normal text-center line-clamp-2 transition-colors text-black group-hover:text-white`}
                      >
                        {parse(blogs?.body)}
                      </p>
                      <div className="flex justify-center mt-8">
                        <Link
                          href={`/blog/${blogs.slug}`}
                          className="flex items-center justify-center px-2 py-2 mb-2 text-sm font-normal text-primary rounded-lg border-2 border-primary hover:bg-primary md:text-lg md:px-8 me-3 md:me-6 bg-transparent hover:text-white shadow-none group-hover:border-white group-hover:text-white"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Colored bottom strip */}
                  <div className="absolute bottom-0 left-0 w-full h-3 bg-black rounded-b-md"></div>
                </div>
              </ScrollMotionEffect>
            ))}
        </div>
        {/* <div className="grid items-stretch justify-between grid-cols-1 md:grid-cols-3  gap-6 mt-4 md:mt-10">
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true && no <= 2)
            ?.map((blogs, index) => (
              <ScrollMotionEffect effect="fade-up" duration="2000" kiey={index}>
                <Link
                  href={`/blog/${blogs.slug}`}
                  variants={variants}
                  whileHover={{ scale: 0.99 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                >
                  <div
                    className={`relative flex flex-col items-center max-w-sm gap-6 p-6 border border-gray-200 rounded-md shadow hover:bg-gray-100 group ${index === 1 ? "bg-black" : "bg-white"}`}
                  >
                    <Image
                      width={1000}
                      height={300}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className="w-full h-auto bg-center bg-cover"
                    />
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <p>{postDate(blogs?.category)}</p>
                        <p>{postDate(blogs?.createdAt)}</p>
                      </div>
                      <h5
                        className={`mb-2 font-bold tracking-wide text-center text-md md:text-md lg:text-lg xl:text-lg 2xl:text-2xl ${index === 1 ? "text-white group-hover:text-black" : "text-black group-hover:text-black"}`}
                      >
                        {blogs?.title}
                      </h5>
                      <p
                        className={`font-normal text-center line-clamp-4 ${index === 1 ? "text-white group-hover:text-black" : "text-gray-700 group-hover:text-black"}`}
                      >
                        {parse(blogs?.body)}
                      </p>
                      <div className="flex justify-center mt-8">
                        <Link
                          title={"Read More"}
                          href={`/blog/${blogs.slug}`}
                          className="flex items-center justify-center px-2 py-2 mb-2 text-sm font-normal text-primary rounded-lg border-2 border-primary hover:bg-primary md:text-lg md:px-8 me-3 md:me-6 bg-transparent hover:text-white shadow-none"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    Add a colored bottom strip
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-black rounded-b-md"></div>
                  </div>
                </Link>
              </ScrollMotionEffect>
            ))}
        </div> */}
        {/* <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="flex justify-center mt-10 md:hidden">
            <Link
              href="/blog"
              className="font-medium text-lg px-10 py-2.5 mb-2 flex items-center gap-2 bg-none  rounded-lg hover:bg-primary duration-300 border-2 border-black hover:border-primary text-black hover:text-white"
            >
              Vew All
              <FaArrowRightLong className="ml-2  size-5" />
            </Link>
          </div>
        </ScrollMotionEffect> */}
      </SectionLayout>
    </div>
  );
};

export default RecentBlogs;
