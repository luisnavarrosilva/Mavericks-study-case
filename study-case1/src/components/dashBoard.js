import React, { Component } from 'react'
import Cards from "./cards";
import NavBar from "./navBar";
import "./../App.css";
import "../functions/Register";
import axios from 'axios';
export default class dashBoard extends Component {
  render() {
    axios.get('http://localhost:1234/product').then(response =>{
      this.datos = response.data;
      for(let i=0; response.data.length-1; i++){
       this.names = response.data[i].name;
      }
    })
    .catch(e => {
      console.log(e);
    })
    return (
        <div>
          <h1>{}</h1>
        <NavBar></NavBar>
        <div className="cards-container">
        <div class="row">
          <div class="col-sm-4">
            <Cards></Cards>
        </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <Cards></Cards>
        </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          </div>
          <div class="row">
          <div class="col-sm-4">
            <Cards></Cards>
        </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
        </div>
        </div>
        </div>
       
    )
  }
}
