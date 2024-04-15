import React, { useState, useEffect } from 'react';

const AgeCounter = () => {
  const [birthDate, setBirthDate] = useState('');
  const [secondsLived, setSecondsLived] = useState(0);

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  useEffect(() => {
    let interval;
    if (birthDate) {
      interval = setInterval(() => {
        const now = new Date();
        const birth = new Date(birthDate);
        setSecondsLived(Math.floor((now.getTime() - birth.getTime()) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <label htmlFor="birthDate">Enter your date of birth:</label>
      <input
        type="text"
        id="birthDate"
        value={birthDate}
        onChange={handleBirthDateChange}
        placeholder="DD.MM.YYYY"
      />
      {birthDate && (
        <p>You have lived for {secondsLived} seconds.</p>
      )}
    </div>
  );
};

export default AgeCounter;