import React, { Component } from 'react'
import Cards from "./cards";
import NavBar from "./navBar";
import "./../App.css";
import axios from 'axios';

export default class dashBoard extends Component {
  render() {
    axios.get('localhost:1234/product').then(resp => {

    console.log(resp.data);});
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
