import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section id='references' className='w-full max-w-5xl mx-auto px-4 py-16'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-3xl font-bold'>Reader Testimonials</h2>
        <div className='flex gap-2'>
          <button
            onClick={prev}
            className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={next}
            className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'
          >
            <FiArrowRight />
          </button>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'
        >
          <p className='text-gray-700 italic mb-4'>
            {testimonials[index].description}
          </p>
          <p className='text-[#c0392b] font-bold mb-2'>
            Rating: {testimonials[index].rating}
          </p>
          <div className='flex items-center gap-3'>
            {/* <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className='w-12 h-12 rounded-full object-cover'
            /> */}
            <p className='font-semibold text-lg'>{testimonials[index].name}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
