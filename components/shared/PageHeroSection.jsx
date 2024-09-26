import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Link from 'next/link';
import CardMotion from '../motion/CardMotion';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const PageHeroSection = ({ title, subTitle }) => {
  return (
    <>
      <div className='relative w-full bg-black bg-opacity-85'>
        <Image
          src={'/assets/hero-img/hero-bg.jpg'}
          alt={title}
          layout='fill'
          objectFit='cover'
          objectPosition='top center'
          className='z-0'
          priority
        />

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
          <SectionLayout>
            <div className='relative z-10 gap-10 py-20 mt-[50px]'>
              <h1
                className={`text-white font-bold text-5xl text-center mb-6 ${playfair.className}`}
              >
                {title}
              </h1>

              <nav
                className='flex items-center justify-center mt-8 md:mt-1'
                aria-label='Breadcrumb'
              >
                <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
                  <li className='inline-flex items-center'>
                    <Link
                      href='/'
                      className='inline-flex items-center text-lg font-medium text-stone-200 hover:text-primary'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg
                        className='w-3 h-3 mx-1 rtl:rotate-180 text-stone-50'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 6 10'
                      >
                        <path
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='m1 9 4-4-4-4'
                        />
                      </svg>

                      <Link
                        href='#'
                        className='text-lg font-medium text-primary ms-1 md:ms-2'
                      >
                        {subTitle}
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </SectionLayout>
        </CardMotion>
      </div>
    </>
  );
};

export default PageHeroSection;
