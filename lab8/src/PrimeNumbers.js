import React, { useState, useEffect } from 'react';

const PrimeNumbers = () => {
  const [primes, setPrimes] = useState([2]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastPrime = primes[primes.length - 1];
      let nextPrime = lastPrime + 1;

      while (true) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(nextPrime); i++) {
          if (nextPrime % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          setPrimes([...primes, nextPrime]);
          break;
        }
        nextPrime++;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [primes]);

  return <div>Prime Numbers: {primes.join(', ')}</div>;
};

export default PrimeNumbers;