import React from 'react';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Navbar from '../Navbar/LandingNavbar/Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;