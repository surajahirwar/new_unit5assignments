
import { useState } from 'react';
import './App.css';
import {Button, Button2} from './components/Button'
function App() {
  const [change,setChange]=useState(true)
  const [color,setColor]=useState("Black")
  return (
    <div className="App">
        <h1>color:{color}</h1>
       <Button state={change} onClick={()=>{setChange(!change);setColor(color==="Black" ? "Red":"Black")}} >Click hrer</Button>
       <Button2> click me </Button2>
    </div>
  );
}

export default App;