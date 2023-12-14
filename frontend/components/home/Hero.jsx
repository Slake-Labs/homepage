import React from 'react';
import ComponentWrapper from '../wrappers/ComponentWrapper';
import Button from '../shared/Button/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='w-full relative min-h-[calc(100vh-55px)] sm:min-h-[calc(100vh-86px)] flex justify-center items-center'>
      <ComponentWrapper style='h-full'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          {/* image --->  */}
          <img
            src='assets/heroImg.svg'
            alt=''
            className='w-[100px] lg:w-[118px] h-[100px] lg:h-[118px] object-fill'
          />
          <p className='text-[70px] font-satoshiB sm:text-[80px] lg:text-[96px] text-white font-bold sm:mt-0 mt-2'>
            Stake ICP
          </p>
          <p className='text-white font-satoshiM text-[40px] sm:text-[60px] lg:text-[72px] font-medium text-center leading-[50px] sm:leading-[75px] lg:leading-[85px]'>
            Earn Voting Rewards with <br /> little to no unlock times
          </p>
          <p className='text-white font-satoshiR text-center leading-[27px] text-[22px] lg:text-[24px] font-normal mt-4'>
            The liquid Staking Platform for the Internet Computer
          </p>
          <Button
            event={() => {
              scrollToTop();
              navigate('/stake');
            }}
            styles='w-[250px] sm:w-[200px] h-[64px] font-satoshiB sm:h-[60px] mt-6 text-[22px] font-bold text-blue-main bg-white'
          >
            Stake Now
          </Button>
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='w-[200px] sm:w-[300px] md:w-[450px] h-[350px] sm:h-[400px] bgGr absolute -left-6 sm:-left-20 -z-10 -top-12 sm:-top-24'></div>
    </div>
  );
};

export default Hero;
