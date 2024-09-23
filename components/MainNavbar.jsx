'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { LuUser2 } from 'react-icons/lu';
import { IoCall } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import PrimaryButton from './shared/PrimaryButton';
import { SITECONFIG } from '@/config/site';

const orbitron = Orbitron({ subsets: ['latin'] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 py-4 z-50 ${navbarColor || pathname !== '/' ? '!bg-black shadow-small duration-1000' : 'bg-transparent'}`}
    >
      <div className='container hidden md:block'>
        <div className='flex items-center justify-between'>
          <Link href='/' passHref>
            <Image
              width={350}
              height={230}
              src={'/assets/site-logo/triplaw-logo-footer.png'}
              alt='Trip Law'
              className='object-cover cursor-pointer !max-w-[170px]'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 170px'
            />
          </Link>
          <div className='flex items-center justify-end gap-x-8'>
            {SITECONFIG?.mainNav?.map((el) => (
              <Link
                key={el.slug}
                href={el.slug}
                className={`nav-item text-md md:text-[18px] font-semibold text-white ${pathname === el.slug ? '!text-primary border-b-2 border-primary' : ''} hover:text-primary`}
              >
                {el.title}
              </Link>
            ))}
          </div>
          <div className='flex items-center'>
            <PrimaryButton
              title={'Contact Us'}
              link={'/'}
              style={'bg-primary text-white'}
              radius={'sm'}
            />
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className={`!mx-0 !px-0 pb-2 pt-3 fixed top-0 transition-colors duration-300 ${navbarColor || pathname !== '/' ? '!bg-black shadow-small' : 'bg-inherit'}`}
        >
          <NavbarContent>
            <NavbarBrand>
              <Link href='/' passHref>
                <Image
                  width={350}
                  height={230}
                  src={'/assets/site-logo/triplaw-logo-footer.png'}
                  alt='Trip Law'
                  className='object-cover cursor-pointer !max-w-[170px]'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 170px'
                />
              </Link>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className='text-white md:hidden'
            />
          </NavbarContent>

          <NavbarMenu className='overflow-hidden'>
            {SITECONFIG?.mainNav?.map((el, index) => (
              <NavbarMenuItem key={el.slug} className='flex flex-row'>
                <Link
                  className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? '!text-primary' : ''} ${index === 0 ? 'mt-6' : ''}`}
                  href={el.slug}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {el.title}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
