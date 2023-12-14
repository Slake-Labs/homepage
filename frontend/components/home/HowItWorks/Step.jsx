import React from 'react';

const Step = ({ isRight = true, stepNum, title, des, img }) => {
  return (
    <div
      className={`w-full grid ${
        isRight
          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr,1.7fr]'
          : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.7fr,2fr]'
      } justify-center items-center`}
    >
      {isRight ? (
        <>
          {/* description -----> */}
          <div className='w-full flex flex-col items-start justify-center'>
            <p className='text-[40px] md:text-[50px] lg:text-[64px] font-satoshiB textGr'>
              {stepNum}
            </p>
            <p className='text-black font-satoshiM text-[30px] md:text-[40px] lg:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[60px]'>
              {title}
            </p>
            <p className='text-black text-[16px] md:text-[20px] lg:text-[24px] font-satoshiR mt-0 lg:mt-5'>
              {des}
            </p>
          </div>
          {/* image --------> */}
          <img
            src={img}
            className='w-full h-[180px] md:h-[360px] sm:mt-0 mt-2'
          />
        </>
      ) : (
        <div className='w-full col-span-1 sm:col-span-2 flex sm:flex-row flex-col-reverse'>
          {/* image --------> */}
          <img
            src={img}
            className='w-full h-[180px] md:h-[360px] sm:mt-0 mt-2'
          />
          {/* description -----> */}
          <div className='w-full flex flex-col items-start justify-center'>
            <p className='text-[40px] md:text-[50px] lg:text-[64px] font-satoshiB textGr'>
              {stepNum}
            </p>
            <p className='text-black font-satoshiM text-[30px] md:text-[40px] lg:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[60px]'>
              {title}
            </p>
            <p className='text-black text-[16px] md:text-[20px] lg:text-[24px] font-satoshiR mt-0 lg:mt-5'>
              {des}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
