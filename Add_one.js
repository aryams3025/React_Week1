import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
 
  const counter =()=>{
	setCount(count + 1)
    
  }
  return (
	<div className='App'>
  	<h1>{count}</h1>
  	<button onClick={counter}>add</button>
	</div>
    
  );
}

export default App;
