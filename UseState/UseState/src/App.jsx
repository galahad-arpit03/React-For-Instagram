import { useState } from 'react';

function App() {
  // Step 1: Declare the state using useState hook
  const [count, setCount] = useState(0);

  // Step 2: Define increment and decrement functions
  const increment = () => {
    setCount(count + 1);  // Increases the counter
  };

  const decrement = () => {
    setCount(count - 1);  // Decreases the counter
  };

  // Step 3: Return the JSX to render the UI
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <div>
        <button 
          onClick={increment} 
          style={{
            padding: '10px 20px', 
            fontSize: '16px', 
            marginRight: '10px',
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
          }}>
          Increment
        </button>
        <button 
          onClick={decrement} 
          style={{
            padding: '10px 20px', 
            fontSize: '16px', 
            backgroundColor: '#f44336', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
          }}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
