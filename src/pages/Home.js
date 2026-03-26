import React from 'react';
import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
    </div>
  );
};

export default Home;
