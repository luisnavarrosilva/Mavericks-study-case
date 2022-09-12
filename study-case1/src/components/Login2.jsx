import React from 'react';
import { useState ,useEffect} from 'react';
import { getlogin } from '../functions/Register';
import "./login.css";
const Login2 =() => {
const [users, setUsers] = useState(null)
useEffect(()=> {
    getlogin(setUsers)
},[])
  return (
    <body>
      <div className="login-box">
      <h1>Login</h1>
      <form action="">
        <label htmlFor="username">Username or email</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Username/email"
          onChange={obtener}
        />

        <label htmlFor="Password" id="id1">Password</label>
        <input type="password" name="" id="psw" placeholder="Password" />
        
        <button  type='button'><a id='change'><input type="sumbit" name="" id="input" value="Login"></input></a></button>
        <a href="/Forgot">Forgot password? clic here</a><br />
        <a href="/Signup">New here? Sign in now!</a>
      </form>
    </div>
    </body>
  )
}
function obtener (){
    console.log(document.getElementById("name").value + "");
    document.getElementById("change").href="/Dashboard/"+document.getElementById("name").value + ""
}
export default Login2