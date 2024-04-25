import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };



  //agar hume ek sath 4 baar badhana ho to aise karenge 
  // const addValue = () => {
  //   setCounter(prevCounter => prevCounter+1);
  //   setCounter(prevCounter => prevCounter+1);
  //   setCounter(prevCounter => prevCounter+1);
  //   setCounter(prevCounter => prevCounter+1);
  // };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={()=>{setCounter(counter+1)}}>Add Value {counter}</button>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
