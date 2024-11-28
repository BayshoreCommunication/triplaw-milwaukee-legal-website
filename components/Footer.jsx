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
                  At Milwaukee Legal Pros, we are relentless in protecting your
                  rights. Specializing in personal injury and criminal cases, we
                  deliver powerful results-driven representation with a
                  client-first approach. Trust us to fight for justice and
                  secure the favorable outcomes you deserve. Let us guide you
                  through every legal challenge with confidence and care.
                </p>

                <div className="flex justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/milwaukeelegalpros"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse hover:bg-primary bg-black duration-300  rounded-full p-2"
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
                  </Link>
                  {/* Linkedin */}
                  <Link
                    href="https://www.linkedin.com/company/milwaukeelegalproscriminaldefense"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-black hover:bg-primary duration-300 rounded-full p-2"
                  >
                    <svg
                      class="h-3.5 w-3.5 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clip-rule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </Link>
                  {/* Twitter/x */}
                  <Link
                    href="https://x.com/milwaukelegal"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-black hover:bg-primary duration-300 rounded-full p-2"
                  >
                    <svg
                      class="h-3.5 w-3.5 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </Link>
                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/milwakeelegalpros/"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-black hover:bg-primary duration-300 rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  {/* Youtube */}
                  <Link
                    href="https://www.youtube.com/@miwaukeelegalpros"
                    target="_blank"
                    className="text-[#1B2639] hover:animate-pulse bg-black hover:bg-primary duration-300 rounded-full p-2"
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
                      href="https://maps.app.goo.gl/tvg7Vt6mYsx4HVTu7"
                      className=" hover:underline duration-300"
                      target="_blank"
                    >
                      675 North Brookfield Road, Suite 102, Brookfield,
                      Wisconsin 53045
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
                        +1 (863) 370-2427
                      </Link>
                      {/* <Link
                        href="tel:+18635996735"
                        className="hover:underline duration-300"
                      >
                        (863) 599-6735
                      </Link> */}
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
                      href="mailto:info@milwaukeelegalpros.com
"
                      className="hover:underline duration-300"
                    >
                      info@milwaukeelegalpros.com
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
              <a href="/" className="hover:underline text-primary">
                Milwaukee Legal Pros
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
