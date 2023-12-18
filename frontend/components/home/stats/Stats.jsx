import React from 'react';
import ComponentWrapper from '../../wrappers/ComponentWrapper';
import './Stats.css';

const Stats = () => {
  return (
    <div className='stats-container '>
      <ComponentWrapper>
        <div className='stats-wrapper'>
          {stats.map((item, index) => {
            return (
              <div key={index} className='stats-item'>
                <p className='stats-value '>{item.value}</p>
                <p className='stats-name '>{item.name}</p>
              </div>
            );
          })}
        </div>
      </ComponentWrapper>
      {/* gradient for hero section -----------> */}
      <div className='bgGr statsGr'></div>
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
