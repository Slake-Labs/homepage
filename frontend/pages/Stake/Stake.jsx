import React, { useState } from 'react';
import ComponentWrapper from '../../components/wrappers/ComponentWrapper';
import { IoWalletOutline } from 'react-icons/io5';
import './Stake.css';

const Stake = () => {
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
        <div className='sContainer'>
          {/* =========== left portion ==========> */}
          <div className='leftPortionCon'>
            <div className='leftPortion'>
              <p className='lTitle'>
                Earn Staking and Voting Rewards on Your ICP
              </p>
              <p className='lDes'>
                Staking on Slake allows you to earn voting rewards without
                lengthy token lockups.
              </p>
              {/* separator --------> */}
              <div className='separator'></div>
              {/* slake statistics ----------> */}
              <div className='statisticsCon'>
                <p className='statTitle'>Slake Statistics</p>
                <div className='stTableCon'>
                  {slakeStatistics.map((item, index) => {
                    return (
                      <div key={index} className='rowCon'>
                        <p className='statRowName'>{item.name}</p>
                        <p className='statRowValue'>{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* ========== right portion ==========> */}
          <div className='rightPorCon'>
            <div className='cardShadow rightPortion'>
              <p className='stakeT'>
                {activeButton === 'stake' ? 'Stake ICP' : 'Unstake ICP'}
              </p>
              <p className='stakeD'>
                {activeButton === 'stake'
                  ? 'Stake ICP and earn voting rewards without locking yp your tokens.'
                  : 'Stop earning staking rewards and withdraw your ICP.'}
              </p>
              {/* stake and unstake button ------>  */}
              <div className='buttonCon'>
                <div
                  className={`buttonSlide ${
                    activeButton === 'stake'
                      ? 'buttonSlideTransformNone'
                      : 'buttonSlideTranslate buttonSlideTranslateSm buttonSlideTranslateMd'
                  }`}
                ></div>
                <button
                  onClick={() => handleClick('stake')}
                  className={`button buttonSm ${
                    activeButton === 'stake'
                      ? 'buttonStakeActive'
                      : 'buttonStakeInactive'
                  }`}
                >
                  Stake
                </button>
                <button
                  onClick={() => handleClick('unstake')}
                  className={`button buttonSm ${
                    activeButton === 'unstake'
                      ? 'buttonUnstakeActive'
                      : 'buttonUnstakeInactive'
                  }`}
                >
                  Unstake
                </button>
              </div>
              {/* stake and unstake ICP Input --------->  */}
              <div className='inputWrap'>
                {/* label --> */}
                <div className='eachIW'>
                  <p className='label'>
                    {activeButton === 'stake' ? 'Stake ICP' : 'Unstake sICP'}
                  </p>
                  <div className='balnW'>
                    <IoWalletOutline className='balIcon' />
                    <p className='balText'>Balance:</p>
                    <p className='balValue'>
                      {activeButton === 'stake' ? '12.75 ICP' : '20.2 sICP'}
                    </p>
                  </div>
                </div>
                {/* input --->  */}
                <input
                  type='number'
                  placeholder='0.0'
                  value={stakeValue.stake}
                  onChange={(e) => handleInputChange(e, 'stake')}
                  className='input inputBg'
                />
              </div>
              {/* recieve ICP Input --------->  */}
              <div className='inputWrap'>
                {/* label --> */}
                <p className='label'>
                  {activeButton === 'stake' ? 'Receive sICP' : 'Receive ICP'}
                </p>

                {/* input --->  */}
                <input
                  type='number'
                  placeholder='0.0'
                  value={stakeValue.receive}
                  onChange={(e) => handleInputChange(e, 'receive')}
                  className='input inputBg'
                />
              </div>
              {/* stake and unstake button ----------->  */}
              <button className='stakeUnButton btnGr'>
                {activeButton === 'stake' ? 'Stake Now' : 'Unstake'}
              </button>
              <div className='netCont'>
                {/* network fee ------------>  */}
                <div className='netWra'>
                  <p className='netTit'>Network Fee:</p>
                  <p className='netVal'>0.0001 ICP</p>
                </div>
                {/* 1CP equal to  ------------>  */}
                <div className='icpWra'>
                  <p className='netTit'>
                    1 {activeButton === 'stake' ? 'ICP' : '1 sICP'} =
                  </p>
                  <p className='netVal'>
                    {activeButton === 'stake' ? ' 00.9785 sICP' : ' 1.1045 ICP'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
      {/* gradients ----------------> */}
      <div className='stakeGr1 bgGr '></div>
      <div className=' bgGr stakeGr2'></div>
      <div className=' bgGr stakeGr3'></div>
    </div>
  );
};

const slakeStatistics = [
  {
    name: 'Staking APR',
    value: '10.58%',
  },
  {
    name: 'Total ICP Staked on Slake',
    value: '120,820',
  },
  {
    name: 'Stakers',
    value: '2490',
  },
  {
    name: 'Neurons',
    value: '24',
  },
  {
    name: 'Combined NNS Voting Power',
    value: '178,289',
  },
];

export default Stake;
