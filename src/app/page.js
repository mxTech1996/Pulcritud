'use client';

import FAQSection from '@/components/organisms/Faqs';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import OurHistorySection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import ProductGrid from '@/components/organisms/Products';
import FashionArticlesSection from '@/components/organisms/Services';
import TestimonialCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FashionArticlesSection />
      <OurHistorySection />
      <FAQSection />
      <ProductGrid />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
}
