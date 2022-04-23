import { createContext, useState } from "react";

export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
    const [isAuth,setisAuth]=useState("login")

const toggleAuth=()=>{
   setisAuth(isAuth==="login" ? "logout":"login")
}
    return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
}