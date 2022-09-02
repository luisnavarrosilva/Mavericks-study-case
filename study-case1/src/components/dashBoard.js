import React, { Component } from 'react'
import Cards from "./cards";
import NavBar from "./navBar";
import "./../App.css";

export default class dashBoard extends Component {
  render() {
    return (
        <div>
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
