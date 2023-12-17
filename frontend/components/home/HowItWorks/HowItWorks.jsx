import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import Step from './Step';
import './HowItWorks.css';
import Step1Img from "/frontend/assets/step1.svg";
import Step2Img from "../../../assets/step2.svg";

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
    des: 'Stake your ICP on Slake and receive transferrable SlakeICP (sICP) tokens which can be used to redeem your underlying ICP staked.',
    isRight: true,
    img: {Step1Img}
  },
  {
    stepNum: '02',
    title: 'Transfer your sICP',
    des: 'Transfer your sICP tokens to other accountsor use in DeFi to earn additional yield.',
    isRight: false,
    img: '/frontend/assets/step2.svg',
  },
  {
    stepNum: '03',
    title: 'Participate in NNSGovernance',
    des: 'Vote on NNS proposals by proxy using Slaketokens. Your voting power is boosted by the amount of ICP you have staked.',
    isRight: true,
    img: '/frontend/assets/step3.svg',
  },
];

export default HowItWorks;
