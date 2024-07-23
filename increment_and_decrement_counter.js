import { useState } from "react";

function App() {
  const [count , setCount] = useState(0)

  const increment = () =>{
	setCount(count + 1)
  }

  const decrement = () =>{
	setCount(count - 1)
  }
  return (
	<div>
  	<br />
 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={increment}>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
 	<center><h1>{count}</h1></center>
 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={decrement}>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
	</div>
  );
}

export default App;
