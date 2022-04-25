import { useContext } from "react"
import { ToggleContext } from "../contexts/ToggleContext"
import { Button } from "./body"

export const Navbar=()=>{
    const {toggle}=useContext(ToggleContext)
    return <div style={{
                display:"flex",
                width:"100px",
                margin:"auto"
            }}>
        <Button onClick={()=>toggle(true)}>Light</Button>
        <Button onClick={()=>toggle(false)}>Dark</Button>
    </div>
}