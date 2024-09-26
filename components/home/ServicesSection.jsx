import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Bitter } from 'next/font/google';
import PrimaryButton from '../shared/PrimaryButton';
import { allServiceData } from '@/config/serviceData';

const bitter = Bitter({ subsets: ['latin'] });

function ServicesSection() {
  return (
    <div className=''>
      <SectionLayout>
        <div className="w-full lg:max-w-[60%] mx-auto">
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center ${bitter.className}`}
          >
            Our Services
          </h2>

<<<<<<< HEAD
          <p className='mb-4 text-lg text-center text-stone-950 md:text-left'>
=======
          <p className="mb-4 text-lg text-center text-stone-950 ">
>>>>>>> 25ee2632f5f74dba92e79fddccb66d8d676c4f70
            Are you married to a USAn the United States? Obtaining a green card
            through marriage can be a complex and emotionally charged process.
            We understand the challenges you face and are dedicated to providing
            comprehensive legal guidance throughout your journey.
          </p>
        </div>

        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {allServiceData.personal_injury_law
              .slice(0, 3)
              .map((service, index) => (
<<<<<<< HEAD
                <div key={index} className='service-item'>
                  <div className='p-4 rounded-full bg-[#D5AD45] inline-block'>
=======
                <div key={index} className="text-center">
                  <div className="p-4 rounded-full bg-[#D5AD45] inline-block mx-auto">
>>>>>>> 25ee2632f5f74dba92e79fddccb66d8d676c4f70
                    <img
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="inline-block mx-auto">
                    <PrimaryButton
                      title={"READ MORE"}
                      link={"/"}
                      style={
                        "flex items-center justify-center px-2 py-2  text-sm font-medium border border-primary text-primary rounded-lg bg-transparent  md:text-lg md:px-8  "
                      }
                      radius={"sm"}
                      icon_style={"text-primary"}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.criminal_law.slice(0, 3).map((service, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-full bg-[#D5AD45] inline-block mx-auto">
                  <img
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="inline-block mx-auto">
                  <PrimaryButton
                    title={'READ MORE'}
                    link={'/'}
                    style={
                      'flex items-center justify-center px-2 py-2  text-sm font-medium border border-primary text-primary rounded-lg bg-transparent  md:text-lg md:px-8  '
                    }
                    radius={'sm'}
                    icon_style={'text-primary'}
                  />
                </div>
<<<<<<< HEAD
              ))}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {allServiceData?.criminal_law.slice(0, 3).map((service, index) => (
              <div key={index} className='text-ce'>
                <div className='p-4 rounded-full bg-[#D5AD45] inline-block'>
                  <img
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <PrimaryButton
                  title={'READ MORE'}
                  link={'/'}
                  style={
                    'flex items-center justify-center px-2 py-2  text-sm font-medium border border-primary !text-primary rounded-lg bg-transparent  md:text-lg md:px-8  '
                  }
                  radius={'sm'}
                />
=======
>>>>>>> 25ee2632f5f74dba92e79fddccb66d8d676c4f70
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}

export default ServicesSection;
