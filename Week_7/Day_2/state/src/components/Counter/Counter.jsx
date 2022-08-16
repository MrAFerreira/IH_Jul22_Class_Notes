import React, { useState } from 'react';

function Counter() {
  //Destructuring the state variable and the updater function from the useState hook
  const [count, setCount] = useState(0);

  /*  function useState(initialValue){
      return [count = 0, setCount()]
  } */
  /*   function updateCounter() {
    setCount();
  } */

  const handleCountIncrease = () => {
    setCount(count + 1);
  };
  const handleCountDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>

      <button onClick={handleCountDecrease}> - </button>

      <button onClick={handleCountIncrease}> + </button>

      {/*
      
      Here we can pass an anonymous function but it's not best practice

      <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button> */}

      {/*     
  Example of how the updater function works
 function setCount(newValue){
        count = newValue;
      }
      setCount(count - 1) */}
    </div>
  );
}

export default Counter;

let names = [
  { name: 'Adriana', bootcamp: 'WebDev' },
  { name: 'Andrea', bootcamp: 'WebDev' },
  { name: 'Brenda', bootcamp: 'WebDev' },
  { name: 'Gabriella', bootcamp: 'WebDev' },
  { name: 'Jason', bootcamp: 'WebDev' },
  { name: 'John', bootcamp: 'WebDev' },
  { name: 'Lucas', bootcamp: 'WebDev' },
  { name: 'Luis', bootcamp: 'WebDev' },
  { name: 'Luisa', bootcamp: 'WebDev' },
  { name: 'Luiz', bootcamp: 'WebDev' },
  { name: 'Majid', bootcamp: 'WebDev' },
  { name: 'Matulan', bootcamp: 'WebDev' },
  { name: 'Miguel', bootcamp: 'WebDev' },
  { name: 'Paulo', bootcamp: 'WebDev' },
  { name: 'Philip', bootcamp: 'WebDev' },
  { name: 'Raquel', bootcamp: 'WebDev' },
  { name: "Simão, bootcamp: 'WebDev'" },
];
