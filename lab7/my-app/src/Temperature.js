import React from 'react';

const Temperature = ({ t }) => {
  const color = t < 0 ? 'blue' : 'red';
  return <div style={{ color }}>{t}</div>;
};

export default Temperature;