

import './App.css'
import {Body, Img, H1,P } from "./componants/body"
import {Navbar} from "./componants/navbar"
import {useContext} from 'react'
import {ToggleContext} from "./contexts/ToggleContext"
function App() {
  const {theme}=useContext(ToggleContext)

  return (
    <div className="App">
        <Body id={theme} >
        <Navbar/>
          <Img  src='https://i.gifer.com/5eKX.gif'/>
          <H1 id={theme}>Try to create new</H1>
          <P id={theme}>
              Web developers create and maintain websites. 
              They are also responsible for the site's technical aspects, 
              such as its performance and capacity, which are measures of a website's
              speed and how much traffic the site can handle. In addition, web developers may create content for the site.</P>
        </Body>
        
    
          
           
    </div>
  )
}

export default App
