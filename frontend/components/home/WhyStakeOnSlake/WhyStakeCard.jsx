import React from 'react';

const WhyStakeCard = ({ icon, title, des }) => {
  return (
    <div className='card'>
      <div className='stakeCard cardShadow'>
        {/* img ---->  */}
        {icon}
        {/* title --->  */}
        <p className='cardtitle'>{title}</p>
        {/* des ---->  */}
        <p className='des'>{des}</p>
      </div>
    </div>
  );
};

export default WhyStakeCard;
