import { useState } from "react"
import { Todolist } from "./todolist"
import './todo.css'

export const Todo=()=>{

  const [text, setText]=useState("")
  const [todolist, SetTodolist]=useState([])
  const updateTodo=()=>{    
    var date = Date().toLocaleString()
    
    let reload={
        title:text,
        flag:false,
        id:date

    }

    SetTodolist([...todolist,reload])
    console.log(todolist)


  }
  const update_data=(id)=>{
      SetTodolist([...todolist.map((e)=>(e.id===id ? {...e,flag:!e.flag}:e))])
  }
  
    return (
        
        <div className="main_div">
            <h1>TODO APP</h1>
            <input type="text" placeholder="Your Todo Here" onChange={(el)=>setText(el.target.value)}></input>
            <button onClick={()=>updateTodo()} className='add'>Add</button>
           
            <Todolist data={todolist} change={update_data} />
            
        </div>
    )
}