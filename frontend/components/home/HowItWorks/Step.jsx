import React from 'react';
import './HowItWorks.css';

const Step = ({ isRight = true, stepNum, title, des, img }) => {
  return (
    <div className={` ${isRight ? 'leftStep' : 'rightStep'}`}>
      {isRight ? (
        <>
          {/* description -----> */}
          <div className='stepWrapper'>
            <p className='stepNum'>{stepNum}</p>
            <p className='stepTitle'>{title}</p>
            <p className='stepDes'>{des}</p>
          </div>
          {/* image --------> */}
          <img src={img} className='stepImg' alt='' />
        </>
      ) : (
        <div className='step2Wrapper'>
          {/* image --------> */}
          <img src={img} className='stepImg' alt='' />
          {/* description -----> */}
          <div className='stepWrapper'>
            <p className='stepNum'>{stepNum}</p>
            <p className='stepTitle'>{title}</p>
            <p className='stepDes'>{des}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
