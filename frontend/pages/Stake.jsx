import React, { useState } from 'react';
import ComponentWrapper from '../components/wrappers/ComponentWrapper';
import Button from '../components/shared/Button/Button';
import { IoWalletOutline } from 'react-icons/io5';

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
    <div className='w-full relative py-10 sm:py-16 min-h-[calc(100vh-55px)] sm:min-h-[calc(100vh-86px)] flex justify-center items-center'>
      <ComponentWrapper>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center'>
          {/* =========== left portion ==========> */}
          <div className='w-full flex justify-center items-center'>
            <div className='w-full max-w-[600px] h-full flex flex-col items-start'>
              <p className='text-white text-[40px] sm:text-[48px] md:text-[56px] font-satoshiM leading-[50px] sm:leading-[60px] md:leading-[72px]'>
                Earn Staking and Voting Rewards on Your ICP
              </p>
              <p className='text-white font-satoshiR leading-[26px] sm:leading-[30px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mt-4'>
                Staking on Slake allows you to earn voting rewards without
                lengthy token lockups.
              </p>
              {/* separator --------> */}
              <div className='w-full h-[1px] bg-white my-6 sm:my-8 md:my-10'></div>
              {/* slake statistics ----------> */}
              <div className='w-full flex flex-col gap-5 border-[1px] border-white rounded-[24px] px-4 py-4 md:py-8'>
                <p className='text-[26px] sm:text-[32px] md:text-[40px] text-white font-satoshiM'>
                  Slake Statistics
                </p>
                <div className='w-full flex flex-col gap-3 sm:gap-4'>
                  {slakeStatistics.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='w-full flex justify-between items-center'
                      >
                        <p className='text-[18px] sm:text-[20px] font-satoshiM text-white'>
                          {item.name}
                        </p>
                        <p className='text-[18px] sm:text-[20px] font-satoshiM text-white'>
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* ========== right portion ==========> */}
          <div className='w-full flex justify-center items-center'>
            <div className='w-full max-w-[600px] h-full flex flex-col gap-4 sm:gap-6 bg-white cardShadow justify-center items-center rounded-[24px] px-4 sm:px-8 py-6 sm:py-8'>
              <p className='text-black font-satoshiM text-[40px] text-center'>
                {activeButton === 'stake' ? 'Stake ICP' : 'Unstake ICP'}
              </p>
              <p className='w-full max-w-[430px] text-center text-black font-satoshiR text-[20px] sm:text-[24px] leading-[30px] sm:leading-[34px]'>
                {activeButton === 'stake'
                  ? 'Stake ICP and earn voting rewards without locking yp your tokens.'
                  : 'Stop earning staking rewards and withdraw your ICP.'}
              </p>
              {/* stake and unstake button ------>  */}
              <div className='w-full relative grid overflow-hidden grid-cols-2 max-w-[420px] stackBg sm:p-[10px] h-[70px] sm:h-[80px] rounded-[64px]'>
                <div
                  className={`absolute top-2 left-2 bottom-2 w-[50%] h-[80%] bg-blue-main rounded-[64px] transition-transform duration-300 
                  ${
                    activeButton === 'stake'
                      ? 'transform-none'
                      : 'translate-x-[91.8%] sm:translate-x-[92%] md:translate-x-[93%]'
                  }
                  `}
                ></div>
                <button
                  onClick={() => handleClick('stake')}
                  className={`w-full h-full button-transition ${
                    activeButton === 'stake'
                      ? ' text-white z-20'
                      : 'bg-transparent text-black'
                  } text-[18px] sm:text-[20px] rounded-[64px] font-satoshiM`}
                >
                  Stake
                </button>
                <button
                  onClick={() => handleClick('unstake')}
                  className={`w-full h-full button-transition ${
                    activeButton === 'unstake'
                      ? ' text-white z-20'
                      : 'bg-transparent text-black'
                  } text-[18px] sm:text-[20px] rounded-[64px] font-satoshiM`}
                >
                  Unstake
                </button>
              </div>
              {/* stake and unstake ICP Input --------->  */}
              <div className='w-full flex flex-col gap-2'>
                {/* label --> */}
                <div className='w-full flex justify-between items-center'>
                  <p className='text-[16px] sm:text-[20px] text-black font-satoshiM'>
                    {activeButton === 'stake' ? 'Stake ICP' : 'Unstake sICP'}
                  </p>
                  <div className='flex justify-center items-center gap-1'>
                    <IoWalletOutline className='text-[24px] text-blue-main' />
                    <p className='text-[16px] sm:text-[20px] text-blue-main font-satoshiM'>
                      Balance:
                    </p>
                    <p className='text-[16px] sm:text-[20px] text-blue-main font-satoshiM'>
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
                  className='w-full h-[60px] sm:h-[80px] rounded-[16px] inputBg px-4 text-[26px] sm:text-[32px] font-satoshiR text-right focus:outline-blue-main'
                />
              </div>
              {/* recieve ICP Input --------->  */}
              <div className='w-full flex flex-col gap-2'>
                {/* label --> */}
                <p className='text-[16px] sm:text-[20px] text-black font-satoshiM'>
                  {activeButton === 'stake' ? 'Receive sICP' : 'Receive ICP'}
                </p>

                {/* input --->  */}
                <input
                  type='number'
                  placeholder='0.0'
                  value={stakeValue.receive}
                  onChange={(e) => handleInputChange(e, 'receive')}
                  className='w-full h-[60px] sm:h-[80px] rounded-[16px] inputBg px-4 text-[26px] sm:text-[32px] font-satoshiR text-right focus:outline-blue-main'
                />
              </div>
              {/* stake and unstake button ----------->  */}
              <Button styles='w-full btnGr text-white text-[20px] sm:text-[22px] font-satoshiM h-[60px] sm:h-[65px]'>
                {activeButton === 'stake' ? 'Stake Now' : 'Unstake'}
              </Button>
              <div className='w-full sm:px-0 px-2 flex flex-col gap-2 sm:gap-3'>
                {/* network fee ------------>  */}
                <div className='w-full flex justify-between items-center mt-1 sm:mt-4'>
                  <p className='text-[16px] sm:text-[20px] text-black font-satoshiR'>
                    Network Fee:
                  </p>
                  <p className='text-[18px] sm:text-[20px] text-black font-satoshiB'>
                    0.0001 ICP
                  </p>
                </div>
                {/* 1CP equal to  ------------>  */}
                <div className='w-full flex justify-between items-center'>
                  <p className='text-[16px] sm:text-[20px] text-black font-satoshiR'>
                    1 {activeButton === 'stake' ? 'ICP' : '1 sICP'} =
                  </p>
                  <p className='text-[18px] sm:text-[20px] text-black font-satoshiB'>
                    {activeButton === 'stake' ? ' 00.9785 sICP' : ' 1.1045 ICP'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
      {/* gradients ----------------> */}
      <div className='w-[200px] md:w-[500px] h-[400px] overflow-hidden sm:h-[480px] bgGr absolute -left-6 sm:-left-32 -z-10 -top-12 sm:-top-24'></div>
      <div className='w-[200px] sm:w-[300px] md:w-[600px] h-[300px] sm:h-[530px] bgGr absolute right-0 -z-10 bottom-16'></div>
      <div className='w-[200px] sm:w-[300px] md:w-[200px] h-[300px] sm:h-[350px] -rotate-45 bgGr absolute left-0 -z-10 -bottom-16'></div>
    </div>
  );
};

const slakeStatistics = [
  {
    name: 'Slaking APR',
    value: '10.58%',
  },
  {
    name: 'Total ICP Stake on Slake',
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
