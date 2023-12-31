import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
// import { useLocation, useNavigate } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext.js";
import { useUser } from "../contexts/UserContext.js";


export default function Login() {
  
   const {userLogin}=useUser(); 

  // const[username,setUsername]= useState(" ")
  // const [password,setPassword]= useState("")  
  
  //  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const handleLogin = () => {
   
  //   setIsLoggedIn(!isLoggedIn);
  //   navigate(location?.state?.from?.pathname);
  // };
  
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const guestData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const loginHandler = (e) => {
   
      userLogin(userData);
    }
  

  const loginAsGuestHandler = (e) => {
    e.preventDefault();
    setUserData(guestData);
    userLogin(guestData);
  };
    return(
       <div>
        <div>
        <Header/>
    </div>
         <div class="main-container">
       <h1>LOGIN HERE</h1>
       <label>Enter email</label>
       <input 
       type="text"
        id="email" 
        className="email-in"
        placeholder="abc@gmail.com"
        value={userData.email}
        onChange={(e)=>
        setUserData((item)=>({...item,email:e.target.value}))

        }
        required
        />
       <hr/>
       <label>Enter password</label>
       <input type="password" 
       id="password"
        className="password-in"
        placeholder="*******"
        onChange={(e) =>
         setUserData((item) => ({ ...item, password: e.target.value }))
                }
          
         />
       <hr/>

        
       <button className="login-button" onClick={loginHandler}>
            Login
          </button>

          <button className="login-button guest" onClick={loginAsGuestHandler}>
            Login As Guest
          </button>
     </div>
     </div>
        
    )
}
