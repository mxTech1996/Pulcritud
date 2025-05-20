import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { FiShoppingBag } from 'react-icons/fi';

const products = dataSite.products;

export default function ProductGrid() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='w-full max-w-7xl mx-auto px-4 py-12'>
      <h2 className='text-4xl font-bold mb-8'>More Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product, index) => {
          const isInCart = validateProductInCart(product.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(product.id);
          };
          return (
            <div key={index} className='relative group'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-[320px] object-cover'
              />
              <div className='absolute bottom-4 left-4'>
                <h3 className='text-lg font-bold text-[#c0392b]'>
                  {product.name}
                </h3>
                <p className='text-lg font-medium text-black'>
                  $ {product.price}
                </p>
              </div>
              <button
                onClick={handleClick}
                className={`absolute top-4 right-4 w-12 h-12 bg-[#c0392b] text-white rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isInCart ? 'transform rotate-45' : ''
                }`}
              >
                <FiShoppingBag size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
