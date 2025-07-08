import * as React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ToolsSection from '@/components/home/ToolsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsSection from '@/components/home/NewsSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="animate-fade-in">
        <HeroSection />
        <ToolsSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
