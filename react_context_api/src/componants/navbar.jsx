
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { UserContext } from "../contexts/userContext"

export const Navbar=()=>{
  const {isAuth,toggleAuth}=useContext(AuthContext)
  const {updateData}=useContext(UserContext)
    return (
        <div>
         <button onClick={()=>(isAuth==="logout"? toggleAuth():null)}>Login</button>
         <button onClick={()=>{if(isAuth==="login"){toggleAuth()};
        updateData("Logged out","")}}>logout</button>
        </div>
       
    )
}