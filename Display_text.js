import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(false)
  const [btn , setBtn] = useState(false)
  const handleclick =()=>{
	setNum(!num)
	setBtn(!btn)
  }
  return (
	<div>
  	<h1>
    	{num ? 'onclick done' : 'onclicked not done'}
  	</h1>
  	<button onClick={handleclick}>{btn ? 'clicked' : 'onclick'}</button>
	</div>
    
  );
}

export default App;
