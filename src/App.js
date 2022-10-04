
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1)
  }

  const handleDec = () => {
    if (count===0) {
      setCount(count)
    }
    else {
      setCount(count - 1)
    }
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <br />
      <button onClick={handleInc}>Increment</button>
      <br />
      <br />
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default App;
