import React, { useState } from 'react';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        <option value="rio">Rio de Janeiro</option>
        <option value="other">Other</option>
      </select>
      {selectedCity !== 'rio' && selectedCity !== '' && (
        <p>No, this is not Rio de Janeiro!</p>
      )}
    </div>
  );
};

export default CitySelector;