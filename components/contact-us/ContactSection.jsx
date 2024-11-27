"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { GoArrowRight } from "react-icons/go";

import { Playfair_Display } from "next/font/google";

import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import GoogleMap from "../shared/GoogleMap";
import SectionLayout from "../shared/SectionLayout";

const playfair = Playfair_Display({ subsets: ["latin"] });

const ContactSection = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    states: "",
    likeToContact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.message) {
      errors.message = "Question is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Validate the form and set errors
    const errors = validate(emailForm);
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      send(
        "service_xtbeufj",
        "template_f066chv",
        emailForm,
        "y7vvdB4gjuQFue5A6"
      )
        .then((response) => {
          setLoading(false); // Stop loading
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              zipCode: "",
              states: "",
              likeToContact: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              zipCode: "",
              states: "",
              likeToContact: "",
              message: "",
            });
            setLoading(false); // Stop loading
          });
        });
    } else {
      setLoading(false); // Stop loading
    }
  };

  console.log("check data value 104", emailForm);

  return (
    <SectionLayout>
      <div className="">
        <div className="grid items-start justify-between grid-cols-1 mt-4 lg:grid-cols-3 md:gap-x-10 gap-x-0">
          <div className="flex flex-col col-span-2 mt-6 md:mt-0">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <p
                className={`text-4xl font-bold text-center md:text-left text-black mb-10 ${playfair.className}`}
              >
                {`Let’s Get In Touch`}
              </p>
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="md:flex items-start gap-x-3">
                  <div className="w-full mb-6">
                    <p className="text-black ">Enter Name</p>
                    <input
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
                      placeholder="Sadit Hasan"
                      required
                      type="text"
                      name="name"
                      value={emailForm.name}
                      onChange={(event) => {
                        setEmailForm({
                          ...emailForm,
                          name: event.target.value,
                        });
                      }}
                    />
                    <span className="text-orange-600">{formErrors.name}</span>
                  </div>

                  <div className="w-full mb-6">
                    <p className="text-black ">Phone</p>
                    <input
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
                      placeholder="+1 408 XXX XXXX"
                      required
                      type="text"
                      name="phone"
                      value={emailForm.phone}
                      onChange={(event) => {
                        setEmailForm({
                          ...emailForm,
                          phone: event.target.value,
                        });
                      }}
                    />
                    <span className="text-orange-600">{formErrors.phone}</span>
                  </div>
                </div>

                <div className="w-full mb-6">
                  <p className="text-black ">Enter Email</p>
                  <input
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
                    placeholder="example@gmail.com"
                    required
                    type="email"
                    name="email"
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                </div>

                <div className="md:flex items-center gap-x-3">
                  <div className="w-full mb-6">
                    <p className="text-black ">US States</p>
                    <input
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
                      placeholder="example@gmail.com"
                      required
                      type="text"
                      name="state"
                      value={emailForm.state}
                      onChange={(event) => {
                        setEmailForm({
                          ...emailForm,
                          state: event.target.value,
                        });
                      }}
                    />
                    <span className="text-orange-600">{formErrors.state}</span>
                  </div>
                  <div className="w-full mb-6">
                    <p className="text-black ">Zip Code</p>
                    <input
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
                      placeholder="example@gmail.com"
                      required
                      type="email"
                      name="zipeCode"
                      value={emailForm.zipeCode}
                      onChange={(event) => {
                        setEmailForm({
                          ...emailForm,
                          zipeCode: event.target.value,
                        });
                      }}
                    />
                    <span className="text-orange-600">
                      {formErrors.zipeCode}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-black ">
                    How Would You Like To Be Contacted?
                  </p>
                  <div>
                    {/* First Checkbox */}
                    <div className="flex items-center mb-4 mt-3">
                      <input
                        type="checkbox"
                        name="likeToContact"
                        value={"Phone"}
                        onChange={(event) => {
                          setEmailForm({
                            ...emailForm,
                            likeToContact: event.target.checked,
                          });
                        }}
                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-full "
                      />
                      <label className="ms-2 text-sm font-medium text-black">
                        Phone
                      </label>
                    </div>

                    {/* Second Checkbox */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="likeToContact"
                        value={"Email"}
                        onChange={(event) => {
                          setEmailForm({
                            ...emailForm,
                            likeToContact: event.target.checked,
                          });
                        }}
                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-full "
                      />
                      <label className="ms-2 text-sm font-medium text-black">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-black ">
                    Brief Description of Your Project
                  </p>
                  <textarea
                    rows={7}
                    id="message"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5 mt-3"
                    placeholder="Write here..."
                    required
                    name="message"
                    value={emailForm.message}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        message: event.target.value,
                      });
                    }}
                  />
                  <span className="text-orange-600">{formErrors.message}</span>
                </div>
                {loading ? (
                  <Button
                    isLoading
                    className="flex items-center justify-center px-2 py-2.5 mb-2 text-sm font-medium text-white border bg-primary  md:text-lg md:px-8 me-0 md:me-6 rounded-md "
                    radius="sm"
                    size="lg"
                  >
                    Sending...
                  </Button>
                ) : (
                  <Button
                    className="flex items-center justify-center px-2 py-2.5 mb-2 text-sm font-medium text-white border  bg-primary md:text-lg md:px-8 me-0 md:me-6 rounded-md "
                    radius="sm"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Send Message{" "}
                    <span>
                      <GoArrowRight className="size-6 text-white" />
                    </span>
                  </Button>
                )}
              </form>
            </ScrollMotionEffect>
          </div>

          <div className="bg-[#181818] p-6 rounded-md gap-y-14">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <h2 className="text-2xl font-semibold text-white py-6 border-b-1 border-gray-400">
                Contact Details
              </h2>
              <ul className="space-y-1 text-white list-none list-inside">
                <li className="py-6 border-gray-600 border-b-1">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <IoLocationSharp className="text-[#BFA46B] size-7" />
                    </span>
                    <h5 className="text-2xl font-semibold text-white">Email</h5>
                  </div>
                  <h5 className="mt-5 text-xl font-normal text-white">
                    info@milwaukeelegalpros.com
                  </h5>
                </li>
                <li className="py-6 border-gray-600 border-b-1">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <FaPhoneAlt className="text-[#BFA46B] size-6" />
                    </span>
                    <h5 className="text-2xl font-semibold text-white">
                      Contact
                    </h5>
                  </div>
                  <h5 className="mt-5 text-xl font-normal text-white">
                    +1 (863) 370-2427
                  </h5>
                </li>
                <li className="py-6 border-gray-600 border-b-1">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <IoLocationSharp className="text-[#BFA46B] size-7" />
                    </span>
                    <h5 className="text-2xl font-semibold text-white">
                      Location
                    </h5>
                  </div>
                  <h5 className="mt-2 text-xl font-normal text-white">
                    675 North Brookfield Road, Suite 102, Brookfield, Wisconsin
                    53045
                  </h5>
                </li>
                <li className="py-6 max-w-[700px] h-[200px]">
                  <GoogleMap />
                </li>
              </ul>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
