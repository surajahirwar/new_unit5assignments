import { createContext, useState } from "react";


export const ToggleContext=createContext()

export const ToggleContextProvider=({children})=>{
    const [theme,setTheme]=useState(true)
const toggle=(value)=>{
    setTheme(value)
}
    return <ToggleContext.Provider value={{theme,toggle}}>{children}</ToggleContext.Provider>
}