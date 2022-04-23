import { createContext, useState } from "react";

export const UserContext=createContext()

export const UserContextProvider=({children})=>{
    const [data,setData]=useState({
        status:"Logged out",
        Token:""
    })
    const updateData=(status,token)=>{
        setData({
            ...data,
            status:status,
            Token:token
        })
    }
   return <UserContext.Provider value={{Data:data,updateData}}>{children}</UserContext.Provider>
}