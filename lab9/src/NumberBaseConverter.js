import React, { useState } from 'react';

const NumberBaseConverter = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [inputBase, setInputBase] = useState(10);
  const [outputNumber, setOutputNumber] = useState('');
  const [outputBase, setOutputBase] = useState(2);

  const handleInputNumberChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleInputBaseChange = (e) => {
    setInputBase(Number(e.target.value));
  };

  const handleOutputBaseChange = (e) => {
    setOutputBase(Number(e.target.value));
  };

  const convertNumber = () => {
    const number = parseInt(inputNumber, inputBase);
    setOutputNumber(number.toString(outputBase));
  };

  return (
    <div>
      <input
        type="text"
        value={inputNumber}
        onChange={handleInputNumberChange}
      />
      <select value={inputBase} onChange={handleInputBaseChange}>
        <option value={2}>Binary (2)</option>
        <option value={10}>Decimal (10)</option>
        <option value={16}>Hexadecimal (16)</option>
      </select>
      <button onClick={convertNumber}>Convert</button>
      <input type="text" value={outputNumber} readOnly />
      <select value={outputBase} onChange={handleOutputBaseChange}>
        <option value={2}>Binary (2)</option>
        <option value={10}>Decimal (10)</option>
        <option value={16}>Hexadecimal (16)</option>
      </select>
    </div>
  );
};

export default NumberBaseConverter;