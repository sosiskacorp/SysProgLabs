import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <div>Timer: {timer}</div>
      <button onClick={handleStart}>▶</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;