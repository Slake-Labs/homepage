import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import Step from './Step';
import './HowItWorks.css';
import Step1Img from "/frontend/assets/stakeICP.svg";
import Step2 from "/frontend/assets/Step2.svg";
import Step3 from "/frontend/assets/Step3.svg";

const HowItWorks = () => {
  return (
    <div className='howItWorkContainer'>
      <ComponentWrapper>
        <div className='howItWork'>
          <p className='hTitle'>How It Works</p>
          {/* steps ----------------->  */}
          <div className='stepsWrapper'>
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
      <div className='bgGr howGr'></div>
    </div>
  );
};

const steps = [
  {
    stepNum: '01',
    title: 'Stake your ICP',
    des: 'Stake your ICP on Slake and receive transferrable Slake Staked ICP (sICP) tokens which can be used to redeem your underlying ICP staked.',
    isRight: true,
    img: Step1Img
  },
  {
    stepNum: '02',
    title: 'Earn ICP & SLAKE Rewards',
    des: 'Earn ICP staking and voting rewards. Stakers on Slake also receive the Slake governance token.',
    isRight: false,
    img: Step2
  },
  {
    stepNum: '03',
    title: 'Redeem ICP with Flexibility',
    des: 'Your Slake Staked ICP can be redeemed for ICP without lengthy lockups, subject to available liquidity.',
    isRight: true,
    img: Step3
  },
];

export default HowItWorks;
