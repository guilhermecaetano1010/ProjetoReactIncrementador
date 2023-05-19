import {useState} from 'react'
import './App.css'

function App() {
 const  [value, setValue] = useState(0)
 return(
    <>
    <h2>Create a count in react</h2> 
    <p>{value}</p>
 <button type="button" className="btn" onClick={() => setValue(value-1)}>decrease</button>
 <button type="button" className="btn" onClick={() => setValue(0)}>reset</button>
 <button type="button" className="btn" onClick={() => setValue(value+1)}>increase</button>
    </>
 )
}
export default App
