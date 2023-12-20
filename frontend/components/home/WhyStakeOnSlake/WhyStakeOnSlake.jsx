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
    des: 'Earn yield on your ICP holdings without selling or locking',
  },
  {
    icon: <Icons.Reward />,
    title: 'Earn Slake Tokens',
    des: 'Earn additional Slake tokens simply by holding sICP. Stake more ICP and hold longer to increase your Slake earnings.',
  },
  {
    icon: <Icons.Vote />,
    title: 'Vote on Proposals in SNS',
    des: 'Slake is the governance token of the Slake SNS. Thus, you earn voting power simply by staking on Slake.',
  },
];

export default WhyStakeOnSlake;
