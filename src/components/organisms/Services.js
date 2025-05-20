import { useState } from 'react';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

const articles = dataSite.services;

export default function FashionArticlesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id='services' className='w-full border border-black/20'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Header */}
        <div className='flex justify-between items-center border-b border-black/20 pb-4 mb-6'>
          <h2 className='text-4xl font-bold tracking-tight'>Services</h2>
          {/* <button className='flex items-center border border-[#c0392b] text-white bg-[#c0392b] hover:bg-[#e74c3c] text-sm font-semibold px-4 py-2'>
            All Articles
            <span className='ml-2 bg-white text-[#c0392b] rounded-full w-6 h-6 flex items-center justify-center'>
              <FiArrowUpRight />
            </span>
          </button> */}
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {articles.map((article, i) => (
            <div key={i} className='border border-black/20 p-2'>
              <div className='relative aspect-square overflow-hidden'>
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-full object-cover'
                />
                <button
                  onClick={() => toggleDescription(i)}
                  className='absolute top-2 right-2 bg-black text-[#e74c3c] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300'
                >
                  {activeIndex === i ? <FiArrowRight /> : <FiArrowUpRight />}
                </button>
              </div>
              <h3 className='text-lg font-bold mt-4 leading-tight'>
                {article.title}
              </h3>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.p
                    className='text-sm text-gray-700 mt-2'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {article.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
