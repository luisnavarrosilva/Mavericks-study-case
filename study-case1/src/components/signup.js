import "./signup.css"
import React, { Component } from 'react'

export default class signup extends Component {
  render() {
    return (
        <body>
        <div className="login-box">
        <h1>Please insert your data</h1>
        <form action="">
          <label for="username">email</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Username/email"
          />
  
          <label for="Password">Password</label>
          <input type="password" name="" id="" placeholder="Password" />

          <label for="Password">Repeat Password</label>
          <input type="password" name="" id="" placeholder="Password" />

          <label for="Password">Name</label>
          <input type="text" name="" id="" placeholder="Name" />

          <label for="Password">Last name</label>
          <input type="text" name="" id="" placeholder="Last name" />

          <label for="Password">Phone Number</label>
          <input type="text" name="" id="" placeholder="Phone Number" />

          <label for="Password">Adress</label>
          <input type="text" name="" id="" placeholder="Adress" />

          <a href='#'><input type="sumbit" name="" id="" value="Sign-in"></input></a>
          
  
          <a href="/">Back to login page</a><br />
        </form>
      </div>
      </body>
    )
  }
}
