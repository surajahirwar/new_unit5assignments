
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [text,setText]=useState("")
  const [append,setappend]=useState([])
  const [post,setPost]=useState(1)
  const [comp,setComp]=useState(false)
  const [todoC,settodoC]=useState(1)
  const [append2,setappend2]=useState([])
  
 
  useEffect(()=>{
    getdata()
    
  },[post])
 .
  useEffect(()=>{
    compdata()
  
  },[post,todoC])
  
  const putdata= async(text)=>{ 
    const data={
      todo:text,
      status:false
    }
    await fetch("http://localhost:8080/todo",{
      method:"POST",
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
     },
    })
    
    getdata()
    

  }
  const getdata=async()=>{
     
    let res =await fetch(`http://localhost:8080/todo?status=false&_page=${post}&_limit=5`)
    let data=await res.json()
    
  
     setappend(data)

    
  }
  const compdata=async()=>{
     
    let res =await fetch(`http://localhost:8080/todo?status=true&_page=${todoC}&_limit=5`)
    let data=await res.json()
    
  
     setappend2(data)

    
  }

  const update=async(id)=>{
    let data={
      status:true
    }
     await fetch(`http://localhost:8080/todo/${id}`,{
       method:"PATCH",
       body:JSON.stringify(data),
       headers:{
        "Content-Type": "application/json"
       }
     })
  
    getdata()
    compdata()
  }

  return (
    <div className="App">
         <h1>Todo App</h1>
         <input type="text" placeholder='write something here' onChange={(e)=>setText(e.target.value)}/> 
         <button onClick={()=>putdata(text)}>+</button> 
         
         {append.map((e)=>{
          if(e.status===false){
            return <div key={e.id} className='todolist' onClick={()=>update(e.id)}><input type="checkbox"/><h3>{e.todo}</h3></div>
          }
         })}
        <div>{post>1?<button onClick={()=>setPost(post-1)}>Prev</button>:null}{append.length!==0 && post>=1 ? <button onClick={()=>setPost(post+1)}>Next</button>:null}</div>
         
        
       <button onClick={()=>setComp(!comp)}>Show Completed Todo</button>
         
        {comp ? <div>{append2.map((e)=>{
          if(e.status===true){
            return <div key={e.id} className='todolist' ><input type="checkbox" checked/><h3>{e.todo}</h3></div>
          }
         })}
           <div>{todoC>1?<button onClick={()=>settodoC(todoC-1)}>Prev</button>:null}{append2.length!==0 && todoC>=1 ? <button onClick={()=>settodoC(todoC+1)}>Next</button>:null}</div>
           </div>:null}
    </div>
  );
}

export default App;
