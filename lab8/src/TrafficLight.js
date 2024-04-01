import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  // eslint-disable-next-line no-unused-vars
  const [prevColor, setPrevColor] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        switch (prevColor) {
          case 'red':
            setPrevColor('yellow');
            return 'yellow';
          case 'yellow':
            const nextColor = prevColor === 'green' ? 'red' : 'green';
            setPrevColor(nextColor);
            return nextColor;
          case 'green':
            setPrevColor('yellow');
            return 'yellow';
          default:
            setPrevColor('red');
            return 'red';
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default TrafficLight;