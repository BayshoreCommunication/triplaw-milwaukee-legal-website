'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout';
import CardMotion from '../motion/CardMotion';
import { Playfair_Display } from 'next/font/google';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BsArrowUpRight } from 'react-icons/bs';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import PrimaryButton from '../shared/PrimaryButton';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const playfair = Playfair_Display({ subsets: ['latin'] });

const CaseStudies = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className='mt-5'>
      <SectionLayout>
        <h2
          className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 text-center mb-10 ${playfair.className}`}
        >
          Legal Solutions for Better World
        </h2>
        <div className='grid items-center justify-between mb-20 md:grid-cols-3 gap-x-10 gap-y-32'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((el, index) => (
            <Link
              href={`/case-studies/${'test'}`}
              key={index}
              className='relative w-full h-[500px] cursor-pointer'
            >
              {/* Background Image */}
              <Image
                src='/assets/case1.jpg'
                alt='Case Studies'
                layout='fill' // This makes the image fill the parent div
                objectFit='cover' // Ensures the image covers the div without stretching
                priority
                className='z-0'
                rel='preload'
              />

              {/* Centered Icon */}
              <div className='absolute inset-0 z-10 flex items-center justify-center'>
                {index === activeItem ? (
                  <div className='flex items-center justify-center p-3 rounded-full bg-primary size-16'>
                    <BsArrowUpRight className='text-white size-6' />
                  </div>
                ) : (
                  ''
                )}
              </div>

              {/* Bottom Title */}
              {index === activeItem ? (
                <div className='absolute -bottom-20 right-0 z-10 p-6 bg-[#000000] rounded-md w-[400px]'>
                  <div className='flex items-center justify-between mb-2 text-white'>
                    <p>Car Accident Case</p>
                    <p>December 19, 2023</p>
                  </div>
                  <h2 className='text-2xl font-semibold text-white line-clamp-1'>
                    A client was rear-ended at a traffic li
                  </h2>
                </div>
              ) : (
                <div className='absolute -bottom-20 right-0 z-10 p-6 bg-[#F6F6F6] rounded-md w-[400px]'>
                  <div className='flex items-center justify-between mb-2'>
                    <p>Car Accident Case</p>
                    <p>December 19, 2023</p>
                  </div>
                  <h2 className='text-2xl font-semibold line-clamp-1'>
                    A client was rear-ended at a traffic li
                  </h2>
                </div>
              )}
            </Link>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default CaseStudies;
