import { useContext, useState } from "react"
import { UserContext } from "../contexts/userContext"

export const Login=()=>{
    const [fetchData,setFetchData]=useState({
        email:"",
        password:""
    })

      const {updateData}=useContext(UserContext)
    
      const updatefetch=(tag)=>{
         
          setFetchData({
              ...fetchData,
              [tag.id]:tag.value
          })
         
      }
      const getData=async()=>{
         let res= await fetch("https://reqres.in/api/login",{
              method:"POST",
              body:JSON.stringify(fetchData),
              headers:{
                   "Content-Type": "application/json"
              }

          })
          let data=await res.json()
          if(data){
              updateData("Logged in",data.token)
          }
      }

    return (<div>
        <form>
         <input id="email" onChange={(e)=>{
             e.preventDefault()
             updatefetch(e.target)
         }} type="email" placeholder="Enter email" />
         <input id="password" type="text" placeholder="Enter password" onChange={(e)=>{
             e.preventDefault()
             updatefetch(e.target)
         }}/>
         
          <input type="submit" onClick={(e)=>{e.preventDefault();getData()}} />
         </form>
    </div>)
}