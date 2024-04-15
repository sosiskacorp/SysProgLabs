import React, { useState } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('all');

  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleAddNumber = () => {
    if (newNumber !== '') {
      setNumbers([...numbers, Number(newNumber)]);
      setNewNumber('');
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNumbers = () => {
    switch (filter) {
      case 'even':
        return numbers.filter((num) => num % 2 === 0);
      case 'odd':
        return numbers.filter((num) => num % 2 !== 0);
      default:
        return numbers;
    }
  };

  return (
    <div>
      <input
        type="number"
        value={newNumber}
        onChange={handleNewNumberChange}
      />
      <button onClick={handleAddNumber}>+</button>
      <div>
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="even"
            checked={filter === 'even'}
            onChange={handleFilterChange}
          />
          Even
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="odd"
            checked={filter === 'odd'}
            onChange={handleFilterChange}
          />
          Odd
        </label>
      </div>
      <ul>
        {filteredNumbers().map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;