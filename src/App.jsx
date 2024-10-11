import React from 'react'
import Navbar from './comps/Navbar';
import HeroSection from './comps/HeroSection';
import FeatureSection from './comps/FeatureSection';
import Workflow from './comps/Workflow';
import Pricing from './comps/Pricing';
import Testimonials from './comps/Testimonials';
import Footer from './comps/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
    </div>
    </>
  )
}

export default App;