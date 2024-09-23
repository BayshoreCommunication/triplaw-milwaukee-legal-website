'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const playfair = Playfair_Display({ subsets: ['latin'] });

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const text = 'Hardam Tripathi, Esq.'.split(' ');

  return (
    <div className='relative mt-[-100px] md:overflow-hidden'>
      <div className='relative h-[750px] md:h-[950px]'>
        <Image
          src='/assets/home/trip-low-hero-bg.jpg'
          alt='home-banner'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10 hidden bg-center md:block'
          rel='preload'
        />

        <Image
          src='/assets/home/trip-low-hero-bg-for-mobile.jpg'
          alt='home-banner'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10 block md:hidden'
          rel='preload'
        />

        <motion.div
          className='absolute inset-0 z-20 flex items-center my-0'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <div className='container '>
            <div className='grid items-center grid-cols-1 md:grid-cols-3 pt-200px'>
              <div className='col-span-2 mt-32'>
                <h1
                  className={`text-[50px] md:text-[90px] font-[800] text-white text-center md:text-left leading-tight tracking-normal ${playfair.className}`}
                >
                  {text.map((word, index) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: index / 10 }}
                      key={index}
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  variants={variants}
                  className='mt-4 text-center text-white text-md md:text-lg md:mt-5 md:text-left'
                >
                  Giving You Advices That Matters. Connecting Families To Their
                  Immigration Dream
                </motion.p>

                <motion.div
                  variants={variants}
                  className='flex justify-center mt-5 md:mt-8 md:justify-start'
                >
                  <Link
                    className='flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-yellow-400 md:text-lg md:px-8 me-3 md:me-6 '
                    href='/appointment'
                  >
                    Free Consultation{' '}
                    <span>
                      <FaArrowRightLong className='ml-2 text-white size-5' />
                    </span>
                  </Link>
                  <Link
                    href={'tel:(863)-599-6735'}
                    className='flex items-center justify-center px-2 py-3 mb-2 text-sm font-medium text-white border rounded-lg border-primary bg-none hover:bg-primary md:text-lg md:px-8 me-0 md:me-6'
                  >
                    (863)-599-6735
                  </Link>
                </motion.div>
              </div>
              <div className='relative mb-[-55%] md:block hidden'>
                <Image
                  src='/assets/home/tripathi.png'
                  alt='about-image'
                  className=''
                  rel='preload'
                  height={400}
                  width={1600}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
