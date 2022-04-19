import {Timer} from './componants/timer'
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [show,setShow]=useState(true)
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
      let id=setInterval(()=>{
        
          setCounter((count)=>{
              if(count===30){
                  clearInterval(id)
                  return count
              }
              else{
              return count+1
              }
          })
         
      },1000)

      return ()=>{ 
           
          clearInterval(id)
         
      }
      
    
  },[])
  return (
    <div className="App">
     
        {show ? <Timer  seconds={counter} />: null}

        <button onClick={()=>setShow(!show)}>{show ? "Hide":"show"}</button>
       
    </div>
  );
}

export default App;
