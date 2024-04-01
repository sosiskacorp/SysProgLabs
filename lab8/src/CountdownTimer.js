import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return <div>Countdown: {countdown}</div>;
};

export default CountdownTimer;