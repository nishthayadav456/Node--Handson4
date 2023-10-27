import { BrowserRouter ,NavLink,Route,Routes} from "react-router-dom"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

import Logout from "./logout"
import Home from "./Home"
function DisplayRoute(){
    return(
        <>
 
        <BrowserRouter>
       <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/logout">Logout</NavLink>
        <NavLink to='/register'>Register</NavLink>
       <NavLink to='/login'>Login</NavLink>
       </div>
      
       
        <Routes>
              <Route path="/" element={<Home/>}/>
             <Route path="/logout" element={<Logout/>} />
             <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
          

        </Routes>
        </BrowserRouter>
        </>
    )

}
export default DisplayRoute