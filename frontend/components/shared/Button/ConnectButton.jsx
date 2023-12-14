import React from 'react';

const ConnectButton = ({ styles, children, event = () => {} }) => {
  return (
    <button
      onClick={event}
      className={`${styles} rounded-[64px] active:translate-y-[2px] tracking-wider font-semibold hover:opacity-80`}
    >
      {children}
    </button>
  );
};

export default ConnectButton;
