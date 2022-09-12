import "./login.css";
import React, { Component } from 'react';



export default class login extends Component {
  render() {
    return (
    <body>
      <div className="login-box">
      <h1>Login</h1>
      <form action="">
        <label htmlFor="username">Username or email</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Username/email"
        />

        <label htmlFor="Password" id="id1">Password</label>
        <input type="password" name="" id="psw" placeholder="Password" />

        <button  type='button'><a href='/DashBoard'><input type="sumbit" name="" id="input" value="Login"></input></a></button>
        
        

        <a href="/Forgot">Forgot password? clic here</a><br />
        <a href="/Signup">New here? Sign in now!</a>
      </form>
    </div>
    </body>
    )
  }
}
