import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SITECONFIG } from "@/config/site";
import SectionLayout from "./shared/SectionLayout";
import { RiPhoneFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="py-3 bg-red-700">
        <div className={` mx-auto flex justify-center items-center w-full `}>
          <p className="container mx-5 text-center text-white text-blacklg-mx-0 md:text-left">
            At Trip Law we set out to create a unique law firm where outstanding
            immigration representation and a deep commitment to humanity go hand
            in hand. Hardam H. Tripathi was a former legal professional in the
            federal government.
          </p>
        </div>
      </div>
      <footer className="bg-secondary">
        <div className="container py-16">
          <div className="md:flex md:justify-center">
            <div className="grid justify-center grid-cols-2 gap-8 sm:gap-6 md:grid-cols-5 ">
              <div className="col-span-2 mx-auto mb-6 md:mb-0 md:mx-0">
                <Link
                  href="https://trip-law.com"
                  className="flex items-center justify-center cursor-pointer md:justify-start"
                >
                  <Image
                    width={320}
                    height={200}
                    src={"/assets/site-logo/triplaw-logo-header.png"}
                    alt="Trip Low"
                    className="object-cover"
                  />
                </Link>
                <p className="py-5 text-[18px] font-normal text-center text-black md:text-left max-w-[450px] leading-8">
                  At Trip Law, we offer dedicated criminal defense and personal
                  injury representation, ensuring justice and advocacy for those
                  in need. Our team works tirelessly to protect clients' rights,
                  providing compassionate support through challenging times. We
                  blend legal expertise with a deep commitment to humanity,
                  delivering exceptional results for every case.
                </p>

                <div className="flex justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
                  <Link
                    href="https://www.facebook.com/TripLawPA"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-primary rounded-full p-2"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/trip_law_/"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-black rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@triplawpa"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-black rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                      className="h-3.5 w-3.5 text-white"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                    <span className="sr-only">Youtube</span>
                  </Link>
                </div>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-black">
                  Quick Links
                </h2>
                <hr className="mt-2 mb-6 w-28 border-primary" />
                <ul className="ml-0 text-black list-none text-[18px] font-medium">
                  {SITECONFIG?.footer?.company?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-black">
                  Legal Areas
                </h2>
                <hr className="w-32 mt-2 mb-6 border-primary" />
                <ul className="ml-0 text-[18px] font-medium text-black list-none">
                  {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="font-semibold text-black text-[22px]">
                  Contact us
                </h2>
                <hr className="w-24 mt-2 mb-6 border-primary" />
                <ul className="ml-0 text-[18px] font-medium text-black list-none">
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-primary" />

                      <h3 className="font-semibold text-black text-[20px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href="https://maps.app.goo.gl/BxuNRwy3CHg2ykCd7"
                      className=" hover:underline duration-300"
                      target="_blank"
                    >
                      231 N. Kentucky Ave. Ste. 213, Lakeland, Florida 33801
                    </Link>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-primary" />

                      <h3 className="font-semibold text-black text-[20px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <Link
                        href="tel:+18635996735"
                        className="hover:underline duration-300"
                      >
                        (863) 599-6735
                      </Link>
                      <Link
                        href="tel:+18635996735"
                        className="hover:underline duration-300"
                      >
                        (863) 599-6735
                      </Link>
                    </div>
                  </li>

                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-primary" />

                      <h3 className="font-semibold text-black text-[20px]">
                        Email
                      </h3>
                    </div>
                    <Link
                      href="mailto:info@trip-law.com"
                      className="hover:underline duration-300"
                    >
                      info@trip-law.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-black sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between">
            <div className="text-[18px] font-medium text-center text-black">
              © 2024{" "}
              <a
                href="https://trip-law.com/"
                className="hover:underline text-primary"
              >
                Trip Law™
              </a>
              . All Rights Reserved.
            </div>
            <div className="text-[18px] font-medium text-center text-primary">
              <p>Mon-Fri: 7:00 am – 7:00pm</p>
            </div>
            <div className="text-[18px] font-medium text-center text-black">
              Design & Developed by{" "}
              <a
                href="https://www.bayshorecommunication.com//"
                target="_blank"
                className="font-medium hover:underline text-primary"
              >
                BayShore Communication
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
