import { useContext } from "react"
import {UserContext} from '../contexts/userContext'

export const User=()=>{
    const value=useContext(UserContext)
  
    
    return <div>
        <h1>{value.Data.status}</h1>
        <h1>{value.Data.Token}</h1>
    </div>
}