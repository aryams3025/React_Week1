// import React, {useState} from 'react'

// function App() {

//   const [input1 , setInput1] = useState('')
//   const [input2, setInput2] = useState('')
//   const [message , setMessage] = useState('')

//   const handleMessage =()=>{
//     if(input1 === input2){
//       setMessage("inputs are same ")
//     }else{
//       setMessage("inputs are not same")
//     }
//   }
//   return (
//     <div>
//       <input type="text" value = {input1} onChange={e =>setInput1(e.target.value) } /> <br />
//       <input type="text" value={input2} onChange={e =>setInput2(e.target.value)}/> <br />
//       <button onClick={handleMessage}> SUBMIT</button>
//       <p>{message}</p>
//     </div>
//   )
// }

// export default App
// import React , {useState} from 'react'

// function App() {

//   const [firstName ,  setFirstName] = useState('')
//   const [secondName , setSecondName] = useState('')
//   const [ message , setMessage] = useState('')
//   const predefinedName = 'Arya Vysakh'
//   const checkName = () =>{
//     if(`${firstName} ${secondName}` === predefinedName){
//       setMessage("correct fullname")
//     }else{
//       setMessage("incorrect full name")
//     }
//   }
//   return (
//     <div>
//       <input type="text"  value ={firstName} onChange={e => setFirstName(e.target.value)}/>
//       <br /><br />
//       <input type="text" value={secondName} onChange={e => setSecondName(e.target.value)} />
//       <br /><br />
//       <button onClick={checkName}>SUBMIT</button>
//       <br /><br />
//       <p>{message}</p>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
// const [username , setUsername] = useState('')
// const [email , setEmail] = useState('')
// const [password , setPassword] = useState('')
// const [message , setMessage] = useState('')

// const handleRegister = () =>{
//     if(!username || !email || !password){
//         setMessage("Fill all the input fields")
//         return 
//     }
//     if(!email.includes('@')){
//         setMessage("The email not in the correct format")
//         return
//     }
//     if(password.length < 6){
//         setMessage("Password must be more than 6 characters including numbers , characters and special characters")
//         return
//     }

//     setMessage("Registration successful")
// }
//   return (
//     <div>
//       Username  : <input type="text" 
//     //   placeholder='eg : Arya MS'  
//       value={username}
//       onChange={e=>setUsername(e.target.value)}/> <br /><br />
//       Email    : <input type="text" 
//     //   placeholder='arya@yopmail.com'
//       value={email}
//       onChange={e =>setEmail(e.target.value)}/> <br /><br />
//       Password : <input type="text"
//     //   placeholder='*******'
//       value={password}
//       onChange={e => setPassword(e.target.value)} />
//       <button onClick={handleRegister}> REGISTER</button>
//       <p>{message}</p>
//     </div>
//   )
// }

// export default App



// import React, { useRef } from 'react';

// function App() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h1>Focus the Input</h1>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'

// function App() {
//   const [age , setAge]  = useState()
// const [msg , setMsg] = useState()

// const ageRange = (age) => age >= 18 && age <=60

// const handleRange = () =>{
//  if(!ageRange(age)){
//   setMsg("not in the range")
//  }else{
//   setMsg("in the range")
//  }
// }
//   return (
//     <div>
//       <input type="text" value={age} onChange={e => setAge(e.target.value)} />
//       <button onClick={handleRange}>submit</button>
//       <p>{msg}</p>
//     </div>
//   )
// }

// export default App


// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// const App = () => (
//   <div>
//     <h1>Main App</h1>
//     <Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </Suspense>
//   </div>
// );

// export default App;


// import React, { useCallback, useState } from 'react'

// const Button = React.memo(({onClick}) =>{
//   console.log("child component rendered");
//  return(
//   <button onClick={onClick}>Click me</button>
//  )
// })

// function App() {
//   const [count , setCount] = useState(0)

//   const handleIncrement = useCallback(() =>{
//     setCount ( count + 1)
//   },[count])
//   return (
//     <div>
//       <Button onClick={handleIncrement}>INCREMENT</Button>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react';

// const ExpensiveComponent = React.memo(({ value }) => {
//   console.log('ExpensiveComponent rendered');
//   return <div>Value: {value}</div>;
// });

// const App = () => {
//   const [count, setCount] = useState(0);
//   const computedValue = useMemo(() => 
//   count * 2, [count]);

//   return (
//     <div>
//       <ExpensiveComponent value={computedValue} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react'

// function App() {
//   const [count ,setCount] = useState(0)

//   const handleIncrement = () =>{
//     setCount(count + 1)
//   }
//   const handleDecrement = () =>{
//     setCount((prev) => prev > 0 ? prev - 1 : 0 )
//   }
//   return (
//     <div>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <p>{count}</p>
//       <button onClick={handleDecrement}>DECREMENT</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
// const [sen , setSen] = useState('')
// const [sen2 , setsen2] = useState('')
// const [ msg , setMsg] = useState('')

// const handleEqual = () =>{
//   if(sen === sen2) {
//     setMsg("sentence are equal")
//   }else{
//     setMsg("sentence are not equal")
//   }
    
// }

