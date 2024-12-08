import React from "react";
import Image from "next/image";
import { blogData } from "@/config/data";
import GetAllPostData from "@/lib/GetAllPostData";
import SectionLayout from "@/components/shared/SectionLayout";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import HeroSection from "@/components/blog/BlogHeroSection";
import CardMotion from "@/components/motion/CardMotion";
import Head from "next/head";
import { Playfair_Display } from "next/font/google";
import PrimaryButton from "@/components/shared/PrimaryButton";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title:
    "Florida Immigration Lawyer Firm || USA Immigration Attorney Hardam Tripathi, Esq.",
  description:
    "Florida Immigration Law Services Call our local Immigration office for your Green Card, Naturalization or Investor Visa.",
};

const page = async () => {
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
    <>
      {/* <Head>
        <title>Trip Law Blog - Insights and Updates on Immigration Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Stay informed on the latest immigration news, legal updates, and valuable resources with TripLaw's immigration blog`}
        />
      </Head> */}
      <HeroSection />
      <SectionLayout bg="bg-white">
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h1
            className={`text-stone-950 font-bold text-3xl md:text-5xl text-center mb-10 md:mb-16 ${playfair.className}`}
          >
            Insights and Advice Legal Blog
          </h1>

          <div className="grid items-stretch justify-between grid-cols-1 md:grid-cols-3 gap-6">
            {blogPostData?.data
              ?.filter((pub, no) => pub.published === true)
              ?.map((blogs, index) => (
                <ScrollMotionEffect
                  key={index}
                  effect="fade-up"
                  duration="2000"
                >
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
        </CardMotion>
      </SectionLayout>
    </>
  );
};

export default page;
