import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("Asadulloh");
  return (
    <div className="App">
      <h1>
        Hello {state} !!!
      </h1>
    </div>
  );
}

export default App;