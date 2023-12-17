import React from 'react';
import Hero from '../components/home/Hero/Hero';
import HowItWorks from '../components/home/HowItWorks/HowItWorks';
import WhyStakeOnSlake from '../components/home/WhyStakeOnSlake/WhyStakeOnSlake';
import Stats from '../components/home/stats/Stats';

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
