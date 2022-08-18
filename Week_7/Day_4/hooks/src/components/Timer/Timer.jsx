import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  //useEffect only takes two arguments
  // first - callback to be executed
  //dependecy array
  // useEffect(callback, dependecyArray)

  //useEffect(()=> {}, [])

  useEffect(() => {
    console.log('initial mounting phase');
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //This return inside use effect will only happen on the UNMOUNTING phase
    return () => {
      console.log('unmounting phase');
      clearInterval(intervalId);
    };

    //An empty dependency array will only trigger the callback on the MOUNTING phase
  }, []);

  useEffect(() => {
    document.title = count;

    //Passing a value to the dependency array makes the callback trigger everytime that value changes
  }, [count]);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
