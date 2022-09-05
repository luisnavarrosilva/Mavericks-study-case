import "./forgot.css"
import React, { Component } from 'react'

export default class Forgot extends Component {
  render() {
    return (
        <body>
        <div class="login-box-f">
        <h1>Forgotten password</h1>
        <form action="">
          <label for="username">e-mail</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="e-mail"
          />
  
  
          <a href='#' className="input1"><input type="sumbit" name="" id="input" value="Password change request"></input></a>
          
  
          <a href="/">Back to login page</a><br />
        </form>
      </div>
      </body>
    )
  }
}
