import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import HowItWorks from '../components/home/HowItWorks/HowItWorks';
import WhyStakeOnSlake from '../components/home/WhyStakeOnSlake/WhyStakeOnSlake';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyStakeOnSlake />
    </>
  );
};

export default Home;
