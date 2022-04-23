
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Navbar } from './componants/navbar';
import {Login} from './componants/login'
import {Logout} from './componants/logout'
import {User} from './componants/user'
function App() {
  const {isAuth}=useContext(AuthContext)
  return (
    <div className="App">
    <Navbar/>
     {isAuth==="login" ? <Login/>:<Logout/>}
     <User/>
    </div>
  );
}

export default App;
