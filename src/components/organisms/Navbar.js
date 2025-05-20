'use client';
import { navData } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { FaShoppingBag } from 'react-icons/fa';

export default function DigestHeaderHero() {
  const { products } = useCart();
  return (
    <nav className='border-b border-black/20'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-xl font-bold'>
            Pulc<span className='text-red-600'>ri</span>tud
            <span className='text-red-600'>*</span>
          </h1>
        </div>
        <div className='hidden md:flex space-x-6 text-sm font-medium'>
          {navData.map((item) => (
            <div
              onClick={() => (window.location.href = item.href)}
              className='flex items-center gap-1 cursor-pointer'
              key={item}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3'>
          <button
            onClick={() => (window.location.href = '/my-cart')}
            className='relative'
          >
            <FaShoppingBag className='text-black' />
            <span className='absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center'>
              {products.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
