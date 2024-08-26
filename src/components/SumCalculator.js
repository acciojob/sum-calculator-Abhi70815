import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [arr, setArr] = useState([]);
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    const newSum = arr.reduce((acc, current) => acc + current, 0);
    setSum(newSum);
  };

  useEffect(() => {
    calculateSum();
  }, [arr]);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      setArr([...arr, newValue]);
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleInputChange} />
      <div>Sum: {sum}</div>
    </div>
  );
};

export default SumCalculator;npm