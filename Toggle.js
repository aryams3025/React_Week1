import { useState } from 'react';
import './App.css';

const App= ()=> {
  const [isToggled , setIsToggled] = useState(false);
  const [color , setColor] = useState('red');


  const toggle = () => {
	setIsToggled(!isToggled)
	setColor(isToggled ? 'red' : 'green')
  }

  return (
	<button onClick={toggle} style={{backgroundColor: color, color: 'white',cursor : 'pointer'}}>{isToggled ? 'ON' : 'OFF'}</button>
  );
}

export default App;
