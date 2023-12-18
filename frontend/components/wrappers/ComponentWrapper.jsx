import React from 'react';
import './ComponentWrapper.css';

const ComponentWrapper = ({ styles = {}, children }) => {
  return (
    <div className={`wrapper-outer`}>
      <div className='wrapper-inner'>{children}</div>
    </div>
  );
};

export default ComponentWrapper;
