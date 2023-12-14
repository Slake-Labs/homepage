import React from 'react';
import ComponentWrapper from '../wrappers/ComponentWrapper';

const Stats = () => {
  return (
    <div className='w-full relative'>
      <ComponentWrapper>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-8 -mt-8 pt-6 sm:pt-12 pb-6 md:pb-24'>
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full flex flex-col justify-center items-center gap-0 md:gap-2'
              >
                <p className='text-[50px] lg:text-[56px] text-white font-satoshiBlack'>
                  {item.value}
                </p>
                <p className='text-white font-satoshiM text-[22px] lg:text-[24px]'>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='w-[200px] sm:w-[300px] md:w-[300px] h-[300px] sm:h-[500px] bgGr absolute right-0 -z-10 -top-36 sm:-top-40'></div>
    </div>
  );
};

const stats = [
  {
    value: '12.29%',
    name: 'Staking APY',
  },
  {
    value: '23.5M',
    name: 'Total ICP Value Locked',
  },
  {
    value: '7,250',
    name: 'Stakers',
  },
];

export default Stats;
