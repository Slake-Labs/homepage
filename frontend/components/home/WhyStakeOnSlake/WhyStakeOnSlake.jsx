import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import * as Icons from '../../../svg/Icons';
import WhyStakeCard from './WhyStakeCard';
import './WhyStake.css';
import { useNavigate } from 'react-router-dom';

const WhyStakeOnSlake = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='stakeContainer'>
      <ComponentWrapper>
        <div className='wrapper'>
          <p className='wTitle'>Why Stake on Slake</p>
          <div className='cardWrapper'>
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
          <div className='btnWr'>
            <button
              onClick={() => {
                scrollToTop();
                navigate('/stake');
              }}
              className='stakeBtn'
            >
              Stake Now
            </button>
          </div>
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='bgGr stakeGr'></div>
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
