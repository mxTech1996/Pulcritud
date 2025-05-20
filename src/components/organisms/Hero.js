'use client';

import { dataSite } from '@/data';

const HeroSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10'>
      <h2 className='text-5xl font-extrabold mb-6 tracking-tight'>
        WELCOME TO PULCRITUD
      </h2>
      <div className='grid md:grid-cols-2 gap-6 border border-black'>
        {/* Left image block */}
        <div className='relative border-8 border-[#b93820]'>
          <img
            src={dataSite.image_hero}
            alt='models'
            className='object-cover w-full h-full'
          />
          <div className='absolute bottom-6 right-6'>
            {/* <button className='bg-black text-white text-xs px-5 py-2 rounded-full border border-[#b93820]'>
              READ MORE
            </button> */}
          </div>
        </div>

        {/* Right text block */}
        <div className='flex flex-col justify-center p-6 space-y-6'>
          <div>
            <h3 className='text-4xl font-bold leading-tight mb-2'>
              {dataSite.subtitle}
            </h3>
            <p className='text-gray-600'>{dataSite.description}</p>
          </div>

          {/* Next Post block */}
          <div className='flex items-center space-x-4'>
            <img
              src={dataSite.image_hero2}
              alt='next post'
              className='w-24 h-24 object-cover rounded'
            />
            <div>
              <p className='text-red-600 font-semibold'>
                {dataSite.info[4].title}
              </p>
              <p className='font-semibold'>{dataSite.info[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
