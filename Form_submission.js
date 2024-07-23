import { useState , useRef , useEffect}  from "react";
function App() {
  const [name , setName ] = useState("")
  const inputRef = useRef(null)
  const handleChange = (e) => {
	setName(e.target.value)
  };

  const handleSubmit = (e) =>{
	e.preventDefault()
	console.log('My name is ', name);
  }

  useEffect(()=>{
	inputRef.current.focus()
  },[])
  return (
   
	<form onSubmit={handleSubmit}>
  	<label > <h5>Enter the username :  </h5></label>
    
  	<input type="text"  value={name} onChange={handleChange} ref ={inputRef} required/>
  	<br /><br />
  	<button>  SUBMIT  </button>
	</form>
  )
}  

export default App;






