import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [arr, setArr] = useState([]);

  const [arrsum, setSum] = useState(0);

  
  useEffect(() => {
    let newSum = 0;
    for(let num of arr){
      newSum+=num;
      console.log(num)
    }
    setSum(newSum);
  }, [arr]);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
   
      setArr([...arr, newValue]);
    }
    
    return (
      <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleInputChange} />
      <p>Sum: {arrsum}</p>
    </div>
  );
};


export default SumCalculator;