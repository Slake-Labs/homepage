import React from 'react';

const WhyStakeCard = ({ icon, title, des }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[370px] h-full flex flex-col gap-3 bg-white rounded-[24px] cardShadow justify-center items-center p-6'>
        {/* img ---->  */}
        {icon}
        {/* title --->  */}
        <p className='text-[24px] text-center leading-[30px] text-black font-satoshiM'>
          {title}
        </p>
        {/* des ---->  */}
        <p className='text-black text-center font-satoshiR text-[18px]'>
          {des}
        </p>
      </div>
    </div>
  );
};

export default WhyStakeCard;
