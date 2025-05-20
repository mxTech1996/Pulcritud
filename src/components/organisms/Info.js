import { dataSite } from '@/data';
import { FiArrowUpRight } from 'react-icons/fi';

export default function OurHistorySection() {
  return (
    <section id='know' className='w-full border border-black/20 mt-20'>
      <h1 className='text-5xl font-extrabold mb-6 mt-20 tracking-tight text-center'>
        Know Us
      </h1>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='relative w-full aspect-[16/6] overflow-hidden'>
          {/* Background image (grayscale) */}
          <img
            src={dataSite.image_hero2}
            alt='Our History'
            className='absolute inset-0 w-full h-full object-cover grayscale'
          />

          {/* Overlay box */}
          <div className='relative z-10 bg-white max-w-md p-8 m-8'>
            <h2 className='text-4xl font-bold mb-4'>
              {dataSite.info[2].title}{' '}
            </h2>
            <p className='text-base text-gray-700 mb-6'>
              {dataSite.info[2].description}
            </p>
            {/* <button className='flex items-center bg-[#c0392b] hover:bg-[#e74c3c] text-white text-base font-semibold'>
              <span className='px-6 py-3'>Read More</span>
              <span className='px-4 py-3 bg-white text-[#c0392b]'>
                <FiArrowUpRight />
              </span>
            </button> */}
          </div>
          <div className='z-10 bg-white max-w-md p-8 m-8 absolute top-0 right-0'>
            <h2 className='text-4xl font-bold mb-4'>
              {dataSite.info[3].title}{' '}
            </h2>
            <p className='text-base text-gray-700 mb-6'>
              {dataSite.info[3].description}
            </p>
            {/* <button className='flex items-center bg-[#c0392b] hover:bg-[#e74c3c] text-white text-base font-semibold'>
              <span className='px-6 py-3'>Read More</span>
              <span className='px-4 py-3 bg-white text-[#c0392b]'>
                <FiArrowUpRight />
              </span>
            </button> */}
          </div>
          {/* Optional: dim background slightly */}
          <div className='absolute inset-0 bg-black/10' />
        </div>
      </div>
    </section>
  );
}
