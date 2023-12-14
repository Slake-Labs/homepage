import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import Step from './Step';

const HowItWorks = () => {
  return (
    <div className='w-full relative'>
      <ComponentWrapper>
        <div className='w-full flex flex-col gap-5 sm:gap-8 justify-center items-center sm:py-0 py-6'>
          <p className='text-[40px] sm:text-[46px] md:text-[56px] text-center tracking-wide font-satoshiB text-white'>
            How It Works
          </p>
          {/* steps ----------------->  */}
          <div className='w-full bg-white rounded-[30px] flex px-6 sm:px-10 md:px-16 py-6 sm:py-10 md:py-16 lg:py-24 flex-col sm:gap-0 gap-4'>
            {/* step 1 --------> */}
            {steps.map((item, index) => {
              return (
                <Step
                  key={index}
                  stepNum={item.stepNum}
                  title={item.title}
                  des={item.des}
                  isRight={item.isRight}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='w-[300px] md:w-[400px] h-[550px] bgGr absolute -left-24 -z-10 -top-16'></div>
    </div>
  );
};

const steps = [
  {
    stepNum: '01',
    title: 'Stake your ICP',
    des: 'Stake your ICP on Slake and receive transferrable SlakeICP (sICP) tokens which can be used to redeem your underlying ICP staked.',
    isRight: true,
    img: '/assets/step1.svg',
  },
  {
    stepNum: '02',
    title: 'Transfer your sICP',
    des: 'Transfer your sICP tokens to other accountsor use in DeFi to earn additional yield.',
    isRight: false,
    img: '/assets/step2.svg',
  },
  {
    stepNum: '03',
    title: 'Participate in NNSGovernance',
    des: 'Vote on NNS proposals by proxy using Slaketokens. Your voting power is boosted by the amount of ICP you have staked.',
    isRight: true,
    img: '/assets/step3.svg',
  },
];

export default HowItWorks;
