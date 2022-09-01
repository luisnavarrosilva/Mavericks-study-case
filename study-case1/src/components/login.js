import React, { Component } from 'react'
import "./login.css"

export default class login extends Component {
  

  render() {
    return (
    <body>
      <div className="login-box">
      <h1>Login</h1>
      <form action="">
        <label for="username">Username or email</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Username/email"
        />

        <label for="Password">Password</label>
        <input type="password" name="" id="" placeholder="Password" />

        <a href='/DashBoard'><input type="sumbit" name="" id="" value="Login"></input></a>
        

        <a href="/Forgot">Forgot password? clic here</a><br />
        <a href="/Signup">New here? Sign in now!</a>
      </form>
    </div>
    </body>
    )
  }
}