//   return (
//     <div>
//       <input type="text" 
//       value={sen}
//       onChange={e => setSen(e.target.value)}/>
//       <input type="text"
//       value={sen2}
//       onChange={e => setsen2(e.target.value)} />
//       <button onClick={handleEqual}>SUBMIT</button>
//       <p>{msg}</p>
//     </div>
//   )
// }

// export default App


// import React, { useState , useMemo } from 'react'

// function App() {
//   const [count , setCount] = useState(0)

  

//   const handleCount = useMemo(()=>{
//     return count * 2
//   },[count])
//   return (
//     <div>
//       < button onClick={handleCount}>Increment</button>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// function App() {

//   const [state , setState] = useState(['india', 'malesia','indonesia','brazil'])
//   const [msg , setMsg] = useState('')
//   const [filter , setFilter] = useState('')


//   const handleFilter = () =>{
//     const filtered = state.map((e)=>{
//       e.startsWith(msg)
//     })
//     setFilter(filtered)
//   }
//     return (
//     <div>
//       <input type="text" onChange={(e) => setMsg(e.target.value)
//       } />
//       <p>{filter}</p>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react';

// function App() {
//   const [state, setState] = useState(['india', 'malaysia', 'indonesia', 'brazil']);
//   const [msg, setMsg] = useState('');
//   const [filter, setFilter] = useState('');

//   const handleFilter = () => {
//     const filtered = state.filter((e) => e.startsWith(msg));
//     setFilter(filtered.join(', ')); // Joining the filtered array into a string
//   };

//   return (
//     <div>
//       <input type="text" onChange={(e) => setMsg(e.target.value)} />
//       <button onClick={handleFilter}>Filter</button>
//       <p>{filter}</p>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'

// function App() {
//   const [state , setState] = useState(["india" , "bruzil","malesia" , "Jappan" , "indonesia" , "Arjentina" , "America" ])
//   const [filter , setFilter] = useState('')
//   const [msg , setMsg] = useState('')

//   const handleFilter =() =>{
//     const filteredCountries = state.filter( country =>
//       country.toLowerCase().includes(filter.toLowerCase())
//     )
//     setMsg(filteredCountries.join(','))
//   }
//   return (
//     <div>
//       <input type="text"  onChange={e => setFilter(e.target.value)}/><br />
//       <button onClick={handleFilter}>Filter</button><br />
//       <p> Filtered countries are : {msg}</p>
//     </div>
//   )
// }

// export default App



// import React, { useReducer } from 'react'

// function reducer(state, action){
//   switch(action.type){
//     case 'INCREMENT' : 
//       return {count : state.count + 1}
//     case 'DECREMENT' :
//       return {count : state.count > 0  ? state.count - 1 : 0}
//     default :
//        return {count : 0}  
//   }
// }

// function App() {
// const [state , dispatch] = useReducer(reducer , {count : 0})

//   return (
//     <div>
//       <button  onClick={()=> dispatch({type : 'INCREMENT'})}> INCREMENT </button>
//       <p>{state.count}</p>
//       <button  onClick = { () => dispatch({type : 'DECREMENT'})}> DECREMENT</button>
//     </div>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react'

// function App() {

//   const [count , setCount] = useState(0)
  
//   const doubleCount = useMemo(()=>{
//     return count * 2
//   },[count])

//   const handleCount = () =>{
//     setCount(previous => previous + 1)
//   }
//   return (
//     <div>
//       <button onClick={handleCount}>PLUS</button>
//       <p>{count}</p>
//       <p>{doubleCount}</p>
//     </div>
//   )
// }

// export default App



// import React, { useCallback, useState } from 'react'

// function App() {

//   const [count , setCount] = useState(0)
//   const handleCount = useCallback(()=>{
//     setCount(count => count + 1)
//   },[])
    
//   return (
//     <div>
//       <button onClick={handleCount}>INCREMENT</button>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App


// import React, { useState, useContext, createContext } from 'react';

// const ThemeContext = createContext();

// function ThemeComponent() {
//   const { theme, setTheme } = useContext(ThemeContext);
//   return <button onClick={() => 
//     setTheme(theme === 'light' ? 'dark' : 'light')}>Current theme: {theme}</button>;
// }

// function App() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <ThemeComponent />
//     </ThemeContext.Provider>
//   );
// }

// export default App;


// import React from 'react'
// import { useCallback } from 'react'
// import { useState } from 'react'

// function App() {
//   const [count , setCount] = useState(0)
//   const handleCount = useCallback(()=>{
//     setCount (count + 1)
//   },[count])
//   return (
//     <div>
//       <button onClick={handleCount} >INCREMENT</button>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useMemo } from 'react'
// import { useState } from 'react'

// function App() {
//   const [count ,setCount] = useState(0)
//   const doubleCount = useMemo(()=>{
//     return count * 2
//   },[count])
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>INCREMENT</button>
//       <p>{count}</p>
//       <p>{doubleCount}</p>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function App() {
  const [count , setCount] = useState(0)

  const doubleCount = useMemo(()=>{
    
      return count * 2
 
  },[count])
  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>Double</button>
      <p>{count}</p>
      <p>{doubleCount}</p>
    </div>
  )
}

export default App



