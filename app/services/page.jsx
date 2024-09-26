import CardMotion from '@/components/motion/CardMotion';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceTabSection from '@/components/services/ServiceTabSection';
import PageHeroSection from '@/components/shared/PageHeroSection';
import SectionLayout from '@/components/shared/SectionLayout';
import { servicesData } from '@/config/data';
import Head from 'next/head';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <Head>
        <title>What Immigration Services Does TripLaw Offer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={`Explore TripLaw's comprehensive immigration services, including visas, green cards, citizenship, and more. Find the right solution for your situation.`}
        />
      </Head>
      <PageHeroSection
        image={'/assets/hero-img/hero-bg.jpg'}
        title={'Services'}
      />
      <SectionLayout bg='bg-white'>
        <ServiceTabSection />
      </SectionLayout>
    </div>
  );
};

export default page;
