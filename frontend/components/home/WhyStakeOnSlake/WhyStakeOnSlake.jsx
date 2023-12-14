import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import * as Icons from '../../../svg/Icons';
import WhyStakeCard from './WhyStakeCard';

const WhyStakeOnSlake = () => {
  return (
    <div className='w-full relative'>
      <ComponentWrapper>
        <div className='w-full flex flex-col gap-5 sm:gap-8 justify-center items-center py-6 sm:py-20'>
          <p className='text-[40px] sm:text-[46px] leading-[55px] md:text-[56px] text-center tracking-wide font-satoshiB text-white'>
            Why Stake on Slake
          </p>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
            {whyTakeOnSlakeData.map((item, index) => {
              return (
                <WhyStakeCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  des={item.des}
                />
              );
            })}
          </div>
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='w-[250px] sm:w-[300px] h-[400px] md:h-[600px] bgGr absolute -right-0 -z-10 -top-56'></div>
    </div>
  );
};

const whyTakeOnSlakeData = [
  {
    icon: <Icons.Earn />,
    title: 'Earn Staking Rewards',
    des: 'Lörem ipsum mist glaskulefolket infranin dänt, kura. Pangen prototal. Inaskad dengen, och nödat. Nöriheten banelig.',
  },
  {
    icon: <Icons.Vote />,
    title: 'Vote on Proposals in NNS',
    des: 'Lörem ipsum mist glaskulefolket infranin dänt, kura. Pangen prototal. Inaskad dengen, och nödat. Nöriheten banelig.',
  },
  {
    icon: <Icons.Reward />,
    title: 'Earn Voting Rewards',
    des: 'Lörem ipsum mist glaskulefolket infranin dänt, kura. Pangen prototal. Inaskad dengen, och nödat. Nöriheten banelig.',
  },
];

export default WhyStakeOnSlake;
