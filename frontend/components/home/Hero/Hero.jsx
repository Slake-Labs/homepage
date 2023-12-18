import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='hero-container'>
      <ComponentWrapper>
        <div className='hero'>
          {/* image --->  */}
          <img src='/frontend/assets/heroImg.svg' alt='' className='hero-image' />
          <p className='hroTitle'>Stake ICP</p>
          <p className='subtitle'>
            Earn Voting Rewards with <br /> little to no unlock times
          </p>
          <p className='tagline'>
            The liquid Staking Platform for the Internet Computer
          </p>
          <button
            onClick={() => {
              scrollToTop();
              navigate('/stake');
            }}
            className='heroBtn'
          >
            Stake Now
          </button>
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='bgGr heroGr'></div>
    </div>
  );
};

export default Hero;
