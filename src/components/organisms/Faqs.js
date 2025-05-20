import { useState } from 'react';
import { FiPlus, FiMinus, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How often should property cleaning be scheduled?',
    answer:
      'We recommend scheduling property cleaning weekly or bi-weekly to maintain hygiene and appearance.',
  },
  {
    question: 'Do you offer eco-friendly cleaning options?',
    answer:
      'Yes, we provide green cleaning solutions that are safe for people, pets, and the environment.',
  },
  {
    question: 'Can you clean commercial properties as well?',
    answer:
      'Absolutely! We specialize in both residential and commercial cleaning services.',
  },
  {
    question: 'What’s included in a deep cleaning service?',
    answer:
      'Deep cleaning includes detailed attention to baseboards, inside appliances, window sills, and more.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='w-full border border-black/20'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-4xl font-bold tracking-tight'>FAQ</h2>
          {/* <button className='flex items-center border border-[#c0392b] text-white bg-[#c0392b] hover:bg-[#e74c3c] text-sm font-semibold px-4 py-2'>
            View All
            <span className='ml-2 bg-white text-[#c0392b] rounded-full w-6 h-6 flex items-center justify-center'>
              <FiArrowUpRight />
            </span>
          </button> */}
        </div>

        <div className='divide-y divide-black/10'>
          {faqs.map((faq, index) => (
            <div key={index} className='py-6'>
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left font-semibold text-xl transition-colors duration-300 ${
                  activeIndex === index ? 'text-[#c0392b]' : 'text-black'
                }`}
              >
                {faq.question}
                <span className='ml-4 text-[#c0392b] text-xl'>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='mt-3 text-gray-600 text-sm'
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
