import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
  const [string, setString] = useState(s);

  useEffect(() => {
    const interval = setInterval(() => {
      setString(prevString => prevString.slice(1) + prevString[0]);
    }, 1000);

    return () => clearInterval(interval);
  }, [s]);

  return <div>{string}</div>;
};

export default Revert;