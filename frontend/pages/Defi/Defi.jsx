import React, { useState } from 'react';
import ComponentWrapper from '../../components/wrappers/ComponentWrapper';
import './Defi.css';

const Defi = () => {
  const [activeButton, setActiveButton] = useState('stake');
  const [stakeValue, setStakeValue] = useState({
    flag: '',
    stake: '',
    receive: '',
  });

  const handleClick = (buttonType) => {
    setActiveButton(buttonType);
    setStakeValue({ flag: buttonType, stake: '', receive: '' });
  };

  const handleInputChange = (e, field) => {
    setStakeValue({
      ...stakeValue,
      flag: activeButton,
      [field]: e.target.value,
    });
  };

  return (
    <div className='stakeContainer'>
      <ComponentWrapper>
        <div className='defiContainer'>

            <h1 className='defiTitle'>Use Slake Staked ICP in DeFi</h1>
            <p className='defiSubtitle'>
            Earn additional yield on your Slake Staked ICP. <br /> DeFi integrations coming soon.
          </p>
        </div>
      </ComponentWrapper>
      {/* gradients ----------------> */}
      <div className='stakeGr1 bgGr '></div>
    </div>
  );
};

export default Defi;
