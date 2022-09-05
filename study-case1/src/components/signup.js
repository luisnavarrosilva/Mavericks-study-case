import "./signup.css"
import React, { Component } from 'react'
import { revision } from "../functions/Register";
import "../functions/Register";
import axios from 'axios';

export default class signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {
      id: 1,
      name: "luis",
      lastName: "silva",
      email: "luis.navarrosilva.90@gmail.com",
      userName: "gerry",
      password: "gerry123",
      phoneNumber: "2491375043",
      adress: "1",
      accountType: "Client"
      },
    };
  }
  

  render() {
    return (
        <body>
        <div className="login-box-sg">
        <h1>Please insert your data</h1>
        <form action="">
          <label for="username">email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Username/email"
            onChange={this.onChangeHandler}
          />
  
          <label for="Password">Password</label>
          <input type="password" name="password" id="password1" placeholder="Password" onChange={this.onChangeHandler}/>

          <label for="Password">Repeat Password</label>
          <input type="password" name="password" id="password2" placeholder="Password" onChange={this.onChangeHandler}/>

          <label for="Password">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" onChange={this.onChangeHandler}/>

          <label for="Password">Last name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Last name" onChange={this.onChangeHandler}/>

          <label for="Password">Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={this.onChangeHandler}/>

          <label for="Password">Adress</label>
          <input type="text" name="adress" id="adress" placeholder="Adress" onChange={this.onChangeHandler}/>

          <button onClick={this.onUserSubmit} type='button'>button</button>
          
          
          <a href="/">Back to login page</a><br />
        </form>
      </div>
      </body>
    )
  }
    onUserSubmit(){
        const body={
          "name":document.getElementById("name").value,
          "lastName":document.getElementById("lastName").value,
          "email":document.getElementById("email").value,
          "userName":document.getElementById("email").value,
          "password":"gerry123",
          "phoneNumber":document.getElementById("phoneNumber").value,
          "adress":document.getElementById("adress").value,
          "accountType":"Client"
        }
          axios.post('http://192.168.0.100:1234/user',body)
          .then(function (response) {
            alert("Registred user");
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  };
